import React from "react";
import "./App.css";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

function Header() {
  const history = useHistory();

  return (
    <div
      style={{ fontFamily: "Roboto Condensed, sans-serif" }}
    >
      <div className="bg-dark bg-gradient text-white p-4">
        <div className="d-flex justify-content-center">
          {history.length < 2 ? (
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
            >
              <h1>Decide Dinner</h1>
            </motion.div>
          ) : (
            <h1>Decide Dinner</h1>
          )}
        </div>

        <div className="d-flex justify-content-center">
          {history.length < 2 ? (
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
            >
              <h3 className="fst-italic">Let Us Decide For You</h3>
            </motion.div>
          ) : (
            <h3 className="fst-italic">Let Us Decide For You</h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
