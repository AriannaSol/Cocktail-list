import React from "react";
import { Link } from "react-router-dom";

function Cocktail({ image, name, id, info, glass }) {
  return (
    <article className="cocktail">
      <div className="image-container">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="cocktail-btn">
          details
        </Link>
      </div>
    </article>
  );
}

export default Cocktail;
