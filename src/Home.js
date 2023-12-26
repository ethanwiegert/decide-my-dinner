import React from 'react';
import './App.css';
import { Link, useHistory } from "react-router-dom";

import Header from './Header';
import Footer from './Footer';
function Home(){
    return(

<div>
<Header/>





<div className="p-4">

<h5>Pick Popular</h5>
<p>Uses a generated list of the top restaraunts with the highest customer satisfaction in 2023 based on the <a href="https://theacsi.org/industries/restaurant/fast-food-restaurants/">American Customer Satisfaction Index</a>.</p>
<h5>Use My List</h5>
<p>Helps you choose based on restaraunts you want.</p>
<h5>Find My Dinner</h5>
<p>Generates a list based on your desired location (in development).</p>

</div>





<Footer />
        </div>
       
        
    )
}

export default Home