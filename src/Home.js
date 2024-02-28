import { React, useState } from "react";
import "./App.css";
import ParticleEffect from "./ParticleEffect";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import Header from "./Header";
import Footer from "./Footer";


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
        <Link to="/pick-popular"><h3>Pick Popular</h3></Link>
        <p>
          Uses a generated list of the top restaraunts with the highest customer
          satisfaction in 2023 based on the{" "}
          <a href="https://theacsi.org/industries/restaurant/fast-food-restaurants/">
            American Customer Satisfaction Index
          </a>
        </p>
        <Link to="use-my-list"><h3>Use My List</h3></Link>
        <p>Helps you choose based on restaraunts you want.</p>
        <Link to="find-my-dinner"><h3>Find My Dinner</h3></Link>
        <p>Generates a list based on your desired location.</p>
      </div>

   <Footer />
    </div>
  );
}

export default Home;