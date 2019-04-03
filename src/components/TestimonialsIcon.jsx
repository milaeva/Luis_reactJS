import React from 'react'
import s from './TestimonialsIcon.module.css'

const TestimonialsIcon = () => {
  return (
    <div className={s.icons}>
      <div className={s.container}>
        <div className={s.pro}>
          <div className={s.icon}>
            <img src="../img/icons/study.png" alt="img" className={s.image}/>
            <h4 className={s.content}>120</h4>
            <p className={s.text}>Hands to Work</p>
          </div>
          <div className={s.icon}>
            <img src="img/icons/happiness.png" alt="img" className={s.image}/>
            <h4 className={s.content}>310</h4>
            <p className={s.text}>Happy Client</p>
          </div>
          <div className={s.icon}>
            <img src="img/icons/delivery-complete.png" alt="img" className={s.image}/>
            <h4 className={s.content}>510</h4>
            <p className={s.text}>Finished Project</p>
          </div>
          <div className={s.icon}>
            <img src="img/icons/cup.png" alt="img" className={s.image}/>
            <h4 className={s.content}>720</h4>
            <p className={s.text}>Cups of Coffe</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialsIcon;
