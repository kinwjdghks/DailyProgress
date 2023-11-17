import ArticleDisplay from "@/components/articleDisplay";
import { useContext } from "react";
//import from context
import { articleContext } from "@/context/article-context";

export default function Home() {
  const ctx_article = useContext(articleContext)!;
  const articles = ctx_article.articles;

  return (
    <div className="w-screen h-min bg-red-100">
      <ArticleDisplay items={articles} />
    </div>
  );
}
