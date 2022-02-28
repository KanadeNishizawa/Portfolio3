import React from 'react';
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';

type Props = {
  path: string;
  img: string;
  name: string;
};

const WorkListContent = (props: Props) => {
  return (
    <div>
      <Link className='work-list__content' to={props.path}>
        <div className='work-list__img-wrapper'>
          <img className='work-list__img' src={props.img} />
        </div>
        <h4 className='work-list__label'>{props.name}</h4>
      </Link>
    </div>
  );
};

export default WorkListContent;
