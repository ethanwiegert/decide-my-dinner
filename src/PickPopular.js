import React from 'react';
import './App.css';
import { Link, useHistory } from "react-router-dom";

//Buffalo Wild Wings, McDonalds, Taco Bell, Shake Shack, Chipotle




const Restaraunts=[
  "Starbucks", 
  "McDonalds",
  "Subway",
  "Burger King",
  "Taco Bell",
  "Wendy's",
  "Dunkin' Donuts",
  "Chick-fil-A",
  "Domino's",
  "Pizza Hut"
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

      <div className="row pb-5">
      <div className="d-flex justify-content-center bg-dark text-white p-5">
    <h1>Decide Dinner</h1>
    </div>
    </div>

    <div className="row">
    <div className="d-flex justify-content-center pt-3 pb-3">
 <h3>Tonight is: {Restaraunts[NewRestaraunt()]}!</h3>
 </div>
 </div>

 <div className="row">
  <div className="d-flex justify-content-center pt-3">
   
 <p>Not what you were hoping?</p>
 </div>
 </div>


<div className="row">
  <div className="d-flex justify-content-center">
 <button type="button" className="col-6 btn btn-lg btn-dark" onClick={()=>history.go("/")}>Choose Again</button>
 
 </div>
 </div>


 </div>
  )
}

export default PickPopular;
