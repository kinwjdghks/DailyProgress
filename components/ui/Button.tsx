type btnsize = "S" | "M" | "L";
type btnprops = {
    onClick: ()=>void;
    children: any;
    size: btnsize;
    active?: 'active' | 'inactive' | undefined;
}

const Button = (props:btnprops) =>{
    const s = props.size;
    const a = props.active;
    const size = {
        "S":"w-14 h-12",
        "M":"w-32 h-12",
        "L":"w-36 h-12"
    }
    const active = {
        'active':'bg-[#813bc6]',
        'inactive' :'bg-purple-300'
    }
    // ${active['active']}
    return <button className= {`${size[s]} active:bg-[#813bc6] ${a ? active[a] : active['inactive'] } border-2 border-purple-400 text-white rounded-xl text-2xl`}
     onClick={
        (e)=>{
            e.preventDefault();
            props.onClick()}}>{props.children}
            </button>
            

}
export default Button;