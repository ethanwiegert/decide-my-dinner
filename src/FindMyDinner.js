import React from "react";
import "./App.css";
import { useState } from "react";
import { useSelector } from 'react-redux';
import { selectMeal } from './mealSlice';

import Header from "./Header";
import Footer from "./Footer";
import ErrorAlert from "./DisplayError";

import OpenAI from "openai";
import DOMPurify from "dompurify";

function FindMyDinner() {
  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const [location, setLocation] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [requestError, setRequestError] = useState(null);
  const [moderation, setModeration] = useState("");

  const meal = useSelector(selectMeal)

  function handleChange({ target }) {
    setLocation(target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setResponse("");
    setRequestError(null);
    setModeration("");

    const checkFields = await openai.moderations.create({
      input: `Create a list with clickable links of the top 5 rated restaurants to eat ${meal} in ${location} and include their cuisine style.  Format the response as an html ordered list.`,
    });
    if (checkFields.results[0].flagged === true) {
      let error = "This violates the usage policies of open AI.";
      setModeration(error);
      throw error;
    }
    setLoading(true);

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `Create a list of the top 5 rated restaurants to eat ${meal} in ${location} with clickable links that open to a search of that restaurant on google and include their cuisine style.  Format the response as an html ordered list.`,
          },
        ],
        temperature: 1,
        max_tokens: 300,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
      setLoading(false);
      let text = completion.choices[0].message.content;
      const clean = DOMPurify.sanitize(text);
      setResponse({ __html: `${clean}` });
    } catch (e) {
      setRequestError(e);
    }
  }

  return (
    <div style={{ fontFamily: "Roboto Condensed, sans-serif" }}>
      <Header />

      <div>
        <div className="d-flex justify-content-center m-auto pt-3 text-center">
          <h4>Enter a location for where you would like to eat {meal}:</h4>
        </div>

        <div className="d-flex justify-content-center pt-2">
          <p>Enter a city or town for most accurate results</p>
        </div>

        <div className="d-flex justify-content-center mx-5">
          <p className="text-center">
            If you are entering a common city name, please include the state.
          </p>
        </div>

        <div className="d-flex justify-content-center pb-5 pt-4">
          <form onSubmit={handleSubmit}>
            <input
              id="location"
              value={location}
              maxLength="25"
              onChange={handleChange}
            />
            <div className="row">
              <div className="d-flex justify-content-center pt-5">
                <button
                  id="submit"
                  name="submit"
                  type="submit button"
                  className="col-6 btn btn-lg button-flip"
                >
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
        {moderation.length ? (
          <div className="alert alert-danger m-2">{moderation}</div>
        ) : null}
        <ErrorAlert error={requestError} />

        {loading === true ? (
          <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : null}

        {response.length < 1 ? null : (
          <div
            dangerouslySetInnerHTML={response}
            className="d-flex justify-content-center py-5"
          ></div>
        )}
      </div>
      <div className="pt-5">
      <Footer/>
      </div>
    </div>
  );
}

export default FindMyDinner;
