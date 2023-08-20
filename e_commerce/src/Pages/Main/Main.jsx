import React from "react";
import Small_Img from "../../Components/Small_Img/Small_Img";
import Big_Img from "../../Components/Big_Img/Big_Img";
import "./main.css";

import sneaker_big_1 from "../../assets/images/image-product-1.jpg";

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
    </div>
  );
}

export default Main;
