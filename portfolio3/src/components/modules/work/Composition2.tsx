import React from 'react';
import WorkItemDetail from '../WorkItemDetail';
import '../../../App.css';
import CompositionImg2 from '../../../assets/img/composition2.jpg';
const Composition2 = () => {
  return (
    <section>
      <WorkItemDetail
        img={CompositionImg2}
        name='色彩構成'
        year={2019}
        genre='Adobe Illustrator,Adobe Photoshop'
      />
    </section>
  );
};

export default Composition2;
