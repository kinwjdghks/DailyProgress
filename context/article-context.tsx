import { createContext, useState, useContext } from "react";

export type Article = {
  id: string;
  elapsedTime: number;
};

type ctx_article ={
    articles: Article[],
    addArticle: (id: string)=>void,
    removeArticle: (id: string)=>void
}

const dummyArticleList: Article[] = [
  {
    id: "article1",
    elapsedTime: 130,
  },
  {
    id: "article2",
    elapsedTime: 40,
  },
  {
    id: "article3",
    elapsedTime: 75,
  },
  {
    id: "article4",
    elapsedTime: 190,
  },
];


export const articleContext = createContext<ctx_article | undefined>(undefined);

export const ArticleProvider = ({ children }: { children: any }) => {
  const [articleState, setArticleState] = useState<Article[]>(dummyArticleList);

  const addArticle = (id: string): void => {

    const newArticle: Article = { id: id, elapsedTime: 0 };
    const newState: Article[] = [...articleState, newArticle];
    setArticleState(newState);
  };

  const removeArticle = (id: string): void => {
    const newState: Article[] = articleState.filter((item)=>{
      if(item.id != id) return true
    });
    setArticleState(newState);
  };

  return (
    <articleContext.Provider value={{articles: articleState, addArticle: addArticle, removeArticle: removeArticle}}>
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
