import React from 'react';
import '../App.css';

type Props = {
  img: string;
  name: string;
};

const WorkDetail = (props: Props) => {
  return (
    <div>
      <img src={props.img} />
      <button>{props.name}</button>
    </div>
  );
};

export default WorkDetail;
