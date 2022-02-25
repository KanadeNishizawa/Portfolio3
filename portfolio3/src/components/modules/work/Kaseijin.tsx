import React from 'react';
import WorkItemDetail from '../WorkItemDetail';
import KaseijinImg1 from '../../../assets/img/kaseijin1.jpg';
import KaseijinImg2 from '../../../assets/img/kaseijin2.jpg';

const Kaseijin = () => {
  return (
    <section>
      <WorkItemDetail
        img={KaseijinImg1}
        name='かせいじんのきたく'
        year={2020}
        genre='Adobe Scketch,HTML/SCSS/CreateJs'
      />
      <p>
        JavaScriptライブラリCreateJSを用いて、
        <br />
        縦スクロールアクションゲーム”かせいじんのきたく”を制作した。
        <br />
        また、ゲームの素材用のイラストを描いた。
      </p>
      <img src={KaseijinImg2} />
    </section>
  );
};

export default Kaseijin;
