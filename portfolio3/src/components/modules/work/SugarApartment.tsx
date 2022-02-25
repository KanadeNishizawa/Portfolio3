import React from 'react';
import WorkItemDetail from '../WorkItemDetail';
import SugarApartmentImg1 from '../../../assets/img/sugar-apartment-game1.jpg';
import SugarApartmentImg2 from '../../../assets/img/sugar-apartment-game2.jpg';
import SugarApartmentImg3 from '../../../assets/img/sugar-apartment-game3.jpg';
import SugarApartmentImg4 from '../../../assets/img/sugar-apartment-game4.jpg';

const SugarApartment = () => {
  return (
    <section>
      <WorkItemDetail
        img={SugarApartmentImg1}
        name='シュガーアパートメント'
        year={2021}
        genre='Adobe Animate, HTML/CSS/CreateJS, ReactJS,
'
      />
      <p>
        筑波大学芸術専門学群と筑波大学附属病院のコラボレーションによる糖尿病予防啓発プログラム、”グルッシーコラボレーションズ”の一環。
        <br />
        HTML Canvas5のノベルゲーム”シュガーアパートメント”を制作した。 <br />
        主にAdobe
        Animateを用いて、プログラム、アニメーションの作成、サウンドの調整など、実装全般を担当した。
        <br />
        また、ランディングページの実装を行った。
      </p>
      <img src={SugarApartmentImg2} />
      <img src={SugarApartmentImg3} />
      <img src={SugarApartmentImg4} />
    </section>
  );
};

export default SugarApartment;
