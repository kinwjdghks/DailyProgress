import Article from "@/components/article";
import ArticleDisplay from "@/components/articleDisplay";
import Actions from "@/components/actions";
import { useState,useContext } from "react";
import NewArticleModal from "@/components/ui/newArticleModal";
//import from context
import { articleContext } from "@/context/article-context";


export default function Home() {
  
  // const [articleState, setArticleState] = useState<Article[]>(dummyArticleList);
  
  const [modalToggle, setModalToggle] = useState<Boolean>(false);

  const toggleModal = ():void => setModalToggle((prev)=>!prev);

  const ctx_article = useContext(articleContext)!;
  const articles = ctx_article.articles;
  const addArticle = ctx_article.addArticle;
  const removeArticle = ctx_article.removeArticle;


  return (
    <div className="w-screen h-full bg-red-100">
      {modalToggle && <NewArticleModal onToggleModal={toggleModal} onAddArticle={addArticle}/>}
      <ArticleDisplay items={articles} />
      <Actions onAddArticle={addArticle} onRemoveArticle={removeArticle} onToggleModal={toggleModal}/>
    </div>
  );
}
