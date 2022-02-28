import React from 'react';
import Heading2 from '../modules/Heading2';
import ProfileImg from '../../assets/img/profile.jpg';
import GithubImg from '../../assets/img/github.svg';
import MailImg from '../../assets/img/mail.svg';

const About = () => {
  return (
    <section className='layout--a'>
      <Heading2 heading2='About' />
      <div className='about'>
        <img className='about__img' src={ProfileImg} />
        <section className='paragraph-wrapper'>
          <section className='paragraph'>
            <h3>Kanade Nishizawa</h3>
            <p>
              筑波大学芸術専門学群構成専攻総合造形領域所属。
              <br />
              Webやグラフィック、モーション、イラスト等の作成を行っている。
              <br />
              SF映画と将棋とバレルスピナーとナエトルが好き。
            </p>
          </section>
          <section className='paragraph'>
            <h4>Link & Contact</h4>
            <div className='about__svgs'>
              <a href='https://github.com/login?return_to=%2FKanadeNishizawa'>
                <img className='about__svg' src={GithubImg} />
              </a>
              <a href='mailto:n.kanade27@gmail.com'>
                <img className='about__svg--mail' src={MailImg} />
              </a>
            </div>
          </section>
          <section className='paragraph'>
            <h4>Experience</h4>
            <p>1998. 千葉県船橋市に生まれる。</p>
            <p>2015. 千葉県立船橋高等学校理数科入学</p>
            <p>2018. 筑波大学芸術専門学群構成専攻入学</p>
            <p>2019. tenkai株式会社にてインターン(~2020.3)</p>
            <p>2020. 株式会社HERPにてインターン(継続中)</p>
            <p>2022. ThinkX株式会社にてインターン(継続中)</p>
          </section>
        </section>
      </div>
    </section>
  );
};

export default About;
