import { useRef, useState } from "react";
import Button from "./Button";

const BackDrop = () => {
  return (
    <div className="w-full h-full bg-black opacity-50 fixed z-[100] [invisible]"></div>
  );
};

type ModalProp = {
  onToggleModal: () => void;
  onAddArticle: (id: string) => void;
};

type Error = "error" | "noerror";

const inputDisplay = {
  "error": {
    border: "border-3",
    bordercolor: "border-red-400",
    display: "visible"
  },
  "noerror": {
    border: "border-2",
    bordercolor: "",
    display: "invisible"
  },
};

const NewArticleModal = ({
  onToggleModal,
  onAddArticle,
}: ModalProp) => {

  const inputIdref = useRef<HTMLInputElement>(null);
  const [inputError,setInputError] = useState<Error>("noerror");


  const addArticleHandler = (): void => {
    if (inputIdref && inputIdref.current && inputIdref.current.value.trim() != "") {
      onAddArticle(inputIdref.current.value);
      onToggleModal();
    } else setInputError("error");
  };

  
  return (
    <div>
      <BackDrop />
      <div className="w-1/2 h-1/2 rounded-3xl bg-white absolute p-16 flex flex-col justify-between left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] z-[101]">
        <form className="">
          <div className="">
            <label className="text-3xl">Name of Article: </label>
            <input
              type="text"
              ref={inputIdref}
              className={`h-10 text-3xl border-solid border-2 ${inputDisplay[inputError].border} ${inputDisplay[inputError].bordercolor}`}
              onClick={()=>setInputError("noerror")}
            ></input>
          </div>
          <p className = {`text-red-600 text-2xl mt-2 ${inputDisplay[inputError].display}`}>This field should be filled</p>
          <div className="mt-8">
            <label className="text-3xl mt-6">Image(optional): </label>
            <input type="file"></input>
          </div>
        </form>
        <div className="flex gap-12 justify-center">
          <Button onClick={addArticleHandler}>Add</Button>
          <Button onClick={onToggleModal}>Cancel</Button>
        </div>
      </div>
    </div>
  );
};

export default NewArticleModal;
