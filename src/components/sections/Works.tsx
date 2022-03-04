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
    <section className='layout--a'>
      <Heading2 heading2='Works' />
      <div className='works-category-wrap'>
        <WorksCategory
          path='works'
          img={WorksPreviewWebImg}
          name='Web'
          category='web'
        />

        <WorksCategory
          path='works#graphic'
          img={WorksPreviewGraphicImg}
          name='Graphic'
          category='graphic'
        />
      </div>
    </section>
  );
};

export default Works;
