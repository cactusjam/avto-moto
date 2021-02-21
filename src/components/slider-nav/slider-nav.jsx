import React from 'react';
import SliderSnapperBtn from '../slider-snapper-btn/slider-snapper-btn';

const SliderNav = ({ images }) => {
  return (
    <div className='slider__wrapper-nav'>
      <SliderSnapperBtn isPrev />
      <ul className='slider__nav'>
        {images.map(({ alt, id, src }) => {
          return (
            <li key={id}>
              <img className='slider__nav-img' src={src} alt={alt} width='128px' height='80px' />
            </li>
          )
        })}
      </ul>
      <SliderSnapperBtn isPrev={false}/>
    </div>
  );
};

export default SliderNav;
