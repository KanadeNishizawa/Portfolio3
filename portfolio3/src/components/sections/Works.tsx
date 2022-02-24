import React from 'react';
import Heading2 from '../modules/Heading2';
import WorksCategory from '../modules/WorksCategory';
import '../../App.css';

// type Props = {
//   link: string;
//   name: string;
//   linkStyle: string;
// };

const Works = () => {
  return (
    <section>
      <Heading2 heading2='Works' />
      <WorksCategory path='works' img='' name='Web' />
      <WorksCategory path='works#graphic' img='' name='Graphic' />
    </section>
  );
};

export default Works;
