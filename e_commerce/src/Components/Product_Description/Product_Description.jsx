import React from "react";
import "./product_description.css"

const Description = (props) => {
  return (
    <>
      <h4 className="description_title_company">SNEAKER COMPANY</h4>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <p><b>{props.newPrice}</b> <span className="description_dicount"><b>{props.discount}</b></span></p>
      <p className="description_old_price">{props.price}</p>
    </>
  );
};

export default Description;
