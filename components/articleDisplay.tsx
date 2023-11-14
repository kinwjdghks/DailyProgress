import Article from "./article";
import BlankArticle from "./blankArticle";
import { Article as Type_Article } from "@/context/article-context";

const ArticleDisplay = ({ items }: { items: Type_Article[] }) => {
  items.sort((a,b)=>a.key - b.key);
  return (
    <div className="w-10/12 bg-slate-300 m-auto p-14 flex flex-wrap gap-x-[5%] gap-y-10 overflow-scroll">
      {items.map((item) => (
        <Article item={item} key={item.key} />))}
      <BlankArticle />
    </div>
  );
};

export default ArticleDisplay;
