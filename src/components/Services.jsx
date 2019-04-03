import React from 'react';
import s from './Services.module.css'

const Services = () => {
  return (
    <div className={s.services}>
      <div className={s.container}>
        <h2 className={s.title}>sERVICES</h2>
        <div className={s.service}>
          <div className={s.user}>
            <img src="img/icons/1.png" alt="icons" className={s.image}/>
            <p className={s.text}>User Research</p>
          </div>
          <div className={s.user}>
            <img src="../img/icons/2.png" alt="icons" className={s.image}/>
            <p className={s.text}>IA And Wireframes</p>
          </div>
          <div className={s.user}>
            <img src="img/icons/3.png" alt="icons" className={s.image}/>
            <p className={s.text}>User Testing</p>
          </div>
          <div className={s.user}>
            <img src="img/icons/4.png" alt="icons" className={s.image}/>
            <p className={s.text}>Looks and Feel<br/> Design (UI)</p>
          </div>
          <div className={s.user}>
            <img src="img/icons/5.png" alt="icons" className={s.image}/>
            <p className={s.text}>Delivery</p>
          </div>
          <div className={s.user}>
            <img src="img/icons/6.png" alt="icons" className={s.image}/>
            <p className={s.text}>Integration Support</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services;
