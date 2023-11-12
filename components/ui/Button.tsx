const Button = (props:any) =>{

    type size = "S" | "M" | "L";
    

    return <button className= "w-36 h-12 bg-purple-300 border-2 border-purple-400 text-white rounded-xl text-2xl"
     onClick={props.onClick}>{props.children}</button>

}
export default Button;