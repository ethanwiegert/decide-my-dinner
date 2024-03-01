import { React } from "react";
import { useSelector, useDispatch } from 'react-redux';
import "./App.css";
import ParticleEffect from "./ParticleEffect";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import {
  setBreakfast,
  setLunch,
  setDinner,
  selectMeal,
} from './mealSlice';

import Header from "./Header";
import Footer from "./Footer";


function Home() {
    const meal = useSelector(selectMeal)
    const dispatch = useDispatch();
  return (
    <div
      id="root"
      className="bg-dark bg-gradient mh-100"
      style={{ fontFamily: "Roboto Condensed, sans-serif" }}
    >
      <ParticleEffect />

      <Header />

      <div className="p-4 pb-5 text-white">
        {meal==="" ? 
        <div>
        
        <div className="row d-flex justify-content-center py-4">
          <h3 className="col-auto">Select your meal:</h3>
        </div>
        
        <div className="row d-flex justify-content-md-evenly flex-md-row align-items-center flex-column pb-4">
          <button
          type="button"
          className="col-3 m-2 btn btn-primary"
          onClick={() => dispatch(setBreakfast())}
          >
          Breakfast
          </button>
          <button
          type="button"
          className="col-3 m-2 btn btn-primary"
          onClick={() => dispatch(setLunch())}
          >
          Lunch
          </button>
          <button
          type="button"
          className="col-3 m-2 btn btn-primary"
          onClick={() => dispatch(setDinner())}
          >
          Dinner
          </button>
        </div>

        </div>
        :
        <div>
          <div className="row d-flex justify-content-center py-4">
            <h3 className="col-auto">How would you like to decide where to eat {meal}?</h3>
          </div>
          
          <div className="row d-flex justify-content-md-evenly flex-md-row align-items-center flex-column pb-4">
          <Link className="col-3 m-2 btn btn-primary" to="/pick-popular">
            Fast Food
          </Link>
          <Link className="col-3 m-2 btn btn-primary md-btn-lg" to="/use-my-list">
            My Ideas
          </Link>
          <Link className="col-3 m-2 btn btn-primary" to="/find-my-dinner">
            Highly Recommended
          </Link>
            </div>
        </div>
            }

      </div>

   <Footer />
    </div>
  );
}

export default Home;