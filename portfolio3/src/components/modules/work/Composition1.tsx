import React from 'react';
import WorkItemDetail from '../WorkItemDetail';
import '../../../App.css';

const Composition1 = () => {
  return (
    <section>
      <WorkItemDetail
        img='.'
        name='"結核菌が人体に寄生するまで" 図説'
        year={2021}
        genre='.'
      />
    </section>
  );
};

export default Composition1;
