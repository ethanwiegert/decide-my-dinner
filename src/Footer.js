import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Footer() {
  return (
    <div>
      <footer
        className="bg-secondary fixed-bottom p-2"
        style={{ fontFamily: "Roboto Condensed, sans-serif" }}
      >
        <p>
          To contact me or learn more about this site, click <Link className="text-dark" to="/about">here</Link>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
