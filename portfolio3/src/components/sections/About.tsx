import React from 'react';
import Heading2 from '../modules/Heading2';
import ProfileImg from '../../assets/img/profile.jpg';

const About = () => {
  return (
    <section>
      <Heading2 heading2='About' />
      <img src={ProfileImg} />
      <section>
        <h3>Kanade Nishizawa</h3>
        <p>
          筑波大学芸術専門学群構成専攻総合造形領域所属。 22年度卒業予定。
          <br />
          デザイナーとしてのインターンや学生プロジェクト、受注、個人制作を通して、Webやグラフィック、モーション、イラスト等の作成を行う。
          <br />
          SF映画と将棋とバレルスピナーとナエトルが好き。
        </p>
      </section>
      <section>
        <h4>Experience</h4>
        <p>1998. 千葉県船橋市に生まれる。</p>
        <p>2015. 千葉県立船橋高等学校理数科入学</p>
        <p>2018. 筑波大学芸術専門学群構成専攻入学</p>
        <p>2019. tenkai株式会社にてインターン(~2020.3)</p>
        <p>2020. 株式会社HERPにてインターン(継続中)</p>
        <p>2022. ThinkX株式会社にてインターン(継続中)</p>
      </section>
    </section>
  );
};

export default About;
