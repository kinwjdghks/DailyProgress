import Image from "next/image";
import friend from "@/public/assets/images/friend.svg";
import Button from "./ui/Button";

const Footer =  ({onLogin}:{onLogin:()=>void}) =>{

    return <div className="fixed w-screen h-32 bottom-0 p-8 pl-12 pr-12 right-0 flex justify-between">
    <Button size='L' onClick={onLogin}>
      Log In
    </Button>
    <Image
      className="w-14 h-14 cursor-pointer self-end"
      alt="friend"
      src={friend}
    ></Image>
  </div>
}

export default Footer;