import { useState, useRef, useEffect } from "react";
import Button from "./ui/Button";
import { Squada_One } from "next/font/google";
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
  onSave: (time: number) => void;
  onAutoSave: (time: number) => void;
};

const StopWatch = ({ onSave, onAutoSave }: stopwatchprops) => {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0); //total passed time
  const timerRef = useRef<NodeJS.Timeout | undefined>(undefined); //store setInterval obj

  const startTimer = (): void => {
    if (isRunning) return;
    setIsRunning(true);
    timerRef.current = setInterval(() => {
      setTime((prev) => prev + 20);
    }, 1000);
  };
  const stopTimer = () => {
    if (!isRunning) return;
    clearInterval(timerRef.current);
    setIsRunning(false);
    onSave(time);
    setTime(0);
  };
  useEffect(() => {
    if (time % 60 == 0) onAutoSave(time);
  }, [time]);

  return (
    <div className="w-full">
      <p className={`text-center text-[17vw] ${squada.className}`}>
        {(toHourMin(time).hour + "").padStart(2, "0")} :
        {(toHourMin(time).min + "").padStart(2, "0")} :
        {(toHourMin(time).second + "").padStart(2, "0")}
      </p>
      <div>
        <Button size="M" onClick={startTimer}>
          Start
        </Button>
        <Button size="M" onClick={stopTimer}>
          Stop
        </Button>
      </div>
    </div>
  );
};

export default StopWatch;
