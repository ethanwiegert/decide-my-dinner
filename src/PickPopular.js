import { React, useState, useEffect } from "react";
import "./App.css";
import { useSelector } from 'react-redux';
import { selectMeal } from './mealSlice';

import Header from "./Header";
import Footer from "./Footer";

const other = [
  "Chick-fil-A",
  "Jimmy John's",
  "KFC",
  "Papa Johns",
  "Domino's",
  "Pizza Hut",
  "Arby's",
  "Panda Express",
  "Burger King",
  "Subway",
];

const breakfast= [
  "Chick-fil-A",
  "Starbucks",
  "Dunkin' Donuts",
]

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function PickPopular() {
  const [choice, setChoice] = useState(null);
  const [restaurants, setRestaurants] = useState(other)
  const meal = useSelector(selectMeal)

  function NewRestaraunt() {
    return getRandomInt(restaurants.length);
  }

  useEffect(() => {
    if(meal==="Breakfast"){
      setRestaurants(breakfast)
     }
  }, [meal]);

  return (
    <div>
      <div>
        <Header />
      </div>

      <div
        className="row p-4"
        style={{ fontFamily: "Roboto Condensed, sans-serif" }}
      >
        <div className="d-flex justify-content-center pb-3">
          {choice === null ? <h3>Press to choose {meal}:</h3> : <h3>{meal} is: {choice}!</h3>}
        </div>
      </div>

      <div className="row">
        <div className="d-flex justify-content-center pt-3">
          {choice === null ? null : <p>Not what you were hoping?</p>}
        </div>
      </div>

      <br />
      <br />

      <div className="row">
        <div className="d-flex justify-content-center">
          {choice === null ? (
            <button
              type="submit button"
              className="col-6 btn btn button-flip"
              onClick={() => setChoice(restaurants[NewRestaraunt()])}
            >
              Generate Restaurant
            </button>
          ) : (
            <button
              type="button"
              className="col-6 btn btn button-flip"
              onClick={() => setChoice(restaurants[NewRestaraunt()])}
            >
              Choose Again
            </button>
          )}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default PickPopular;
