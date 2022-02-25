import React from 'react';
import WorkItemDetail from '../WorkItemDetail';
import '../../../App.css';
import TwinParadoxImg1 from '../../../assets/img/twin-paradox1.jpg';

const TwinParadox = () => {
  return (
    <section>
      <WorkItemDetail
        img={TwinParadoxImg1}
        name='"Twin ParadoX V" ジャケット'
        year={2019}
        genre='Adobe Photoshop'
      />

      <p>
        "Tsukuba DTM Lab."2019年度雙峰祭頒布CD"Twin
        ParadoX5"のジャケットイラストを制作した。
        <br />
        <a href='https://tsukubadtm.tumblr.com'>
          Tsukuba DTM Labサイト(Tumblr)
        </a>
      </p>
    </section>
  );
};

export default TwinParadox;
