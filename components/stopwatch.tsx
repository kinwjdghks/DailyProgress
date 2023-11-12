import { useState, useRef } from "react";
import Button from "./ui/Button";

export const toHourMin = (time: number): {hour:number, min:number} =>{
    return {hour: Math.floor(time/60), min:time%60};
} 

const StopWatch = ({onSave}:{onSave:(time:number)=>void}) =>{

    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [time,setTime] = useState<number>(0);
    const timerRef = useRef<NodeJS.Timeout|undefined>(undefined);

    const startTimer = (): void => {
        if(isRunning) return;
        setIsRunning(true);
        timerRef.current = setInterval(()=>{
            setTime((prev)=>prev+1);
        },1000);

    }
    const stopTimer = () => {
        if(!isRunning) return;
        clearInterval(timerRef.current);
        setIsRunning(false);
        onSave(time);
        setTime(0);
    }


    
    return <div className="w-64 h-48 rounded-2xl border-black border-4">
        <p className="text-center text-2xl ">{toHourMin(time).hour} : {toHourMin(time).min}</p>
        <div>
            <Button onClick={startTimer}>Start</Button>
            <Button onClick={stopTimer}>Stop</Button>
        </div>
    </div>
}

export default StopWatch;