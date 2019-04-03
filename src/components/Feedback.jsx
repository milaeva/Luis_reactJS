import React from 'react';
import s from'./Feedback.module.css'

const Feedback = () => {
  return (
    <div className={s.feedback}>
      <div className={s.container}>
        <h2 className={s.title}>sAY HELLO!</h2>
        <form className={s.form}>
          <div className={s.name1}>
            <div className={s.name}>
              <input type="text" name="name" value="Name" />
            </div>
            <div className={s.name}>
              <input type="email" name="email" value="Email" />
            </div>
          </div>
          <div className={s.message}>
            <textarea name="message">Message</textarea>
          </div>
          <div className={s.btn1}>
            <button className={s.button}>
              <a href="#" className={s.btn}>SEND </a>
              <img src="img/icons/send-button.png" alt="" className={s.image}/>
            </button>
          </div>
        </form>
        <footer className={s.footer}>2019. All Right Reserved</footer>
      </div>
    </div>
  )
}

export default Feedback;
