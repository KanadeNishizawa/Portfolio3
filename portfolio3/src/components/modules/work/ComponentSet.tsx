import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';
import process from 'process';
import WorkItemDetail from '../WorkItemDetail';
import ComponentSetImg1 from '../../../assets/img/component-set1.jpg';
import ComponentSetImg2 from '../../../assets/img/component-set2.jpg';
import ComponentSetImg3 from '../../../assets/img/component-set3.jpg';

const ComponentSet = () => {
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
        img={ComponentSetImg1}
        name='Neumorphic component set'
        year={2021}
        genre='Figma,HTML/SCSS/Vue.js'
      />
      <section className='paragraph'>
        <p>
          デザイン手法にNeumorphismを採用したUIコンポーネントセット。
          <br />
          デザインしたcomponentをまとめたスタイルガイド ”Storybook(for
          Vue)”を実装した。
        </p>
        <a
          className='href'
          href='https://kanadenishizawa.github.io/neumorphism/?path=/docs/introduction'
        >
          Neumorphic component set(Storybook)
        </a>
        <SRLWrapper>
          <div className='work-item__img-layout--row'>
            <img src={ComponentSetImg2} />
            <img src={ComponentSetImg3} />
          </div>
        </SRLWrapper>
      </section>
    </section>
  );
};

export default ComponentSet;
