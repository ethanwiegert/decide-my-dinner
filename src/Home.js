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





<div className="p-4">

<h5>Pick Popular</h5>
<p>Uses a generated list of the top 10 restaraunts in the United States based on revenue in 2022.</p>
<h5>Use My List</h5>
<p>Helps you choose based on restaraunts you want.</p>

</div>






        </div>
        
    )
}

export default Home