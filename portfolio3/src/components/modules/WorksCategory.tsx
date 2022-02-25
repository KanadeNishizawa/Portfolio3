import React from 'react';
import { HashLink } from 'react-router-hash-link';

import '../../App.css';

type Props = {
  img: string;
  name: string;
  path: string;
};

const WorksCategory = (props: Props) => {
  return (
    <div>
      <HashLink to={props.path}>
        <img src={props.img} />
      </HashLink>
      <HashLink to={props.path}>{props.name}</HashLink>
    </div>
  );
};

export default WorksCategory;
