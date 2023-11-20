import { COLOR, articleColors } from "@/public/assets/colors";


type frameprops = {
  onClick?: any;
  onMouseLeave?: () => void;
  color: COLOR;
  children: any;
};

const ArticleFrame = ({
  onClick,
  onMouseLeave,
  color,
  children,
}: frameprops) => {
  const color_ = articleColors[color];


  return (
    
      <div
        className={`h-full aspect-[3/4] ml-8 mr-8 relative bg-white cursor-pointer hover:scale-[104%] transition-all border-white border-r-2 border-b-2
    shadow-[inset_4px_4px_5px_1px_black] box-border overflow-hidden`}
        onClick={onClick}
        onMouseLeave={onMouseLeave}
      >
        {children}
      </div>
    
  );
};

export default ArticleFrame;
