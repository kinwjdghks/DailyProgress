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
    <div className="m-4 aspect-square">
      <div
        className={`w-full h-full relative ${color_} cursor-pointer hover:scale-[104%] transition-all border-white border-r-4 border-b-4
    shadow-[inset_5px_5px_10px_3px_black] box-border overflow-hidden`}
        onClick={onClick}
        onMouseLeave={onMouseLeave}
      >
        {children}
      </div>
    </div>
  );
};

export default ArticleFrame;
