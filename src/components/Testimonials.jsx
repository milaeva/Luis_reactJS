import React from 'react'
import s from './Testimonials.module.css'

const Testimonials = () =>{
  return (
    <div className={s.container}>
      <div className={s.testimonials}>
        <h2 className={s.title}>TESTIMONIALS</h2>
        <div className={s.sub}>
          <div className={s.slider}>
            <img src="../img/img.png" alt="img" className={s.img}/>
            <div className={s.info}>
              <h4 className={s.subtitle}>Limara tusi</h4>
              <p className={s.post}>CEO, RanDOM COMPANY</p>
              <div className={s.content}>
                <p className={s.review} id="review">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec</p>
              </div>
              <a className={s.btn} href="#review">Read more...</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials;
