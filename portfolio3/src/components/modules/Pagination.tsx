import React from 'react';
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';

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
      <Link className='button--tertiary' to={props.path}>
        {props.name}
      </Link>
    </footer>
  );
};

export default Pagination;
