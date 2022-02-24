import React from 'react';
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';
import '../../App.css';

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
        <h4>{props.name}</h4>
      </Link>
    </div>
  );
};

export default WorkListContent;
