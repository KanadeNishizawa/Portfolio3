import React from 'react';
import WorkDetail from '../modules/WorkDetail';
import Pagination from '../modules/Pagination';
import '../../App.css';

// type Props = {
//   link: string;
//   name: string;
//   linkStyle: string;
// };

const WorkContent = () => {
  return (
    <section>
      <WorkDetail img='.' name='あああ' year={2222} genre='あああ' />
      <Pagination />
    </section>
  );
};

export default WorkContent;
