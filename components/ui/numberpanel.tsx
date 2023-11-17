import { Squada_One } from "next/font/google";
import { Time } from "../stopwatch";
const squada = Squada_One({ weight: "400", subsets: ["latin"] });

export const toHourMin = (time: number): Time => {
    return {
      hour: Math.floor(time / 3600),
      min: Math.floor((time / 60) % 60),
      second: time % 60,
    };
  };


const NumberPanel = ({time}:{time:number}) =>{

    return<div className={`text-center text-[17vw] h-min ${squada.className}`}>
    <div className='inline-block w-[18rem] text-left align-middle'>{(toHourMin(time).hour + "").padStart(2, "0")}</div>
    <div className="inline-block w-[8rem]">{time%2 ? '' : ':'}</div>
    <div className='inline-block w-[18rem] text-left align-middle'>{(toHourMin(time).min + "").padStart(2, "0")}</div>
    <div className="inline-block w-[8rem]">{time%2 ? '' : ':'}</div>
    <div className='inline-block w-[18rem] text-left align-middle'>{(toHourMin(time).second + "").padStart(2, "0")}</div>
  </div>
}

export default NumberPanel;