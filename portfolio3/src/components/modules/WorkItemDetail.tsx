import React from 'react';

type Props = {
  img?: string;
  name: string;
  year: any;
  genre: string;
};

const WorkItemDetail = (props: Props) => {
  return (
    <div className='work-item__wrapper'>
      <div className='work-item__caption'>
        <h3>{props.name}</h3>
        <h4>
          {props.year}
          <br />
          {props.genre}
        </h4>
      </div>
      <img className='work-item__img' src={props.img} />
    </div>
  );
};

export default WorkItemDetail;
