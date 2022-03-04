import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';
import process from 'process';
import WorkItemDetail from '../WorkItemDetail';
import SugarApartmentImg1 from '../../../assets/img/sugar-apartment-game1.jpg';
import SugarApartmentImg2 from '../../../assets/img/sugar-apartment-game2.jpg';
import SugarApartmentImg3 from '../../../assets/img/sugar-apartment-game3.jpg';
import SugarApartmentImg4 from '../../../assets/img/sugar-apartment-game4.jpg';

const SugarApartment = () => {
  const options = {
    settings: {
      overlayColor: 'rgba(92, 92, 92, 0.8)',
      transitionSpeed: 900,
      slideAnimationType: 'Slide',
    },
    buttons: {
      backgroundColor: '#00000000',
      iconColor: 'rgba(225, 225, 225, 0.98)',
      showAutoplayButton: false,
      showDownloadButton: false,
      showFullscreenButton: false,
      showNextButton: true,
      showThumbnailsButton: false,
      size: '52px',
    },
  };

  return (
    <section>
      <WorkItemDetail
        img={SugarApartmentImg1}
        name='シュガーアパートメント'
        year={2021}
        genre='Adobe Animate, HTML/CSS/CreateJS, ReactJS,
'
      />
      <section className='paragraph'>
        <p>
          筑波大学芸術専門学群と筑波大学附属病院のコラボレーションによる糖尿病予防啓発プログラム、”グルッシーコラボレーションズ”の一環。
          <br />
          HTML Canvas5のノベルゲーム”シュガーアパートメント”を制作した。 <br />
          主にAdobe
          Animateを用いて、プログラム、アニメーションの作成、サウンドの調整など、実装全般を担当した。
          <br />
          また、ランディングページの実装を行った。
        </p>
        <a className='href' href='https://sugar-apartment.web.app/'>
          シュガーアパートメント ランディングページ
        </a>
        <SRLWrapper options={options}>
          <div className='work-item__img-layout--row'>
            <img src={SugarApartmentImg2} />
            <img src={SugarApartmentImg3} />
            <img src={SugarApartmentImg4} />
          </div>
        </SRLWrapper>
      </section>
    </section>
  );
};

export default SugarApartment;
