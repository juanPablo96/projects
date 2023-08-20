import React from 'react'

import sneaker_small_1 from "../../assets/images/image-product-1-thumbnail.jpg"
import sneaker_small_2 from "../../assets/images/image-product-2-thumbnail.jpg"
import sneaker_small_3 from "../../assets/images/image-product-3-thumbnail.jpg"
import sneaker_small_4 from "../../assets/images/image-product-4-thumbnail.jpg"

import "./main.css"

function Main() {
  return (
    <div className='main_container'>
<img src={sneaker_small_1 } alt="" />
<img src={sneaker_small_2 } alt="" />
<img src={sneaker_small_3 } alt="" />
<img src={sneaker_small_4 } alt="" />
    </div>
  )
}

export default Main