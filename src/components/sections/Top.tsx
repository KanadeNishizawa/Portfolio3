import React from 'react';
import TopImg1 from '../../assets/img/top1.jpg';

const Top = () => {
  return (
    <section>
      <section className='top'>
        <div className='top__img-wrap'>
          <img className='top__img' src={TopImg1} />
        </div>
        <div className='top__title'>
          <h1>Portfolio</h1>
          <p className='top__name'>Kanade Nishizawa</p>
        </div>
      </section>
      <div className='top__border'></div>
    </section>
  );
};

export default Top;
