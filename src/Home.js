import React from 'react';
import './App.css';
import { Link, useHistory } from "react-router-dom";

import NavigationBar from './NavigationBar';

function Home(){
    return(
        <div>
  <div>

<div className="row pb-5">
<div className="d-flex justify-content-center bg-dark text-white p-5">
<h1>Decide Dinner</h1>

</div>
<NavigationBar/>
</div>


</div>
<h3>Let Us Decide For You</h3>
<br/>
<h4>Main Features</h4>
<br/>
<h5>Pick Popular</h5>
<p>Uses a generated list of the top 10 restaraunts in the United States based on revenue in 2022.</p>
<br/>
<h5>Use My List</h5>
<p>Helps you choose based on restaraunts you want.</p>
        </div>
    )
}

export default Home