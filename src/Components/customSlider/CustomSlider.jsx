import React, { memo } from 'react';
import { slide } from '../../dataFolder/data';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from '../../dataFolder/data';

function CustomSlider() {
  const product = slide.map(el => {
    return (
      <div className="pictures" style={{ width: '400px', height: "350px" }} key={el.id}>
        <img src={el.imgUrl} />
      </div>
    )
  })

  return (
    <div className='carousel-box'>
      <Carousel
        showDots={true}
        responsive={responsive}>
        {product}
      </Carousel>
    </div>
  )
}

export default memo(CustomSlider)