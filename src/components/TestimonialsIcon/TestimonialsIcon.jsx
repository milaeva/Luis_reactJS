import React from 'react'
import s from './TestimonialsIcon.module.css'
import icon1 from '../../img/icons/study.png'
import icon2 from '../.././img/icons/happiness.png'
import icon3 from '../.././img/icons/delivery-complete.png'
import icon4 from '../.././img/icons/cup.png'

const TestimonialsIcon = () => {
  return (
    <div className={s.icons}>
      <div className={s.container}>
        <div className={s.pro}>
          <div className={s.icon}>
            <img src={icon1} alt="img" className={s.image}/>
            <h4 className={s.content}>120</h4>
            <p className={s.text}>Hands to Work</p>
          </div>
          <div className={s.icon}>
            <img src={icon2} alt="img" className={s.image}/>
            <h4 className={s.content}>310</h4>
            <p className={s.text}>Happy Client</p>
          </div>
          <div className={s.icon}>
            <img src={icon3} alt="img" className={s.image}/>
            <h4 className={s.content}>510</h4>
            <p className={s.text}>Finished Project</p>
          </div>
          <div className={s.icon}>
            <img src={icon4} alt="img" className={s.image}/>
            <h4 className={s.content}>720</h4>
            <p className={s.text}>Cups of Coffe</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialsIcon;
