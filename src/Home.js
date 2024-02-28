import { React, useState } from "react";
import "./App.css";
import ParticleEffect from "./ParticleEffect";

import Header from "./Header";


function Home() {
    const [displayOptions, setDisplayOptions] = useState(false)

  return (
    <div
      id="root"
      className="bg-dark bg-gradient mh-100"
      style={{ fontFamily: "Roboto Condensed, sans-serif" }}
    >
      <ParticleEffect />

      <Header />

      <div className="p-4 pb-5 text-white">
        <h3>Pick Popular</h3>
        <p>
          Uses a generated list of the top restaraunts with the highest customer
          satisfaction in 2023 based on the{" "}
          <a href="https://theacsi.org/industries/restaurant/fast-food-restaurants/">
            American Customer Satisfaction Index
          </a>
          .
        </p>
        <h3>Use My List</h3>
        <p>Helps you choose based on restaraunts you want.</p>
        <h3>Find My Dinner</h3>
        <p>Generates a list based on your desired location.</p>
      </div>

   
    </div>
  );
}

export default Home;