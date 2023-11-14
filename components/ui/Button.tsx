type btnsize = "S" | "M" | "L";
type btnprops = {
    onClick: any;
    children: any;
    size: btnsize;
}

const Button = (props:btnprops) =>{

    const size = {
        "S":"w-14 h-12",
        "M":"w-32 h-12",
        "L":"w-36 h-12"
    }
    
    return <button className= {`${size[props.size]} bg-purple-300 border-2 border-purple-400 text-white rounded-xl text-2xl`}
     onClick={
        (e)=>{
            e.preventDefault();
            props.onClick()}}>{props.children}</button>

}
export default Button;