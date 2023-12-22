import {React, useState} from 'react';
import './App.css';
import { Link, useHistory } from "react-router-dom";

import Header from './Header';
import Footer from './Footer';

//Buffalo Wild Wings, McDonalds, Taco Bell, Shake Shack, Chipotle




const Restaraunts=[
  "Chick-fil-A", 
  "Jimmy John's",
  "KFC",
  "Papa Johns",
  "Starbucks",
  "Domino's",
  "Pizza Hut",
  "Arby's",
  "Dunkin' Donuts",
  "Panda Express",
  "Burger King",
  "Subway"
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
    

     
    <div className="row p-4">
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

<Footer />
 </div>
  )
}

export default PickPopular;
