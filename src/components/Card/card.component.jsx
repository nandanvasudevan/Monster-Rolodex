import React from "react";

import "./card.styles.css";

export const Card = (props) => (
  <div className="card-container">
    <img
      alt="monster"
      src={`https://robohash.org/${props.monster.name}.png?set=set2&bgset=bg1&ignoreext=false`}
    />
    <h1 className="monster-name">{props.monster.name}</h1>
    <p>{props.monster.email}</p>
  </div>
);
