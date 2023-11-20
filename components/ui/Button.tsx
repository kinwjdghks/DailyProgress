type btnsize = "S" | "M" | "L";
type btnprops = {
    onClick: ()=>void;
    children: any;
    size: btnsize;
    className?: string;
}

const Button = (props:btnprops) =>{
    const s = props.size;

    const size = {
        "S":"text-2xl",
        "M":"text-3xl",
        "L":"text-4xl"

    }

    // ${active['active']}
    const newClassName = `text-black text-2xl hover:underline underline-offset-8 ${size[s]} `+props.className;
    return <button className= {newClassName}
     onClick={
        (e)=>{
            e.preventDefault();
            props.onClick()}}>{props.children}
            </button>
            

}
export default Button;