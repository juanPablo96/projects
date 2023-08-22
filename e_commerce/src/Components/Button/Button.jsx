import React from "react";
import "./button.css"


const Button = (props) =>{
    return(
        <>
        <button className = {`btn_product_${props.type}`} > <img className ="btn_image"src={props.img} alt="cart img in the button Add to cart" /> <b>{props.title}</b></button>
        
        </>
    )
}

export default Button