import { useRouter } from "next/router";
import ArticleFrame from "./articleFrame";
import { Article as TYPE_Article } from "@/context/article-context";

const Article = ({item}:{item: TYPE_Article}) => {
  let elapsedHr = Math.floor(item.elapsedTime/ 3600);
  let elapsedMin = (Math.floor((item.elapsedTime / 60)%60)+'').padStart(2,'0');

  const router = useRouter();
  const moveToDetailedPage = (): void => {
    router.push({ pathname: "/article/[articleId]", query: { articleId: item.id } });
  };
  return (
    <ArticleFrame onClick={moveToDetailedPage} color={item.color}>
      <h1 className="text-center text-2xl mt-[10%]">
        {elapsedHr} Hour {elapsedMin} Min
      </h1>
      <h2 className="m-5 text-right text-3xl text-white">{item.id}</h2>
    </ArticleFrame>
  );
};

export default Article;
