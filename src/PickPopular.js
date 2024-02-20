import {React, useState} from 'react';
import './App.css';
import { useHistory } from "react-router-dom";

import Header from './Header';






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
  const [choice, setChoice]=useState(null)
  
return(
<div>
  <div>
    <Header/>
  </div>
  <div className="row p-4" style={{fontFamily: 'Roboto Condensed, sans-serif' }}>
    <div className="d-flex justify-content-center pb-3">
      {choice===null ? null : <h3>Tonight is: {choice}!</h3>}
    </div>
  </div>

  <div className="row">
    <div className="d-flex justify-content-center pt-3">
      {choice===null ? null :<p>Not what you were hoping?</p>}
    </div>
  </div>
  <br/>
  <br/>

  <div className="row">
    <div className="d-flex justify-content-center">
      {choice ===null ? <button type="button" className="col-6 btn btn button-flip" onClick={()=>setChoice(Restaraunts[NewRestaraunt()])}>Generate Restaurant</button> : 
      <button type="button" className="col-6 btn btn button-flip" onClick={()=>setChoice(Restaraunts[NewRestaraunt()])}>Choose Again</button>}
    </div>
  </div>
</div>
  )
}

export default PickPopular;
