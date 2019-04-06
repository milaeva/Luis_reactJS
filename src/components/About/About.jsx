import React from 'react';
import s from './About.module.css'
import bg from '../.././img/img_bg.png'


const About = () => {
  return (
    <div className={s.container}>
      <div className={s.about} id="about">
        <div className={s.text}>
          <h2 className={s.title}>KNOW MORE <br/>  ABOUT ME</h2>
          <p className={s.subtitle}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibuset magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequatmassa quis enim.</p>
          <button className={s.button}>
            <a href="#" className={s.btn}>DOWNLOAD MY CV</a>
          </button>
        </div>
        <div className={s.image}>
          <img src={bg} alt="bg" className={s.img}/>
        </div>
      </div>
    </div>
  )
}

export default About;
