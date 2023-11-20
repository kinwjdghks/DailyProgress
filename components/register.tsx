"use client";

import Button from "./ui/Button";
import { useRef, useState } from "react";
import axios from "axios";
import { UserModel } from "@/models/user";

type ERROR = [Boolean, Boolean, Boolean]; //name, id, password

async function getIpClient(): Promise<string | null> {
  try {
    const response = await axios.get("https://geolocation-db.com/json/");
    const ipv4 = response.data.IPv4;
    console.log(ipv4);
    return ipv4;
  } catch (error) {
    console.error(error);
    return null;
  }
}

const IPvalidation = (): Boolean => {
  //check for duplicated IP
  return true;
};

const RegisterBox = ({ isReg }: { isReg: Boolean }) => {
  // console.log(isReg);
  const [isError, setIsError] = useState<ERROR>([false, false, false]);

  const accountValidation = (name: string, id: string, pw: number): Boolean => {
    let error: ERROR = [false, false, false];

    setIsError(error);
    if (!error[0] && !error[1] && !error[2]) return true;
    else return false;
  };

  const nameRef = useRef<HTMLInputElement>(null);
  const idRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);

  const onSubmit = async () => {
    if (nameRef.current && idRef.current && pwRef.current) {
      const inputName = nameRef.current.value;
      const inputID = idRef.current.value;
      const inputPW = pwRef.current.value;
      // console.log(inputName);
      // console.log(inputID);
      // console.log(inputPW);

      if (!accountValidation) {
        return;
      }

      let userIP: string | null = null;
      await getIpClient().then((resolvedData) => {
        userIP = resolvedData;
      });

      if (!userIP) {
        alert("Cannot find IP");
        return;
      } else if (!IPvalidation) {
        alert("You cannot make more than one account!");
        return;
      }
      //create account
      const newAccount: UserModel = {
        nickname: inputName,
        id: inputID,
        password: inputPW,
        IP: userIP!,
        articleList: [],
      };
      onRegister(newAccount);
    } else console.log("ref not found");
  };

  const onRegister = async (newAccount: UserModel) => {
    try {
      await fetch("/api/Users/route", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAccount),
      }).then((res) => {
      if(!res.ok){
        throw new Error(res.statusText);
      } 
      console.log(res)});
    } catch (err) {
      console.log(err);
    }

    //   const response = await fetch("/api/Users/route", {
    //     method: "POST",

    //     headers: {
    //       Accept: "application/json",
    //       'content-type': 'application/json',
    //     }
    //   });
    //   if (!response.ok) {
    //     throw new Error("Failed to create new account");
    //   }
    //   else alert("account created!");
  };

  return (
    <div
      className={`ct_registerbox w-1/4 h-[60%] fixed left-[50%] translate-x-[-50%] translate-y-[30%] bg-white rounded-3xl transition-all ${
        !isReg && "invisible"
      }`}
    >
      <form className="w-full h-full p-6 pt-16 pb-10 text-3xl flex flex-col items-center justify-between">
        <fieldset className="flex p-6 items-center">
          <legend className="mr-4 w-16">Name</legend>
          <input
            type="text"
            className="h-12 w-[100%] p-3 border-solid border-[1px] border-black"
            ref={nameRef}
          ></input>
        </fieldset>
        <fieldset className="flex p-6 items-center">
          <legend className="mr-4 w-16">ID</legend>
          <input
            type="text"
            className="h-12 w-[100%] p-3 border-solid border-[1px] border-black"
            ref={idRef}
          ></input>
        </fieldset>
        <fieldset className="flex p-6 items-center">
          <legend className="inline-block mr-4">PW</legend>
          <input
            type="password"
            className="h-12 w-[100%] p-3 border-solid border-[1px] border-black"
            ref={pwRef}
          ></input>
        </fieldset>
        <Button onClick={onSubmit} size="L">
          Register
        </Button>
      </form>
    </div>
  );
};

export default RegisterBox;
