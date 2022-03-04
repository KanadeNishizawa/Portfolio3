import React from 'react';
import Heading2Img from '../../assets/img/heading2.jpg';

type Props = {
  heading2: string;
};

const Heading2 = (props: Props) => {
  return (
    <div className='heading2'>
      <h2>{props.heading2}</h2>
      <img src={Heading2Img} className='heading2__img'></img>
    </div>
  );
};

export default Heading2;
