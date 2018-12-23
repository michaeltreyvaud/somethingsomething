import React from 'react';
import ReactLoading from 'react-loading';
import style from './style';

const LoadingPage = () => (
  <div style={style.container}>
    <ReactLoading
      type="spin"
      color="#2A242F"
      width={180}
      height={180}
    />
  </div>
);

export default LoadingPage;
