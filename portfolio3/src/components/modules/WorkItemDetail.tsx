import React from 'react';
import '../../App.css';

type Props = {
  img: string;
  name: string;
  year: any;
  genre: string;
};

const WorkItemDetail = (props: Props) => {
  return (
    <div>
      <img src={props.img} />
      <h3>{props.name}</h3>
      <h5>
        {props.year}年<br />
        {props.genre}
      </h5>
    </div>
  );
};

export default WorkItemDetail;
