import React from 'react';
import Header from '../header/header';
import Promo from '../promo/promo';
import Footer from '../footer/footer';

const Wrapper = ({ images }) => {
  return (
    <>
      <Header />
      <Promo images={images} />
      <Footer/>
    </>
  );
}

export default Wrapper;
