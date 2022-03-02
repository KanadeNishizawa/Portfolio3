import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';
import process from 'process';
import WorkItemDetail from '../WorkItemDetail';
import PasserbyImg1 from '../../../assets/img/passerby1.jpg';
import PasserbyImg2 from '../../../assets/img/passerby2.jpg';
import PasserbyImg3 from '../../../assets/img/passerby3.jpg';

const Passerby = () => {
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
        img={PasserbyImg1}
        name='passerby'
        year={2022}
        genre='HTML/CSS/Three.js
Adobe After Effects, Adobe Illustrator, MAYA, Blenfder'
      />
      <section className='paragraph'>
        <p>
          「他人が発した情報が絶え間なく流入してくるネット社会やコミュニケーションに気疲れしつつも、
          他人の存在や温もりは感じていたい」という状況をテーマに、「横切っていく通行人を眺めるだけの窓」を表現したWebサイトを制作した。
          <br />
          日本のどこかで特定の条件に当てはまるツイートが投稿されると、人が生成され窓の外を横切っていく。
          <br />
          実際の投稿をリアルタイムで反映しつつも、匿名化・符号化した上で、双方向のやりとりをしえない状況を作った。
        </p>
        <SRLWrapper options={options}>
          <div className='work-item__img-layout--row'>
            <img src={PasserbyImg2} />
            <img src={PasserbyImg3} />
          </div>
        </SRLWrapper>
      </section>
    </section>
  );
};

export default Passerby;
