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
      <p>
        "Tsukuba DTM Lab."2019年春M3頒布CDのジャケットイラストを制作した。
        <br />
        <a href='https://sweetsplanet-m3.tumblr.com'>
          "Sweets Planet" 特設サイト
        </a>
        <br />
        <a href='https://tsukubadtm.tumblr.com'>
          Tsukuba DTM Labサイト（Tumblr)
        </a>
      </p>
    </section>
  );
};

export default SweetsPlanet;
