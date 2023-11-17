import ArticleDisplay from "@/components/articleDisplay";
import { useContext } from "react";
//import from context
import { articleContext } from "@/context/article-context";
import Button from "@/components/ui/Button";
import LocalStorage from "@/functions/localstorage";

export default function Home() {
  const ctx_article = useContext(articleContext)!;
  const articles = ctx_article.articles;
  const resetStorage = LocalStorage.emptyStorage;

  return (
    <div className="w-screen h-min bg-red-100">
      <ArticleDisplay items={articles} />
      <Button size='L' onClick={resetStorage}>Reset all data</Button>
    </div>
  );
}
