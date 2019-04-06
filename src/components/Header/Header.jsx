import React from 'react';
import s from './Header.module.css'
import vector from '../.././img/Vector.png'

const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.container}>
        <div className={s.navbar}>
          <div className={s.logo}>
            <img src={vector} alt="" className={s.image}/>
            <strong className={s.title}>Oenrique</strong>
            <span className={s.subtitle}>UX/UI Expert</span>
          </div>
          <div className={s.menu}>
            <a href="#" className={s.top, s.home}>home</a>
            <a href="#" className={s.top}>about</a>
            <a href="#" className={s.top}>service</a>
            <a href="#" className={s.top}>portpholio</a>
            <a href="#" className={s.top}>contact</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
