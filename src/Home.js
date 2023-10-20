import React from 'react';
import './App.css';
import { Link, useHistory } from "react-router-dom";

import Header from './Header';
import UseMyList from './UseMyList';
import PickPopular from './PickPopular';
function Home(){
    return(

<div>
<Header/>




<h3>Let Us Decide For You</h3>
<br/>
<h4>Main Features</h4>
<br/>
<h5>Pick Popular</h5>
<p>Uses a generated list of the top 10 restaraunts in the United States based on revenue in 2022.</p>
<br/>
<PickPopular/>
<br/>
<h5>Use My List</h5>
<p>Helps you choose based on restaraunts you want.</p>
<br/>
<UseMyList/>
<br/>


        </div>
        
    )
}

export default Home