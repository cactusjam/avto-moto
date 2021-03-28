import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../wrapper/wrapper';

const App = ({images}) => {
  return (
    <Wrapper images={images}/>
  );
}

App.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  })).isRequired
};

App.defaultProps = {
  images: [],
};

export default App;
