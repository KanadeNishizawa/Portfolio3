import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';
import process from 'process';
import WorkItemDetail from '../WorkItemDetail';
import KaseijinImg1 from '../../../assets/img/kaseijin1.jpg';
import KaseijinImg2 from '../../../assets/img/kaseijin2.jpg';

const Kaseijin = () => {
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
        name='かせいじんのきたく'
        year={2020}
        genre='Adobe Scketch,HTML/SCSS/CreateJs'
      />
      <section className='paragraph'>
        <p>
          JavaScriptライブラリCreateJSを用いて、
          <br />
          縦スクロールアクションゲーム”かせいじんのきたく”を制作した。
          <br />
          また、ゲームの素材用のイラストを描いた。
        </p>
        <SRLWrapper>
          <div className='work-item__img-layout--row'>
            <img src={KaseijinImg1} />
            <img src={KaseijinImg2} />
          </div>
        </SRLWrapper>
      </section>
    </section>
  );
};

export default Kaseijin;
