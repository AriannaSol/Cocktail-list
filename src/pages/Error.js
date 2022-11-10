import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error-page">
      <div className="error-container">
        <h1>Ooops! It'a dead end</h1>
        <Link to="/" className="error-btn">
          Back home
        </Link>
      </div>
    </section>
  );
};

export default Error;
