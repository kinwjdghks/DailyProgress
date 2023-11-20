import { Article } from "@/context/article-context";

class LocalStorage {

  static getLocalKeyLS = ():number|null => {
    if (typeof window !== "undefined"){
      const key = JSON.parse(localStorage.getItem("key")!);
      return key;
    }
    else return null;
  }

  static setLocalKeyLS = (key: number):number =>{
    if (typeof window !== "undefined"){
      localStorage.setItem("key",''+(key+1));
      return 1;
    }
    else return 0;
  }

  static updateArticleLS = (item:Article, time: number): void => { //replace elapsed time
    // if (typeof window !== "undefined" && localStorage.getItem(item.id)) {
    // const key = JSON.parse(localStorage.getItem(item.id)!).key;
    // const article = { id: item.id, elapsedTime: time, key: key };
    // console.log('updateArticleLS:  time = '+time);
    // const article_json = JSON.stringify(article);
    // localStorage.setItem('article_'+item.id, article_json);
    // } else console.log("cannot find localStorage from updateArticleLS");

    const Ndata = localStorage.length;
    if (window) {
      for (let i = 0; i < Ndata; i++) {
        let key = localStorage.key(i);
        if(key == 'article_'+item.id){
          localStorage.setItem('article_'+item.id,JSON.stringify(item));
          console.log('article_'+item.id);
        }
      }
    } else {
      console.log("cannot find window from updateArticleLS");
    }
  };

  static addArticleLS = (item: Article): void => {
    if (typeof window !== "undefined"){
      const article_json = JSON.stringify(item);
      localStorage.setItem('article_'+item.id, article_json);
    }
  };

  static removeArticleLS = (id: string): void => {
    if (typeof window !== "undefined") {
      localStorage.removeItem('article_'+id);
    } else console.log("cannot find localStorage from removeArticleLS");
  };

  static getUserArticles = (): Article[] => {
    const Ndata = localStorage.length;
    const articles: Article[] = [];
    let article_json: string;
    if (window) {
      for (let i = 0; i < Ndata; i++) {
        let key = localStorage.key(i);
        if(!key!.startsWith('article_')) continue;
        article_json = localStorage.getItem(key!)!;
        articles.push(JSON.parse(article_json));
      }
      return articles;
    } else {
      console.log("cannot find localStorage from getUserArticles");
      return [];
    }
  };

  static emptyStorage = ():void =>{
    console.log('emptyStorage');
    if (typeof window !== "undefined") {
      const len = localStorage.length;
      console.log("length: "+len);
      for(let i = 0;i<len;i++){
        const key = localStorage.key(i);
        if(key && (key.startsWith('key') || key.startsWith('article_'))){
          localStorage.removeItem(key!);
        }
      }
      location.reload();
    }
    else console.log("cannot find localStorage from emptyStorage");
  }

}

export default LocalStorage;