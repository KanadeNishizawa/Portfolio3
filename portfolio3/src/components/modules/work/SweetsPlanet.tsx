import React from 'react';
import WorkItemDetail from '../WorkItemDetail';
import SweetsPlanetImg1 from '../../../assets/img/sweets-planet1.jpg';

const SweetsPlanet = () => {
  return (
    <section>
      <WorkItemDetail
        img={SweetsPlanetImg1}
        name='"Sweets Planet" ジャケット'
        year={2019}
        genre='Adobe Photoshop'
      />
      <section className='paragraph'>
        <p>
          "Tsukuba DTM Lab."2019年春M3頒布CDのジャケットイラストを制作した。
        </p>
        <a className='href' href='https://sweetsplanet-m3.tumblr.com'>
          "Sweets Planet" 特設サイト
        </a>
        <a className='href' href='https://tsukubadtm.tumblr.com'>
          Tsukuba DTM Labサイト（Tumblr)
        </a>
      </section>
    </section>
  );
};

export default SweetsPlanet;
