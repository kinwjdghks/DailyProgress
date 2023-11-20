import { useState, useRef, useEffect } from "react";
import Button from "./ui/Button";
import NumberPanel from "./ui/numberpanel";

export type Time = {
  hour: number;
  min: number;
  second: number;
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
      setTime((prev) => prev+1);
    }, 1000);
  };
  // console.log(time);
  const stopTimer = () => {
    if (!isRunning) return;
    clearInterval(timerRef.current);
    setIsRunning(false);
  };

  useEffect(() => { //useEffect for autosave
    // console.log(time%60);
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
      <NumberPanel time={time}/>
      <div>
        <Button size="M" onClick={startTimer} >
          Start
        </Button>
        <Button size="M" onClick={stopTimer} >
          Stop
        </Button>
      </div>
    </div>
  );
};

export default StopWatch;
