import { Article, articleContext } from "@/context/article-context";
import { useRouter } from "next/router";
import { useState, useContext, useEffect } from "react";
import StopWatch, { toHourMin } from "@/components/stopwatch";
import Button from "@/components/ui/Button";
import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: "500", subsets: ["latin"] });

const ArticlePage = () => {
  const router = useRouter();
  const ctx_article = useContext(articleContext);
  const [visualTime, setVisualTime] = useState<number>(0);

  let id: string | null = null;
  let article: Article | null = null;

  if (typeof router.query.articleId == "string") {
    id = router.query.articleId;
    article = ctx_article?.articles.find((item) => item.id == id)!;
    // console.log(article);
  } else console.log("cannot find router.query");

  useEffect(() => {
    if (article) {
      setVisualTime(article?.elapsedTime);
      console.log("got time from article");
    } else console.log("cannot get time from article");
  }, [article]);

  const updateElapsedTime = (time: number, auto:'auto'|'non_auto'): void => {
    //save time every 1 min under the hood
    let increment = 60;
    if(auto == 'non_auto') increment = time
    if (!ctx_article) console.log("ctx not found in updateElapsedTime");
    else {
      ctx_article.updateTime(article!, increment);
      console.log("elapsed time updated");
    }
  };

  if (!article) return <p>No Page found!</p>;
  else
    return (
      <div className={`w-screen h-screen bg-blue-200 ${poppins.className}`}>
        <p className="text-center text-6xl">
          Total: {(toHourMin(visualTime!).hour + "").padStart(2, "0")}:
          {(toHourMin(visualTime!).min + "").padStart(2, "0")}
        </p>


        <StopWatch
          onSave={(time) => {
            updateElapsedTime(time,'non_auto');
            setVisualTime(article!.elapsedTime);
            // console.log(time + "+" + visualTime + "=" + (time + visualTime));
          }}
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
