import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

import '../../App.css';

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
    <section>
      <Routes>
        {works.map((work) => (
          <Route path={work.path} element={work.name} />
        ))}
      </Routes>

      {/* <Routes>
        <Route path='/' element={<ComponentSet />} />
      </Routes> */}
      <Pagination path='../' name='Back to List of works' />
    </section>
  );
};

export default WorkItem;
