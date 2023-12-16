
import styles from './projects.module.css';
import sharedStyles from '../../styles/shared.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Projects() {
  return (
    <section className={styles.projects}>
      <h1 className={sharedStyles['section-bg-heading']}>
        My Projects
      </h1>
      <h1 className={styles['section-heading']}>
        Portfolio
      </h1>
      <h3 className={styles['sub-heading']}>My <span>Projects</span></h3>
      <div className={styles['projects-cards']}>
        <div className={styles['project-card']}>
          <div className={styles['project-img']}>
            <Image src="/images/project1.png" alt="Project1" width={1920} height={1080} />
          </div>
          <div className={styles['techs']}>
            <span>HTML, </span>
            <span>CSS, </span>
            <span>JavaScript, </span>
          </div>
          <h3 className={styles['project-name']}>
            Contact Form
          </h3>
          <p className={styles['project-description']}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci obcaecati nemo nulla sint nisi asperiores.
          </p>
          <button type="button" className={styles['project-btn']}>See Project
            <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
          </button>
        </div>
        <div className={styles['project-card']}>
          <div className={styles['project-img']}>
            <Image src="/images/project2.png" alt="Project1" width={1920} height={1080} />
          </div>
          <div className={styles['techs']}>
            <span>HTML, </span>
            <span>CSS, </span>
            <span>JavaScript, </span>
          </div>
          <h3 className={styles['project-name']}>
            Calculator
          </h3>
          <p className={styles['project-description']}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci obcaecati nemo nulla sint nisi asperiores.
          </p>
          <button type="button" className={styles['project-btn']}>See Project
            <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
          </button>
        </div>
        <div className={styles['project-card']}>
          <div className={styles['project-img']}>
            <Image src="/images/project3.png" alt="Project1" width={1920} height={1080} />
          </div>
          <div className={styles['techs']}>
            <span>HTML, </span>
            <span>CSS, </span>
            <span>JavaScript, </span>
          </div>
          <h3 className={styles['project-name']}>
            Website
          </h3>
          <p className={styles['project-description']}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci obcaecati nemo nulla sint nisi asperiores.
          </p>
          <button type="button" className={styles['project-btn']}>See Project
            <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
          </button>
        </div>
        <div className={styles['project-card']}>
          <div className={styles['project-img']}>
            <Image src="/images/project4.png" alt="Project1" width={1920} height={1080} />
          </div>
          <div className={styles['techs']}>
            <span>HTML, </span>
            <span>CSS, </span>
            <span>JavaScript, </span>
          </div>
          <h3 className={styles['project-name']}>
            Menu
          </h3>
          <p className={styles['project-description']}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci obcaecati nemo nulla sint nisi asperiores.
          </p>
          <button type="button" className={styles['project-btn']}>See Project
            <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
          </button>
        </div>
        <div className={styles['project-card']}>
          <div className={styles['project-img']}>
            <Image src="/images/project5.png" alt="Project1" width={1920} height={1080} />
          </div>
          <div className={styles['techs']}>
            <span>HTML, </span>
            <span>CSS, </span>
            <span>JavaScript, </span>
          </div>
          <h3 className={styles['project-name']}>
            Contact Form
          </h3>
          <p className={styles['project-description']}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci obcaecati nemo nulla sint nisi asperiores.
          </p>
          <button type="button" className={styles['project-btn']}>See Project
            <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
          </button>
        </div>
        <div className={styles['project-card']}>
          <div className={styles['project-img']}>
            <Image src="/images/project6.png" alt="Project1" width={1920} height={1080} />
          </div>
          <div className={styles['techs']}>
            <span>HTML, </span>
            <span>CSS, </span>
            <span>JavaScript, </span>
          </div>
          <h3 className={styles['project-name']}>
            Profile Card
          </h3>
          <p className={styles['project-description']}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci obcaecati nemo nulla sint nisi asperiores.
          </p>
          <button type="button" className={styles['project-btn']}>See Project
            <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
          </button>
        </div>
        <button className={`${sharedStyles.btn} ${styles.btn}`}>View More</button>
      </div>

      <div className={`${sharedStyles['section-border']} ${styles['section-border']}`}></div>
    </section>
  )
}