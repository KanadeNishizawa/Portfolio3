import React from 'react';
import WorkListContent from '../modules/WorkListContent';
import Pagination from '../modules/Pagination';
import ComponentSetImg1 from '../../assets/img/component-set1.jpg';
import CompositionImg1 from '../../assets/img/composition1.jpg';
import CompositionImg2 from '../../assets/img/composition2.jpg';
import KaseijinImg1 from '../../assets/img/kaseijin1.jpg';
import ScketchImg1 from '../../assets/img/scketch1.jpg';
import SugarApartmentImg1 from '../../assets/img/sugar-apartment-game1.jpg';
import SweetsPlanetImg1 from '../../assets/img/sweets-planet1.jpg';
import TuberculosisImg1 from '../../assets/img/tuberculosis1.jpg';
import TwinParadoxImg1 from '../../assets/img/twin-paradox1.jpg';
import TwinteImg1 from '../../assets/img/twinte1.jpg';
import PasserbyImg1 from '../../assets/img/passerby1.jpg';

const WorkList = () => {
  let webGroup = [
    {
      path: 'component-set',
      img: ComponentSetImg1,
      name: 'Neumorphic Component Set',
    },
    {
      path: 'sugar-apartment',
      img: SugarApartmentImg1,
      name: 'シュガーアパートメント',
    },
    { path: 'passerby', img: PasserbyImg1, name: 'passerby' },
    { path: 'twinte', img: TwinteImg1, name: 'Twin:te Project' },
    // { path: 'herp', img: '.', name: 'HERP Hire & HERP Nurture' },
    { path: 'kaseijin', img: KaseijinImg1, name: 'かせいじんのきたく' },
  ];
  let graphicGroup = [
    {
      path: 'twin-paradox-v',
      img: TwinParadoxImg1,
      name: 'Twin ParadoX V',
    },
    { path: 'sweets-planet', img: SweetsPlanetImg1, name: 'Sweets Planet' },
    {
      path: 'tuberculosis',
      img: TuberculosisImg1,
      name: '結核菌が体内に寄生するまで',
    },
    { path: 'composition1', img: CompositionImg1, name: '色彩構成' },
    { path: 'composition2', img: CompositionImg2, name: '色彩構成' },
    { path: 'drawing', img: ScketchImg1, name: 'デッサン' },
  ];
  return (
    <section className='work-list'>
      <section id='web' className='work-list__wrapper'>
        <h3>Web</h3>
        <div className='work-list__contents'>
          {webGroup.map((web) => (
            <WorkListContent path={web.path} img={web.img} name={web.name} />
          ))}
        </div>
      </section>
      <section id='graphic' className='work-list__wrapper'>
        <h3>Graphic</h3>
        <div className='work-list__contents'>
          {graphicGroup.map((graphic) => (
            <WorkListContent
              path={graphic.path}
              img={graphic.img}
              name={graphic.name}
            />
          ))}
        </div>
      </section>
      <Pagination path='../../' name='Back Home' />
    </section>
  );
};

export default WorkList;
