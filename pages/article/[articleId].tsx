import { Article, articleContext } from "@/context/article-context";
import { useRouter } from "next/router";
import { useContext } from "react";
import StopWatch, { toHourMin } from "@/components/stopwatch";
import Button from "@/components/ui/Button";

const ArticlePage = () => {
  const router = useRouter();
  const ctx_article = useContext(articleContext);
  let id: string | null = null;
  let article: Article | null = null;

  if (typeof router.query.articleId == "string") id = router.query.articleId;
  if (id) article = ctx_article?.articles.find((item) => item.id == id)!;

  const updateElapsedTime = (time: number): void => {
    ctx_article?.updateTime(article!, time);
  };

  if (!article) return <p>No Page found!</p>;
  else
    return (
      <div className="w-screen h-screen p-48 bg-slate-400">
        <p className="text-center text-6xl">{article.id}</p>

        <p className="text-center text-6xl">
          Elapsed Time: {toHourMin(article.elapsedTime).hour} :{" "}
          {toHourMin(article.elapsedTime).min}
        </p>
        <StopWatch onSave={updateElapsedTime} />
        <Button onClick={() => router.push("/")} size="L">
          MainPage
        </Button>
      </div>
    );
};

export default ArticlePage;
