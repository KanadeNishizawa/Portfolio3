import React from 'react';
import '../../App.css';

type Props = {
  heading2: string;
};

const Heading2 = (props: Props) => {
  return (
    <div>
      <h2>{props.heading2}</h2>
      <img></img>
    </div>
  );
};

export default Heading2;
