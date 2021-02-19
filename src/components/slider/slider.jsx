import React from 'react';

const Slider = ({ images }) => {
  return (
    <ul>
      {images.map((alt, id, src) => {
        return (
          <li key={id}>
            <img src={src} alt={alt}/>
          </li>
        )
      })}
    </ul>
  );
};

export default Slider;
