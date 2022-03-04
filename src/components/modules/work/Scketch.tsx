import React from 'react';
import WorkItemDetail from '../WorkItemDetail';
import ScketchImg1 from '../../../assets/img/scketch1.jpg';

const Scketch = () => {
  return (
    <section>
      <WorkItemDetail
        img={ScketchImg1}
        name='デッサン'
        year={2019}
        genre='木炭紙大画用紙、鉛筆'
      />
    </section>
  );
};

export default Scketch;
