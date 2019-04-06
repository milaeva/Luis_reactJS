import React from 'react';
import s from './Home.module.css'

const Home =() => {
  return (
    <div className={s.homeBgC}>
      <div className={s.container}>
        <div className={s.home} id="home">
          <div className={s.content}>
            <div className={s.content1}>
              <h1 className={s.title}>Luis Oenrique</h1>
              <p className={s.subtitle}>User Experience / User Interface Expert</p>
              <div className={s.button}>
                <button className={s.button0}>
                  <a href="#" className={s.btn}>KNOW MORE</a>
                </button>
                <button className={s.button1}>
                  <a href="#" className={s.btn1}>HIRE ME</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home;
