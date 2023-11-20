import ArticleDisplay from "@/components/articleDisplay";
import { Fragment, useContext, useState } from "react";
//import from context
import { articleContext } from "@/context/article-context";
import Button from "@/components/ui/Button";
import LocalStorage from "@/libs/localstorage";
import LoginTab from "@/components/logintab";


import Footer from "@/components/footer";

export default function Home() {
  const ctx_article = useContext(articleContext)!;
  const articles = ctx_article.articles;
  // const resetStorage = LocalStorage.emptyStorage;
  const [isloggingin, setIsloggingin] = useState<Boolean>(false);

  return (
    <Fragment>
      <LoginTab isloggingin={isloggingin} onReg={()=>{setIsloggingin(false)}}/>
      <div className="w-screen h-screen pl-4 pr-4 bg-Grey flex flex-col justify-center items-center">
        {/* <ArticleDisplay items={articles} /> */}

       <Footer onLogin={()=>setIsloggingin(true)}/>
      </div>

      </Fragment>
  );
}

{
  /* <span className="float-left" onClick={resetStorage}>
Reset all data
</span> */
}
