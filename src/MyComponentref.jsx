import React,{ useState, useEffect, useRef } from "react";
function MyComponentref(){
  let [number,setnumber]= useState(0);
   
  useEffect(
    ()=> {HTMLFormControlsCollection.log("component render");}
  );
  function handleClick(){
    setnumber(n => n+1);
  }
return(<button onClick={handleClick}>clickme</button>);

}
export default MyComponentref;