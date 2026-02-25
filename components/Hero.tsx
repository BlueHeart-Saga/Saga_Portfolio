import styles from '../styles/hero.module.css'
import RightSidebar from "./RightSidebar"

export default function Hero() {
  return (
    <>
    <section id="hero"  className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.grid}>

          {/* LEFT CONTENT */}
          <div className={styles.left}>
            <h1 className={styles.title}>
              I’m{' '}
              <span className={styles.nameWrapper}>
                <span className={styles.name}>Saga</span>
                <span className={styles.nameHighlight}></span>
              </span>
            </h1>

           <div className={styles.card}>
  <div className={styles.loader}>
    <p>And I’m a</p>
    <div className={styles.words}>
      <span className={styles.word}>Frontend Engineer</span>
      <span className={styles.word}>React & Angular Developer</span>
      <span className={styles.word}>UI/UX Focused Web Developer</span>
      <span className={styles.word}>Modern Web App Builder</span>
      <span className={styles.word}>Scalable Product Engineer</span>
    </div>
  </div>
</div>


            <div className={styles.buttons}>
              <a href="#projects" className={styles.primaryBtn}>
                View Projects
              </a>
              <a href="/resume.pdf" className={styles.secondaryBtn}>
                Resume
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className={styles.right}>
            <div className={styles.imageWrapper}>
              <img
                src="/profile.png"
                alt="Saga"
                className={styles.profileImage}
              />
              <div className={styles.glow}></div>
            </div>
          </div>

        </div>
      </div>
      <RightSidebar />
    </section>

    

    </>
  )
}
