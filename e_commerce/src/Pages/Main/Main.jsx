import React from "react";
import Small_Img from "../../Components/Small_Img/Small_Img";
import Big_Img from "../../Components/Big_Img/Big_Img";
import Product_Description from "../../Components/Product_Description/Product_Description";
import Button from "../../Components/Button/Button";
import "./main.css";

import sneaker_big_1 from "../../assets/images/image-product-1.jpg";

import cart from "../../assets/icons/icon-cart.svg"
import plus from "../../assets/icons/icon-plus.svg"
import minus from "../../assets/icons/icon-minus.svg"

import sneaker_small_1 from "../../assets/images/image-product-1-thumbnail.jpg";
import sneaker_small_2 from "../../assets/images/image-product-2-thumbnail.jpg";
import sneaker_small_3 from "../../assets/images/image-product-3-thumbnail.jpg";
import sneaker_small_4 from "../../assets/images/image-product-4-thumbnail.jpg";

function Main() {
  return (
    <div className="main_container">
      <div className="main_container_big_imgs">
        <Big_Img img={sneaker_big_1} />
      </div>
      <div className="main_container_small_imgs">
        <Small_Img img={sneaker_small_1} />
        <Small_Img img={sneaker_small_2} />
        <Small_Img img={sneaker_small_3} />
        <Small_Img img={sneaker_small_4} />
      </div>
      <div className="main_container_description">
        <Product_Description
          name="Fall Limited Edition Sneakers "
          description="These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand eveything the weather can offer."
          newPrice="$125.00"
          discount="50%"
          price="250.00"

        />
        <button className="main_container_description__button"><img src={minus} alt="" /></button>
        <input type="number" className="main_container_description__input" />
        <button className="main_container_description__button"><img src={plus} alt="" /></button>
      <Button 
      title="Add to cart" 
      type = "orange"
      img = {cart}

   

      />
      </div>
    </div>
  );
}

export default Main;
