import {React, useState} from 'react';
import './App.css';
import { Link, useHistory } from "react-router-dom";

import Header from './Header';

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
  const [choice, setChoice]=useState(Restaraunts[NewRestaraunt()])
  
  return(

    <div>
      <div>
    
   <Header/>
    </div>
    

     
    <div className="row pt-3">
    <div className="d-flex justify-content-center pb-3">
 <h3>Tonight is: {choice}!</h3>
 </div>
 </div>

 <div className="row">
  <div className="d-flex justify-content-center pt-3">
   
 <p>Not what you were hoping?</p>
 </div>
 </div>
<br/>
<br/>

<div className="row">
  <div className="d-flex justify-content-center">
 <button type="button" className="col-6 btn btn button-flip" onClick={()=>setChoice(Restaraunts[NewRestaraunt()])}>Choose Again</button>
 
 </div>
 </div>


 </div>
  )
}

export default PickPopular;
