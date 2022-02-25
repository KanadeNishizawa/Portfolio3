import React from 'react';
import WorkItemDetail from '../WorkItemDetail';
import '../../../App.css';
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
      <p>
        デザイン手法にNeumorphismを採用した、UIコンポーネントセット。
        <br />
        デザインしたcomponentをまとめたスタイルガイド ”Storybook(for
        Vue)”を実装した。
      </p>
      <img src={ComponentSetImg2} />
      <img src={ComponentSetImg3} />
    </section>
  );
};

export default ComponentSet;
