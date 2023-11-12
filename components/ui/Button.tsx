const Button = (props:any) =>{
    return <button className='w-48 h-16 bg-purple-300 border-2 border-purple-400 text-white rounded-xl text-2xl'
     onClick={props.onClick}>{props.children}</button>

}
export default Button;