import { articleContext } from "@/context/article-context";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { Article } from "@/context/article-context";

const ArticlePage = () =>{
    const router = useRouter();
    const ctx_article = useContext(articleContext);
    let id: string | null = null;
    let article: Article | null = null;

    
    if(typeof router.query.articleId == 'string')
        id = router.query.articleId;
    if(id)
       article = ctx_article?.articles.find((item)=> item.id==id)!;
    

    if(!article) return <p>No Page found!</p>;
    else 


    return <div className="w-screen h-screen bg-white">
        <p className="text-center text-6xl">This is {article.id} page!</p>
        
        <p className="text-center text-6xl">Elapsed Time: {article.elapsedTime}</p>
    </div>
}

export default ArticlePage;