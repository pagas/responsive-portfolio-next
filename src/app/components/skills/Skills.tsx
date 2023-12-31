
import styles from './skills.module.css'
import Header from '../UI/header/Header';
import SubHeader from '../UI/sub-header/SubHeader';
import SectionBg from '../UI/section-bg/SectionBg';
import SectionBorder from '../UI/section-border/SectionBorder';

export default function Skills() {
  return (
    <div className={styles.skills}>
      <SectionBg>My Skills</SectionBg>
      <Header>Professional Skills</Header>
      <SubHeader left="My" right="Skills"></SubHeader>

      <SectionBorder className={styles['section-border']} />
      <div className={styles['skills-cards']}>
        <div className={styles['skills-card']}>
          <div className={styles['skill']}>
            <span>HTML</span>
            <span>95%</span>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, culpa.</p>
          <div className={styles['skills-card-progress']}></div>
        </div>
        <div className={styles['skills-card']}>
          <div className={styles['skill']}>
            <span>CSS</span>
            <span>90%</span>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, culpa.</p>
          <div className={styles['skills-card-progress']}></div>
        </div>
        <div className={styles['skills-card']}>
          <div className={styles['skill']}>
            <span>JavaScript</span>
            <span>85%</span>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, culpa.</p>
          <div className={styles['skills-card-progress']}></div>
        </div>
        <div className={styles['skills-card']}>
          <div className={styles['skill']}>
            <span>React.js</span>
            <span>75%</span>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, culpa.</p>
          <div className={styles['skills-card-progress']}></div>
        </div>
        <div className={styles['skills-card']}>
          <div className={styles['skill']}>
            <span>Node.js</span>
            <span>85%</span>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, culpa.</p>
          <div className={styles['skills-card-progress']}></div>
        </div>
        <div className={styles['skills-card']}>
          <div className={styles['skill']}>
            <span>Vue.js</span>
            <span>75%</span>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, culpa.</p>
          <div className={styles['skills-card-progress']}></div>
        </div>
      </div>
    </div>
  )
}
