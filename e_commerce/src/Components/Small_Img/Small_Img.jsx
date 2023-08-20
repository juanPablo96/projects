import React from "react";
import "./small_img.css"
const Small_Img = (props) => {
  return <img  className="small_img"src={props.img} alt="" />;
};

export default Small_Img;
