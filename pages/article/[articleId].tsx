import { Article, articleContext } from "@/context/article-context";
import { useRouter } from "next/router";
import { useState, useContext, useEffect } from "react";
import StopWatch, { toHourMin } from "@/components/stopwatch";
import Button from "@/components/ui/Button";
import { Poppins } from "next/font/google";
const poppins = Poppins({weight:'500', subsets:['latin']});

const ArticlePage = () => {
  const router = useRouter();
  const ctx_article = useContext(articleContext);
  const [visualTime, setVisualTime] = useState<number>();

  let id: string | null = null;
  let article: Article | null = null;

  if (typeof router.query.articleId == "string") id = router.query.articleId;
  if (id) article = ctx_article?.articles.find((item) => item.id == id)!;

  useEffect(() => {
    console.log(article?.elapsedTime);
    if (article) setVisualTime(article?.elapsedTime);
    else console.log("GET time failure");
  }, [article]);

  const updateElapsedTime = (time: number): void => {
    //save time every 1 min under the hood
    if(!ctx_article) console.log("ctx not found in updateElapsedTime");
    ctx_article?.updateTime(article!, time);
    console.log("updated");
  };

  if (!article) return <p>No Page found!</p>;
  else
    return (
      <div className={`w-screen h-screen bg-blue-200 ${poppins.className}`}>

        <p className="text-center text-6xl">
          Visual Time: {(toHourMin(visualTime!).hour + "").padStart(2, "0")}:
          {(toHourMin(visualTime!).min + "").padStart(2, "0")}
        </p>
        <p className="text-center text-6xl">
          Elapsed Time:{" "}
          {(toHourMin(article.elapsedTime!).hour + "").padStart(2, "0")}:
          {(toHourMin(article.elapsedTime!).min + "").padStart(2, "0")}
        </p>
        
          <StopWatch
            onSave={(time) => setVisualTime(time)}
            onAutoSave={updateElapsedTime}
          />
      
        <Button onClick={() => router.push("/")} size="L">
          MainPage
        </Button>
        <p className="text-center text-6xl">{article ? article.id : ""}</p>
      </div>
    );
  };

export default ArticlePage;
