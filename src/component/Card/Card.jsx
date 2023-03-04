import React from "react";
import "./Card.css";

const Card = ({ name, flags, continents }) => {
 // console.log(flags);
  return (
    <>
      <article className="card">
        <figure>
          <img src={flags.png} alt="" />
        </figure>
        <div className="content">
          <h1>{name.common}</h1>
          <p>{continents}</p>
        </div>
      </article>
    </>
  );
};

export default Card;
