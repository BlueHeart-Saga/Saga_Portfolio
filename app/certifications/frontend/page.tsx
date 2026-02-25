import styles from "@/styles/certification-detail.module.css"
import Link from "next/link"

export default function FrontendCertificate() {
  return (
    <main className={styles.page}>
      
      <Link href="/certifications" className={styles.back}>
        ← Back to Certifications
      </Link>

      <section className={styles.card}>
        <h1>Frontend Developer</h1>

        <span className={styles.meta}>
          Corpfields · Nagercoil
        </span>

        <p>
          Completed frontend development training covering HTML, CSS,
          JavaScript, React, and real-world UI projects.
        </p>

        <div className={styles.preview}>
          Certificate Preview
        </div>
      </section>

    </main>
  )
}