import React from 'react';
import WorkItemDetail from '../WorkItemDetail';
import '../../../App.css';
import CompositionImg1 from '../../../assets/img/composition1.jpg';

const Composition1 = () => {
  return (
    <section>
      <WorkItemDetail
        img={CompositionImg1}
        name='色彩構成'
        year={2019}
        genre='画用紙、アクリルガッシュ'
      />
    </section>
  );
};

export default Composition1;
