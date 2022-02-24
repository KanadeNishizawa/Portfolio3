import React from 'react';
import '../App.css';

type Props = {
  img: string;
  name: string;
};

const WorkPreview = (props: Props) => {
  return (
    <div>
      <img src={props.img} />
      <h4>{props.name}</h4>
    </div>
  );
};

export default WorkPreview;
