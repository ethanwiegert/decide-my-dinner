import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import { motion } from "framer-motion";

function UseMyList() {
  const history = useHistory();

  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [restaurant, setRestaurant] = useState("");
  const [display, setDisplay] = useState(false);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (list.length < 2) {
      setRestaurant("");
    }
    if (list.length >= 2 && display) {
      let count = list.length;
      const picked = getRandomInt(count);
      setRestaurant(`Your choice is: ${list[picked].name}`);
    }
  };

  return (
    <div style={{ fontFamily: "Roboto Condensed, sans-serif" }}>
      <Header />

      <div className="d-flex justify-content-center p-4">
        <h2>Add Restaurants</h2>
      </div>

      <div className="d-flex justify-content-center pt-1">
        <h6>Any list changes will reset your choice.</h6>
      </div>

      <div className="d-flex justify-content-center">
        <form onSubmit={submitHandler}>
          <div className="mt-2 mb-3">
            <input
              className="m-2 p-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength="15"
            />
            <button
              className="btn btn-success p-2 m-2"
              onClick={() => {
                setList([...list, { name: name }]);
                setName("");
                setRestaurant("");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-plus-circle-fill"
                viewBox="0 0 15 20"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
              </svg>
            </button>
          </div>
          {list.length === 0 ? null : <h3>Your List:</h3>}

          {list.map((item) => (
            <div className="row d-flex justify-content-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <div className="col-6">
                  <p>{item.name} </p>
                </div>
                <div className="col-6 pb-3">
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      setList(list.filter((a) => a.name !== item.name));
                      setRestaurant("");
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-trash3-fill"
                      viewBox="0 0 16 18"
                    >
                      <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            </div>
          ))}

          <br />

          <div className="d-flex justify-content-center">
            {list.length >= 2 ? (
              <button
                type="submit button"
                name="submit"
                onClick={() => setDisplay(true)}
                className="col-6 btn btn button-flip"
              >
                Choose
              </button>
            ) : null}
          </div>
        </form>
      </div>

      <br />

      <div className="d-flex justify-content-center">
        <h4 id="result">{restaurant}</h4>
      </div>

      <br />

      <div className="mt-5"></div>
    </div>
  );
}

export default UseMyList;
