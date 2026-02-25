import styles from '../styles/footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Left */}
        <p className={styles.copy}>
          © {new Date().getFullYear()} Saga. All rights reserved.
        </p>

        {/* Right */}
        <div className={styles.links}>
          <a
            href="https://github.com/BlueHeart-Saga"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sagadevan-s-developer/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:sagasri143@gmail.com">
            Email
          </a>
        </div>

      </div>
    </footer>
  )
}
