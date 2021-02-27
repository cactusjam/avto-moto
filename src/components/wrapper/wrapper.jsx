import React from 'react';
import Header from '../header/header';
import Promo from '../promo/promo';
import Footer from '../footer/footer';
import Modal from '../modal/modal';

const Wrapper = ({ images }) => {
  return (
    <>
      <Header />
      <Promo images={images} />
      <Footer/>
      <Modal/>
    </>
  );
}

export default Wrapper;
