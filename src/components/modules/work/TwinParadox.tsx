import React from 'react';
import WorkItemDetail from '../WorkItemDetail';
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
      <section className='paragraph'>
        <p>
          "Tsukuba DTM Lab."2019年度雙峰祭頒布CD"Twin
          ParadoX5"のジャケットイラストを制作した。
        </p>
        <a className='href' href='https://tsukubadtm.tumblr.com'>
          Tsukuba DTM Labサイト(Tumblr)
        </a>
      </section>
    </section>
  );
};

export default TwinParadox;
