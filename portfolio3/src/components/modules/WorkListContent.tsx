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
      <Link to={props.path}>
        <img src={props.img} />
        <h3>{props.name}</h3>
      </Link>
    </div>
  );
};

export default WorkListContent;
