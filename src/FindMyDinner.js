import React from 'react';
import './App.css';
import {useState} from "react";

import Header from './Header';

import OpenAI from "openai"



function FindMyDinner(){
    const openai = new OpenAI({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
      });


    const [location, setLocation] = useState('');
    const [response, setResponse] = useState('')

async function handleSubmit(location) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: `Create a list with clickable links of the top 5 rated restaurants in ${location} and include their cuisine style.` }],
    model: "gpt-3.5-turbo",
    temperature: 1,
  });

  setResponse(completion)
}




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
                
           
            
        <form onSubmit={handleSubmit}>
            <label></label>
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