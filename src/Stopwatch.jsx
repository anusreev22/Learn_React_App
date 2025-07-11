import React, {useState,useEffect,useRef} from 'react';

function Stopwatch(){

  const[isRunning,setIsRunning]= useState(false);
  const[elapsedTime,setElaspedTime]= useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef=useRef(0);

  useEffect(()=>{
    if(isRunning){
      intervalIdRef.current = setInterval(()=>{setElaspedTime(Date.now()-startTimeRef.current);},10);
    }

    return() =>{
      clearInterval(intervalIdRef.current);
    }
  },[isRunning]);

  function start(){
    setIsRunning(true);
    startTimeRef.current =Date.now()-elapsedTime;
    
  }

  function stop(){
    setIsRunning(false);
  }

  function reset(){
    setElaspedTime(0);
    setIsRunning(false);
  }

  function fromatTime(){
    let hours= Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes= Math.floor(elapsedTime / (1000 * 60 )% 60);
    let seconds= Math.floor(elapsedTime / (1000)%60);
    let milliseconds= Math.floor((elapsedTime % 10000)/10);
    return `${minutes}: ${seconds}:${milliseconds}`;

  }
return(<div className ="stopwatch">
  <div className='display'>{fromatTime()}</div>
   <div className='controls'>
    <button  onClick={start}className='start-button'>start</button>
    <button  onClick={stop}className='stop-button'>Stop</button>
    <button  onClick={reset}className='reset-button'>Reset</button>
   </div>
</div>);
}
export default Stopwatch