
import styles from './skills.module.css'
import sharedStyles from '../../styles/shared.module.css'
import Header from '../UI/header/Header';
import SubHeader from '../UI/sub-header/SubHeader';

export default function Skills() {
  return (
    <div className={styles.skills}>
      <h1 className={sharedStyles['section-bg-heading']}>
        My Skills
      </h1>

      <Header>Professional Skills</Header>
      <SubHeader left="My" right="Skills"></SubHeader>

      <div className={`${sharedStyles['section-border']} ${styles['section-border']}`}></div>
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
