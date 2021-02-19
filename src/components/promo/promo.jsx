import React from 'react';
import Slider from '../slider/slider';
import SliderDescription from '../slider-description/slider-description';

const Promo = ({images}) => {
  return (
    <main className='container'>
      <Slider images={images}/>
      <SliderDescription />
    </main>
  );
}

export default Promo;
