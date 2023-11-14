import { COLOR, articleColors } from "@/public/assets/colors";
import { useEffect } from "react";

type frameprops = {
  onClick?: any;
  onMouseLeave?: ()=>void;
  color: COLOR
  children:any;
};

const ArticleFrame = ({ onClick, onMouseLeave , color, children }: frameprops) => {
  const color_ = articleColors[color];
  console.log(color_);
  return (
    <div
      className={`w-[20rem] aspect-square relative ${color_} cursor-pointer hover:scale-[104%] transition-all border-white border-r-4 border-b-4
    shadow-[inset_5px_5px_10px_3px_black]`}
      onClick={onClick}
      onMouseLeave = {onMouseLeave}
    >{children}</div>
  );
};

export default ArticleFrame;