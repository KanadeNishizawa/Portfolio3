import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Pagination from '../modules/Pagination';
import ComponentSet from '../modules/work/ComponentSet';
import SugarApartment from '../modules/work/SugarApartment';
import Passerby from '../modules/work/Passerby';
import Twinte from '../modules/work/Twinte';
import Herp from '../modules/work/Herp';
import Kaseijin from '../modules/work/Kaseijin';
import TwinParadox from '../modules/work/TwinParadox';
import SweetsPlanet from '../modules/work/SweetsPlanet';
import Tuberculosis from '../modules/work/Tuberculosis';
import Composition1 from '../modules/work/Composition1';
import Composition2 from '../modules/work/Composition2';
import Scketch from '../modules/work/Scketch';

const WorkItem = () => {
  let works = [
    {
      path: 'component-set',
      name: <ComponentSet />,
    },
    {
      path: 'sugar-apartment',
      name: <SugarApartment />,
    },
    {
      path: 'passerby',
      name: <Passerby />,
    },
    {
      path: 'twinte',
      name: <Twinte />,
    },
    {
      path: 'herp',
      name: <Herp />,
    },
    {
      path: 'kaseijin',
      name: <Kaseijin />,
    },
    {
      path: 'twin-paradox-v',
      name: <TwinParadox />,
    },
    {
      path: 'sweets-planet',
      name: <SweetsPlanet />,
    },
    {
      path: 'tuberculosis',
      name: <Tuberculosis />,
    },
    {
      path: 'composition1',
      name: <Composition1 />,
    },
    {
      path: 'composition2',
      name: <Composition2 />,
    },
    {
      path: 'drawing',
      name: <Scketch />,
    },
  ];
  return (
    <motion.section
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeIn' }}
      className='work-item'
    >
      <Routes>
        {works.map((work) => (
          <Route path={work.path} element={work.name} />
        ))}
      </Routes>
      <Pagination path='../' name='Back to List of works' />
    </motion.section>
  );
};

export default WorkItem;
