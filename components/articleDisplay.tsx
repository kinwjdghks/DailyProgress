import Article from "./article";
const ArticleDisplay = ({items}: {items:{id:string, elapsedTime: number}[]}) =>{

    return <div className="w-10/12 bg-slate-300 m-auto p-14 flex flex-wrap gap-x-[5%] gap-y-10 overflow-scroll">
        {items.map((item)=><Article key={item.id} id={item.id} elapsedtime={item.elapsedTime}/>)}
        </div>
}

export default ArticleDisplay;