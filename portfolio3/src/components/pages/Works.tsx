import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Heading2 from '../modules/Heading2';
import WorkList from '../sections/WorkList';
import WorkItem from '../sections/WorkItem';
import { workerData } from 'worker_threads';

const Works = () => {
  return (
    <motion.section
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeIn' }}
      className='layout--a'
    >
      <Heading2 heading2='Works' />
      <Routes>
        <Route path='/' element={<WorkList />} />
        <Route path='*' element={<WorkItem />} />
      </Routes>
    </motion.section>
  );
};

export default Works;
