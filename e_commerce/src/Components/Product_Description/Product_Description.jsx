import React from "react";

const Description = (props) => {
  return (
    <>
      <p>SNEAKER COMPANY</p>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <p>{props.newPrice} <span>{props.discount}</span></p>
      <p>{props.price}</p>
    </>
  );
};

export default Description;
