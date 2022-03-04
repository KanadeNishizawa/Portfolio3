import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';
import process from 'process';
import WorkItemDetail from '../WorkItemDetail';
import TwinteImg1 from '../../../assets/img/twinte1.jpg';
import TwinteImg2 from '../../../assets/img/twinte2.jpg';
import TwinteImg3 from '../../../assets/img/twinte3.jpg';
import TwinteImg4 from '../../../assets/img/twinte4.jpg';
import TwinteImg5 from '../../../assets/img/twinte5.jpg';
import TwinteImg6 from '../../../assets/img/twinte6.jpg';
import TwinteImg7 from '../../../assets/img/twinte7.jpg';
import TwinteImg8 from '../../../assets/img/twinte8.jpg';
import TwinteImg9 from '../../../assets/img/twinte9.jpg';

const Twinte = () => {
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
        img={TwinteImg1}
        name='Twin:te Project'
        year='2019~'
        genre='Figma,HTML/SCSS/Vue.js, 
 Adobe Photoshop'
      />
      <section className='paragraph'>
        <p>
          筑波大生専用の時間割アプリを開発・運営するチームでデザイナーとして活動。
          UIデザインやグラフィックデザイン、一部フロントの実装など。
        </p>
        <a className='href' href='https://www.twinte.net/'>
          Twin:te ランディングページ
        </a>
      </section>
      <SRLWrapper options={options}>
        <div className='paragraph-wrapper'>
          <section className='paragraph'>
            <h4>画面デザイン</h4>
            <p>
              導線や情報のグルーピングを工夫し、一画面の情報量を絞りつつも、
              ユーザーが必要な機能にアクセスしやすいUIを目指した。
              また、清潔感のある色彩や、neumorphismの特徴である余白の心地よさを表現することを意識した。
            </p>
            <div className='work-item__img-layout--row'>
              <img src={TwinteImg9} />
              <img src={TwinteImg2} />
              <img src={TwinteImg3} />
            </div>
          </section>
          <section className='paragraph'>
            <h4>Design Systemの設計 、UI componentの制作</h4>
            <p>
              Twin:teで適用するデザインシステムを設計し、自主制作”Neumorphism
              component set”をベースに、
              アプリ内で仕様するUIコンポーネントを制作した。 設計思想にAtomic
              Designを採用し、再設計のしやすいデザインを目指した。
            </p>
            <div className='work-item__img-layout--column'>
              <img src={TwinteImg4} />
              <img src={TwinteImg5} />
              <img src={TwinteImg6} />
            </div>
          </section>
          <section className='paragraph'>
            <h4>ランディングページの制作</h4>
            <p>
              アプリのランディングページをデザインした。
              また、一部のセクションの実装を行った。
            </p>
            <a className='href' href='https://www.twinte.net/'>
              Twin:te ランディングページ
            </a>
            <div className='work-item__img-layout--column'>
              <img src={TwinteImg7} />
              <img src={TwinteImg8} />
            </div>
          </section>
        </div>
      </SRLWrapper>
    </section>
  );
};

export default Twinte;
