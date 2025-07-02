import React, {useState,UseEffect} from "react"; 
import { useEffect } from "react";

function MyComponentuse(){
  const[count,setCount]= useState(0);
  const[color,setColor]= useState('green');
  useEffect(()=>{
    document.title =`Count "${count} ${color}`;
  },[count,color]);

  function addCount(){
    setCount(c => c+1);
  }
  function subtractCount(){
    setCount(c => c-1);
  }
  function ChangeColor(){
    setColor(c =>c=="green"? "red": "green");
  }
return(<>
      <p style={{color: color }}>count:{count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>Subtract</button><br/>
      <button onClick={ChangeColor}>Change color</button>
</>);
}
export default MyComponentuse;