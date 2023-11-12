import { useRouter } from "next/router";

const Article = ({id, elapsedtime}: {id: string, elapsedtime: number})=>{
   
   let elapsedHr= Math.floor(elapsedtime/60);
   let elapsedMin = elapsedtime%60;
   
   const router = useRouter();
   const moveToDetailedPage = (articleId: string): void =>{
   router.push({pathname: "/article/[articleId]", query: {articleId: id}});
  }
    return (
    <div className="w-[30%] h-80 relative bg-slate-600 rounded-3xl cursor-pointer hover:scale-[104%] transition-all" onClick={()=>moveToDetailedPage(id)}>
        <div className="w-11/12 h-4/6 relative rounded-2xl overflow-auto bg-white m-auto mt-[5%]">
            <h1 className="text-center text-2xl mt-[10%]">{elapsedHr} Hour {elapsedMin} Min</h1>
        </div>
        <h2 className="m-5 text-right text-3xl text-white">{id}</h2>

    </div>)
}

export default Article;