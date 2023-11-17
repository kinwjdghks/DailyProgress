
type panelprops = {
    children: any,
    width?:string,
    height?:string,

}


const NumberPanel = (props:panelprops) =>{
    const width = 'w-['+props.width+']';

    return <div className={`inline-block w-[18rem] h-${props.height} 
    `}>{props.children}</div>
}

export default NumberPanel;