import React from 'react';
import s from './Services.module.css'
import icon1 from '../.././img/icons/1.png'
import icon2 from '../.././img/icons/2.png'
import icon3 from '../.././img/icons/3.png'
import icon4 from '../.././img/icons/4.png'
import icon5 from '../.././img/icons/5.png'
import icon6 from '../.././img/icons/6.png'

const Services = () => {
  return (
    <div className={s.services}>
      <div className={s.container}>
        <h2 className={s.title}>sERVICES</h2>
        <div className={s.service}>
          <div className={s.user}>
            <img src={icon1} alt="icons" className={s.image}/>
            <p className={s.text}>User Research</p>
          </div>
          <div className={s.user}>
            <img src={icon2} alt="icons" className={s.image}/>
            <p className={s.text}>IA And Wireframes</p>
          </div>
          <div className={s.user}>
            <img src={icon3} alt="icons" className={s.image}/>
            <p className={s.text}>User Testing</p>
          </div>
          <div className={s.user}>
            <img src={icon4} alt="icons" className={s.image}/>
            <p className={s.text}>Looks and Feel<br/> Design (UI)</p>
          </div>
          <div className={s.user}>
            <img src={icon5} alt="icons" className={s.image}/>
            <p className={s.text}>Delivery</p>
          </div>
          <div className={s.user}>
            <img src={icon6} alt="icons" className={s.image}/>
            <p className={s.text}>Integration Support</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services;
