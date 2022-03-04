import React from 'react';
import { HashLink } from 'react-router-hash-link';

type Props = {
  img: string;
  name: string;
  path: string;
  category: string;
};

const WorksCategory = (props: Props) => {
  return (
    <HashLink to={props.path}>
      <div className={'works-category--' + props.category}>
        <img
          className={'works-category__img--' + props.category}
          src={props.img}
        />
        <div className={'works-category__label--' + props.category}>
          {props.name}
        </div>
      </div>
    </HashLink>
  );
};

export default WorksCategory;
