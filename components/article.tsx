import { useRouter } from "next/router";
import { useState, useContext } from "react";
import { articleContext } from "@/context/article-context";
import ArticleFrame from "./ui/articleFrame";
import { Article as TYPE_Article } from "@/context/article-context";

const Article = ({ item }: { item: TYPE_Article }) => {
  const [onHover, setOnhover] = useState<Boolean>(false);
  const [deleteCheck, setdeleteCheck] = useState<Boolean>(false);
  let elapsedHr = Math.floor(item.elapsedTime / 3600);
  let elapsedMin = (Math.floor((item.elapsedTime / 60) % 60) + "").padStart(
    2,
    "0"
  );

  const router = useRouter();
  const articlectx = useContext(articleContext);
  const removeArticle = articlectx?.removeArticle;

  const moveToDetailedPage = (): void => {
    router.push({
      pathname: "/article/[articleId]",
      query: { articleId: item.id },
    });
  };

  return (
    <ArticleFrame
      onClick={moveToDetailedPage}
      onMouseLeave={() => {
        setdeleteCheck(false);
        setOnhover(false);
      }}
      color={item.color}
    >
      <span
        className={`text-2xl text-slate-400 float-right p-2 ${
          onHover ? "visible" : "invisible"
        }`}
        onClick={(e) => {
          e.stopPropagation(); //prevent event bubbling
          setdeleteCheck(true);
        }}
      >
        X
        {deleteCheck && (
          <div
            className="w-24 h-10 bg-white text-black text-center rounded-lg absolute right-2 border-solid border-2 border-black z-10"
            onClick={(e) => {
              console.log('delete');
              e.stopPropagation();
              removeArticle && removeArticle(item.id);
            }}>
            delete?
          </div>
        )}
      </span>
      <div
        className="w-full h-full absolute top-10 left-0"
        onMouseEnter={() => setOnhover(true)}
      ></div>

      <h1 className="text-center text-2xl mt-[10%]">
        {elapsedHr} Hour {elapsedMin} Min
      </h1>
      <h2 className="m-5 text-right text-3xl text-white">{item.id}</h2>
    </ArticleFrame>
  );
};

export default Article;
