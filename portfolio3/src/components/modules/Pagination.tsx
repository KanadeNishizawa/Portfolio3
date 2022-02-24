import React from 'react';
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';
import '../../App.css';
type Props = {
  path: string;
  name: string;
};
const Pagination = (props: Props) => {
  return (
    <footer>
      {/* <div>
        <button>Prev</button>
        <button>Next</button>
      </div> */}
      <Link to={props.path}>{props.name}</Link>
    </footer>
  );
};

export default Pagination;
