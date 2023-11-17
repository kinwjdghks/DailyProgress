import { useState, useRef, useEffect } from "react";
import Button from "./ui/Button";
import { Squada_One } from "next/font/google";
import NumberPanel from "./ui/numberpanel";
const squada = Squada_One({ weight: "400", subsets: ["latin"] });

export type Time = {
  hour: number;
  min: number;
  second: number;
};

export const toHourMin = (time: number): Time => {
  return {
    hour: Math.floor(time / 3600),
    min: Math.floor((time / 60) % 60),
    second: time % 60,
  };
};

type stopwatchprops = {
  onSave: (time: number) => void; //update visual time wheh stop btn is hit
  onAutoSave: (time: number, auto:'auto'|'non_auto') => void; //update elapesedTime every 1 min
};

const StopWatch = ({ onSave, onAutoSave }: stopwatchprops) => {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0); //total passed time
  const timerRef = useRef<NodeJS.Timeout | undefined>(undefined); //store setInterval obj

  const startTimer = (): void => {
    if (isRunning) return;
    setIsRunning(true);
    timerRef.current = setInterval(() => {
      setTime((prev) => prev+10);
    }, 1000);
  };
  // console.log(time);
  const stopTimer = () => {
    if (!isRunning) return;
    clearInterval(timerRef.current);
    setIsRunning(false);
  };

  useEffect(() => { //useEffect for autosave
    console.log(time%60);
    if (time && time % 60 == 0){
      onAutoSave(time%60,'auto');
      console.log('autosaved!');
    }
  }, [time]);

  useEffect(()=>{ //useEffect for visual time
    if(!isRunning && time){
      // console.log(time);
      onSave(time); //add time to visual time
      setTime(0);
    }
  },[isRunning]);

  return (
    <div className="w-full">
      <p className={`text-center text-[17vw] ${squada.className}`}>
        <NumberPanel>{(toHourMin(time).hour + "").padStart(2, "0")}</NumberPanel>{` : `}
        <NumberPanel>{(toHourMin(time).min + "").padStart(2, "0")}</NumberPanel>{` : `}
        <NumberPanel>{(toHourMin(time).second + "").padStart(2, "0")}</NumberPanel>
      </p>
      <div>
        <Button size="M" onClick={startTimer} active={`${!isRunning ? 'inactive':'active'}`}>
          Start
        </Button>
        <Button size="M" onClick={stopTimer} active={`${isRunning ? 'inactive':'active'}`}>
          Stop
        </Button>
      </div>
    </div>
  );
};

export default StopWatch;
