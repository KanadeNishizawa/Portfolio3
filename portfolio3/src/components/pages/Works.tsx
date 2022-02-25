import React from 'react';
import { BrowserRouter, Outlet, Routes, Route } from 'react-router-dom';
import Heading2 from '../modules/Heading2';
import WorkList from '../sections/WorkList';
import WorkItem from '../sections/WorkItem';
import { workerData } from 'worker_threads';

const Works = () => {
  return (
    <section>
      <Heading2 heading2='Works' />
      <Routes>
        <Route path='/' element={<WorkList />} />
        <Route path='*' element={<WorkItem />} />
      </Routes>
    </section>
  );
};

export default Works;
