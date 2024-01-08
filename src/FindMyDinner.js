import React from 'react';
import './App.css';
import {useState} from "react";

import Header from './Header';

import OpenAI from "openai"



function FindMyDinner(){
    const openai = new OpenAI({
        apiKey: process.env.REACT_APP_API_KEY,
        dangerouslyAllowBrowser: true,
      });


    const [location, setLocation] = useState('');
    const [response, setResponse] = useState(null)

    function handleChange({target}){
      setLocation(target.value)
    }

async function handleSubmit(event) {
  event.preventDefault()
  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-1106",
    messages: [
      {
          "role": "user",
          "content": `Create a list with clickable links of the top 5 rated restaurants in ${location} and include their cuisine style.  Format the response as an html ordered list.`
        }
    ],
    temperature: 0.8,
    max_tokens: 250,
    top_p: 1,
  });
let text=completion.choices[0].message.content
setResponse({__html: `${text}`})
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
        <input id="location"
          value={location}
          onChange={handleChange}
        />
        <div className="row">
        <div className="d-flex justify-content-center pt-5">
        <button id="submit" name="submit" type="submit button" className="col-6 btn btn-lg button-flip">Find Restaurants</button>
        </div>
        </div>
 </form>
        
        </div>

        

        <div dangerouslySetInnerHTML={response} className="d-flex justify-content-center py-5">
     
       
        </div>
        

        </div>

    </div>
)

}

export default FindMyDinner