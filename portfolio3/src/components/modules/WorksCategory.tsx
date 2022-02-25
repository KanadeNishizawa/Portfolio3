import React from 'react';
import { HashLink } from 'react-router-hash-link';

type Props = {
  img: string;
  name: string;
  path: string;
};

const WorksCategory = (props: Props) => {
  return (
    <div className='works-category'>
      <HashLink to={props.path}>
        <img className='works-category__img' src={props.img} />
      </HashLink>
      <HashLink className='works-category__label' to={props.path}>
        {props.name}
      </HashLink>
    </div>
  );
};

export default WorksCategory;
