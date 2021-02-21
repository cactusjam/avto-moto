import React from 'react';
import SliderNav from '../slider-nav/slider-nav';

const Slider = ({ images }) => {
  return (
    <section className='slider__gallery'>
      <ul className='slider__gallery-list'>
        {images.map(({ alt, id, src }) => {
          return (
            <li key={id}>
              <img className='slider__gallery-img' src={src} alt={alt} />
            </li>
          )
        })}
      </ul>
      <SliderNav images={ images }/>
    </section>
  );
};

export default Slider;
