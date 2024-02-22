import React from "react";
import "./App.css";
import ParticleEffect from "./ParticleEffect";

import Header from "./Header";
import Footer from "./Footer";

function Home() {
  return (
    <div
      id="root"
      className="bg-dark bg-gradient mh-100"
      style={{ fontFamily: "Roboto Condensed, sans-serif" }}
    >
      <ParticleEffect />

      <Header />

      <div className="p-4 pb-5 text-white">
        <h5>Pick Popular</h5>
        <p>
          Uses a generated list of the top restaraunts with the highest customer
          satisfaction in 2023 based on the{" "}
          <a href="https://theacsi.org/industries/restaurant/fast-food-restaurants/">
            American Customer Satisfaction Index
          </a>
          .
        </p>
        <h5>Use My List</h5>
        <p>Helps you choose based on restaraunts you want.</p>
        <h5>Find My Dinner</h5>
        <p>Generates a list based on your desired location.</p>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
