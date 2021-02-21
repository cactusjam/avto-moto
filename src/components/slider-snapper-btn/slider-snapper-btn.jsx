import React from 'react';

const SliderSnapperBtn = ({ isPrev }) => {
  return (
    <div className='slider__snapper'>
     {isPrev
     ? <button className='slider__snapper-btn slider__snapper-btn--prev' />
     : <button className='slider__snapper-btn slider__snapper-btn--next' />}
    </div>
  );
};

export default SliderSnapperBtn;
