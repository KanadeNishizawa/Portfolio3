import React from 'react';
import Heading2 from '../modules/Heading2';
import WorksCategory from '../modules/WorksCategory';
import WorksPreviewWebImg from '../../assets/img/works-preview-web.png';
import WorksPreviewGraphicImg from '../../assets/img/works-preview-graphic.png';

// type Props = {
//   link: string;
//   name: string;
//   linkStyle: string;
// };

const Works = () => {
  return (
    <section>
      <Heading2 heading2='Works' />
      <WorksCategory path='works' img={WorksPreviewWebImg} name='Web' />
      <WorksCategory
        path='works#graphic'
        img={WorksPreviewGraphicImg}
        name='Graphic'
      />
    </section>
  );
};

export default Works;
