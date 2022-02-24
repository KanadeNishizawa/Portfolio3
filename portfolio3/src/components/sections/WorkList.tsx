import React from 'react';
import WorkListContent from '../modules/WorkListContent';
import Pagination from '../modules/Pagination';
import '../../App.css';

// type Props = {
//   link: string;
//   name: string;
//   linkStyle: string;
// };

const WorkList = () => {
  let webGroup = [
    { path: 'component-set', img: '.', name: 'Neumorphic Component Set' },
    { path: 'sugar-apartment', img: '.', name: 'シュガーアパートメント' },
    { path: 'passerby', img: '.', name: 'passerby' },
    { path: 'twinte', img: '.', name: 'Twin:te Project' },
    { path: 'herp', img: '.', name: 'HERP Hire & HERP Nurture' },
    { path: 'kaseijin', img: '.', name: 'かせいじんのきたく' },
  ];
  let graphicGroup = [
    { path: 'twin-paradox-v', img: '.', name: 'Twin ParadoX V' },
    { path: 'sweets-planet', img: '.', name: 'Sweets Planet' },
    { path: 'tuberculosis', img: '.', name: '結核菌が体内に寄生するまで' },
    { path: 'composition1', img: '.', name: '色彩構成' },
    { path: 'composition2', img: '.', name: '色彩構成' },
    { path: 'drawing', img: '.', name: 'デッサン' },
  ];
  return (
    <section>
      <section id='web'>
        <h3>Web</h3>
        {webGroup.map((web) => (
          <WorkListContent path={web.path} img={web.img} name={web.name} />
        ))}
      </section>
      <section id='graphic'>
        <h3>Graphic</h3>
        {graphicGroup.map((graphic) => (
          <WorkListContent
            path={graphic.path}
            img={graphic.img}
            name={graphic.name}
          />
        ))}
      </section>
      <Pagination path='../../' name='Back Home' />
    </section>
  );
};

export default WorkList;
