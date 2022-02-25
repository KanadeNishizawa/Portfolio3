import React from 'react';
import WorkItemDetail from '../WorkItemDetail';
import TuberculosisImg1 from '../../../assets/img/tuberculosis1.jpg';

const Tuberculosis = () => {
  return (
    <section>
      <WorkItemDetail
        img={TuberculosisImg1}
        name='"結核菌が人体に寄生するまで" 図説'
        year={2021}
        genre='Adobe Illustrator'
      />
    </section>
  );
};

export default Tuberculosis;
