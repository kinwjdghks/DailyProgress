import Button from "./ui/Button";

const LoginBox = ({isLog, onReg}:{isLog:Boolean, onReg:()=>void}) => {
  // console.log(isLog);
  
  return (
    <>
      <div className={`ct_loginbox w-1/4 h-1/2 fixed left-[50%] translate-x-[-50%] translate-y-[30%] bg-white rounded-3xl transition-all ${!isLog && 'invisible'}`}>
        <form className="w-full h-full p-6 pt-20 pb-10 text-3xl flex flex-col items-center justify-between">
          <fieldset className="flex p-6 items-center">
            <legend className="inline-block text-center mr-4 w-16">ID</legend>
            <input
              type="text"
              className="h-12 w-[100%] p-3 border-solid border-b-[1px] border-black"
            ></input>
          </fieldset>
          <fieldset className="flex p-6 items-center">
            <legend className="inline-block text-center mr-4">PW</legend>
            <input
              type="password"
              className="h-12 w-[100%] p-3 border-solid border-b-[1px] border-black"
            ></input>
          </fieldset>
          <Button onClick={() => {}} size="L" className="" >
            Login
          </Button>
          <Button onClick={onReg} size="S" className="underline" >
            or sign up
          </Button>
        </form>
      </div>
    </>
  );
};

export default LoginBox;
