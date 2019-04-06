import React from 'react';
import s from './Skills.module.css'
import skills from '../.././img/skills.png'

const Skills = () => {
  return (
    <div className={s.skills}>
      <div className={s.container}>
        <h2 className={s.title}>My Skills</h2>
        <div className={s.pic}>
          <img className={s.img} src={skills} alt="skills" />
        </div>
      </div>
    </div>
  )
}

export default Skills;
