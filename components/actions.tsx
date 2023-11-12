import Button from "./ui/Button";

type ActionProp ={
    onAddArticle: (id: string)=>void,
    onRemoveArticle: (id: string)=>void,
    onToggleModal: ()=>void,
}

const Actions = ({onAddArticle, onRemoveArticle, onToggleModal}: ActionProp) =>{
    
    const id = "abc";
    return <div className="w-10/12 bg-slate-300 m-auto mt-8 p-14 flex flex-wrap">
        
        <Button onClick={onToggleModal}>Add Article</Button>
    </div>
}

export default Actions;