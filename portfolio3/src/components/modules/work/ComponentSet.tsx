import React from 'react';
import WorkItemDetail from '../WorkItemDetail';
import ComponentSetImg1 from '../../../assets/img/component-set1.jpg';
import ComponentSetImg2 from '../../../assets/img/component-set2.jpg';
import ComponentSetImg3 from '../../../assets/img/component-set3.jpg';

const ComponentSet = () => {
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
        <div className='work-item__img-layout--row'>
          <img src={ComponentSetImg2} />
          <img src={ComponentSetImg3} />
        </div>
      </section>
    </section>
  );
};

export default ComponentSet;
