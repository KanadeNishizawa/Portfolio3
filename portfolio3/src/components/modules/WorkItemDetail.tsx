import React from 'react';

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
      <h4>
        {props.year}年<br />
        {props.genre}
      </h4>
    </div>
  );
};

export default WorkItemDetail;
