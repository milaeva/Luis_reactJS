import React from 'react';
import s from './Portpholio.module.css'

const Portpholio = () => {
  return (
    <div className={s.portpholio}>
      <div className={s.container}>
        <h2 className={s.title}>PORTFOLIO</h2>
        <div className={s.image}>
          <div className={s.items}>
            <img src="../img/1.png" alt="img"/>
          </div>
          <div className={s.items}>
            <img src="../img/2.png" alt="img"/>
          </div>
          <div className={s.items}>
            <img src="../img/3.png" alt="img"/>
          </div>
          <div className={s.items}>
            <img src="../img/4.png" alt="img"/>
          </div>
          <div className={s.items}>
            <img src="../img/5.png" alt="img" />
          </div>
          <div className={s.items}>
            <img src="../img/6_1.png" alt="img"/>
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
