import React from 'react';
import s from './Portpholio.module.css'
import image1 from '../.././img/1.png'
import image2 from '../.././img/2.png'
import image3 from '../.././img/3.png'
import image4 from '../.././img/4.png'
import image5 from '../.././img/5.png'
import image6 from '../.././img/6_1.png'

const Portpholio = () => {
  return (
    <div className={s.portpholio}>
      <div className={s.container}>
        <h2 className={s.title}>PORTFOLIO</h2>
        <div className={s.image}>
          <div className={s.items}>
            <img src={image1} alt="img"/>
          </div>
          <div className={s.items}>
            <img src={image2} alt="img"/>
          </div>
          <div className={s.items}>
            <img src={image3} alt="img"/>
          </div>
          <div className={s.items}>
            <img src={image4} alt="img"/>
          </div>
          <div className={s.items}>
            <img src={image5} alt="img" />
          </div>
          <div className={s.items}>
            <img src={image6} alt="img"/>
          </div>
        </div>
        <div className={s.button1}>
          <button className={s.btn}>
            <a href="#" className={s.btn1}>LOAD MORE</a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Portpholio;
