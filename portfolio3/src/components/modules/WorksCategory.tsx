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
      <img src={props.img} />
      <HashLink to={props.path}>{props.name}</HashLink>
    </div>
  );
};

export default WorksCategory;
