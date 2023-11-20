import Article from "./article";
import BlankArticle from "./blankArticle";
import { Article as Type_Article } from "@/context/article-context";

const ArticleDisplay = ({ items }: { items: Type_Article[] }) => {
  items.sort((a,b)=>a.key - b.key);
  return (
    <div className="h-[55%] w-screen relative pt-4 pb-4 overflow-x-scroll scrollbar-hide">
      <div className="w-min h-full flex">
      {items.map((item) => (
        <Article item={item} key={item.key} />))}
      <BlankArticle />
      </div>
    </div>
  );
};

export default ArticleDisplay;
