import { articleContext } from "@/context/article-context";
import { useState, useRef, useContext } from "react";
import add_circle from "public/assets/images/add_circle.svg";
import Image from "next/image";
import ArticleFrame from "./articleFrame";
import Button from "./ui/Button";

const BlankArticle = () => {
  const ctx_article = useContext(articleContext);
  const addArticle = ctx_article?.addArticle;
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const inputIdref = useRef<HTMLInputElement>(null);
  const [inputError, setInputError] = useState<Error>("noerror");

  const toggleIsAdding = () => {
    setIsAdding((prev) => !prev);
  };

  type Error = "error" | "noerror";
  const inputDisplay = {
    error: {
      border: "border-3",
      bordercolor: "border-red-400",
      display: "visible",
    },
    noerror: {
      border: "border-2",
      bordercolor: "",
      display: "invisible",
    },
  };

  const addArticleHandler = (): void => {
    if (
      addArticle &&
      inputIdref &&
      inputIdref.current &&
      inputIdref.current.value.trim() != ""
    ) {
      addArticle(inputIdref.current.value);
    } else setInputError("error");
  };

  return (
    <ArticleFrame
      onMouseLeave={() => setIsAdding(false)}
      color="#EBB842"
    >
      <div className="w-full h-full p-8 flex justify-center align-middle">
        {!isAdding && (
          <Image
            className=""
            src={add_circle}
            width={150}
            alt="add"
            onClick={toggleIsAdding}
          />
        )}
        {isAdding && (
          <form className="w-full flex flex-col justify-center">
            <div className="">
              <label className="text-[200%]">Name of Article: </label>
              
              <input
                autoFocus
                type="text"
                ref={inputIdref}
                className={`w-3/4 h-12 text-3xl border-solid border-2 ${inputDisplay[inputError].border} ${inputDisplay[inputError].bordercolor}`}
                onClick={() => setInputError("noerror")}
              ></input>
              <Button onClick={addArticleHandler} size="S">Add</Button>
              
            </div>
            <p
              className={`text-red-600 text-2xl mt-2 ${inputDisplay[inputError].display}`}
            >
              This field should be filled
            </p>
            <div className="mt-8">
              <label className="text-3xl mt-6">Image(optional): </label>
              <input type="file"></input>
            </div>
          </form>
        )}
      </div>
    </ArticleFrame>
  );
};

export default BlankArticle;
