import React from 'react';
import './App.css';
import {useState, useEffect} from "react";
import { Link, useHistory, NavLink } from "react-router-dom";
import Header from './Header';


function FindMyDinner(){
    const [location, setLocation] = useState('');
    const [response, setResponse] = useState('')






return(
    <div>
        <Header/>

        <div>

        <div className="d-flex justify-content-center pt-3">
        <h2>Enter a location:</h2>
        </div>

        <div className="d-flex justify-content-center pt-2">
        <p>(At least city or town for most accurate results)</p>
        </div>
        

        
            

            <div className="d-flex justify-content-center pb-5 pt-4">
                
           
            
        <form>
        <input id="location"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />
        <div className="row">
        <div className="d-flex justify-content-center pt-5">
        <button id="submit" type="button" className="col-6 btn btn-lg button-flip">Find Restaurants</button>
        </div>
        </div>
 </form>
        
        </div>

        

        <div className="d-flex justify-content-center pt-5">
        <h3 id="result">{response}</h3>
       
        </div>
        

        </div>

    </div>
)

}

export default FindMyDinner