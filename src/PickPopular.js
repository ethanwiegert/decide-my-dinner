import React from 'react';
import './App.css';
import { Link, useHistory } from "react-router-dom";

//Buffalo Wild Wings, McDonalds, Taco Bell, Shake Shack, Chipotle




const Restaraunts=[
  "Buffalo Wild Wings", 
  "McDonalds",
  "Taco Bell",
  "Shake Shack",
  "Chipotle"
]

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function NewRestaraunt(){
    return getRandomInt(Restaraunts.length)
}


function PickPopular() {
 

  const history=useHistory()
  
  return(
    <div>
    <h1>Decide Dinner</h1>
 <p>Your Restaraunt: {Restaraunts[NewRestaraunt()]}</p>
 <button onClick={()=>history.go("/")}>Choose Again</button>
 </div>
  )
}

export default PickPopular;
