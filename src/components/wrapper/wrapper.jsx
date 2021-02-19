import React from 'react';
import Header from '../header/header';
import Promo from '../promo/promo';

const Wrapper = ({images}) => {
  return (
    <>
      <Header />
      <Promo images={images} />
    </>
  );
}

export default Wrapper;
