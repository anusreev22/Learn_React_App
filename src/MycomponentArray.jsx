import React, {useState} from 'react';

function MyComponentArray(){
  const[foods, setFoods]= useState(["Apple","Orage","Banana"]);

  function handleAddFood(){
    const newFood = document.getElementById("foodinput").value;
    document.getElementById("foodInput").value = "";

    setFoods([...foods, newFood]);
  }
  function handleremoveFood(){

  }
return(<div>
        <h2>List of Food</h2>
        <ul>
          {foods.map((food,index) => <li key={index}>{food}</li>)}
        </ul>
        <input type="text" id="foodInput" placeholder="enter food name"/>
        <button> onClick={handleAddFood}Add Food</button>
</div>);

}
export default MyComponentArray;