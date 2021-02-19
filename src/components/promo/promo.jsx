import React from 'react';
import Slider from '../slider/slider';
import SliderDescription from '../slider-description/slider-description';
import PromoMenu from '../promo-menu/promo-menu';

const Promo = ({images}) => {
  return (
    <main className='container'>
      <Slider images={images}/>
      <SliderDescription />
      <PromoMenu/>
    </main>
  );
}

export default Promo;
