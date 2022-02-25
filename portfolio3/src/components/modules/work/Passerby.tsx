import React from 'react';
import WorkItemDetail from '../WorkItemDetail';

const Passerby = () => {
  return (
    <section>
      <WorkItemDetail
        img='.'
        name='passerby'
        year={2021 - 2022}
        genre='HTML/CSS/Three.js
Adobe After Effects, Adobe Illustrator, MAYA, Blenfder'
      />
      <p>
        「他人が発した情報が絶え間なく流入してくるネット社会やコミュニケーションに気疲れしつつも、
        他人の存在や温もりは感じていたい」という状況をテーマに、「横切っていく通行人を眺めるだけの窓」を制作した。
        <br />
        日本のどこかで特定の条件に当てはまるツイートが投稿されると、人が生成され窓の外を横切っていく。
        <br />
        実際の投稿をリアルタイムで反映しつつも、匿名化・符号化した上で、双方向のやりとりをしえない状況を作った。
      </p>
    </section>
  );
};

export default Passerby;
