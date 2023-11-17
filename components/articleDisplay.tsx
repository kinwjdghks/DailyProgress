import Article from "./article";
import BlankArticle from "./blankArticle";
import { Article as Type_Article } from "@/context/article-context";

const ArticleDisplay = ({ items }: { items: Type_Article[] }) => {
  items.sort((a,b)=>a.key - b.key);
  return (
    <div className="w-7/12 min-h-screen bg-slate-300 m-auto grid grid-cols-3 gap-8 items-center">
      {items.map((item) => (
        <Article item={item} key={item.key} />))}
      <BlankArticle />
    </div>
  );
};

export default ArticleDisplay;
