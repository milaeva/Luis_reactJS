import React from 'react';
import s from './Skills.module.css'

const Skills = () => {
  return (
    <div className={s.skills}>
      <div className={s.container}>
        <h2 className={s.title}>My Skills</h2>
        <div className={s.pic}>
          <img className={s.img} src="../img/skills.png" alt="skills" />
        </div>
      </div>
    </div>
  )
}

export default Skills;
