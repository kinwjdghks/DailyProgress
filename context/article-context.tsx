import LocalStorage from "@/functions/localstorage";
import { COLOR } from "@/public/assets/colors";
import { createContext, useState, useContext, useEffect, useRef } from "react";

export type Article = {
  id: string;
  elapsedTime: number;
  color: COLOR;
  key: number;
};

type ctx_article = {
  articles: Article[];
  addArticle: (id: string) => void;
  removeArticle: (id: string) => void;
  updateTime: (item: Article, time: number) => void;
};

const dummyList:Article[] = [
  {
    id: '과목1',
    elapsedTime: 4200,
    color: COLOR.blue,
    key:0
  },
  {
    id: '과목2',
    elapsedTime: 3000,
    color: COLOR.red,
    key:1
  }
]


export const articleContext = createContext<ctx_article | undefined>(undefined);

export const ArticleProvider = ({ children }: { children: any }) => {
  // LocalStorage.emptyStorage();
  const windowRef = useRef<Storage|null>(null);

  const [articleState, setArticleState] = useState<Article[]>([]);
  const [articleKey,setArticleKey] = useState<number>(0);

  const addArticle = (id: string): void => {
    const color: COLOR = Math.floor(Math.random()*6) as COLOR;
    
    const newArticle: Article = { id: id, elapsedTime: 0, color: color, key:articleKey };
    const newState: Article[] = [...articleState, newArticle];
    setArticleState(newState);
    setArticleKey((prev)=>++prev);

    LocalStorage.addArticleLS(newArticle);
    LocalStorage.setLocalKeyLS(articleKey+1);
  };

  const removeArticle = (id:string): void => {
    const newState: Article[] = articleState.filter((item_) => {
      if (item_.id != id) return true;
    });
    LocalStorage.removeArticleLS(id);
    setArticleState(newState);
  };

  const updateTime = (item: Article, time: number): void => { //update both State and Local storage
    console.log('time: '+time);
    const targetIdx = articleState.findIndex((item_) => item_.id == item.id);
    if (targetIdx == -1) return;
    const newState = [...articleState];
    console.log("updateTime: "+time+'+'+newState[targetIdx].elapsedTime +'='+ (time+newState[targetIdx].elapsedTime));
    newState[targetIdx].elapsedTime += time;

    LocalStorage.updateArticleLS(item,time);
    setArticleState(newState);
  };

  useEffect(() => {
    if (window) {
      if (!localStorage.getItem("key")) {
        //If it is first login, add dummy articles
        localStorage.setItem("key", "0");
        setArticleState(dummyList);
        setArticleKey(2);
        LocalStorage.addArticleLS(dummyList[0]);
        LocalStorage.addArticleLS(dummyList[1]);
        console.log('list initialized');
      } else {
        setArticleState(LocalStorage.getUserArticles()); //재방문이라면 유저의 정보를 가져와서 보여준다.
        const currentKey = LocalStorage.getLocalKeyLS();
        setArticleKey(currentKey!);
        }
    }
    else console.log("windowRef not found");
  }, [windowRef]);

  useEffect(()=>{
    if(window) windowRef.current = window.localStorage;
    else console.log('cannot find window obj');
  },[]);

  return (
    <articleContext.Provider
      value={{
        articles: articleState,
        addArticle: addArticle,
        removeArticle: removeArticle,
        updateTime: updateTime
      }}
    >
      {children}
    </articleContext.Provider>
  );
};

export function useArticle() {
  const context = useContext(articleContext);

  if (!context)
    throw new Error("useArticle must be used inside a `ArticleProvider`");

  return context;
}
