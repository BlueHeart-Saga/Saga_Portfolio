import styles from "@/styles/certification-detail.module.css"
import Link from "next/link"

export default function PythonCertificate() {
  return (
    <main className={styles.page}>
      <Link href="/certifications" className={styles.back}>
        ← Back to Certifications
      </Link>

      <section className={styles.card}>
        <h1>Python Backend Basics</h1>
        <span className={styles.meta}>Self Learning · Online</span>

        <p>
          Backend fundamentals with Python, Django, FastAPI,
          REST APIs, and database integration.
        </p>

        <div className={styles.preview}>
          Certificate Preview
        </div>
      </section>
    </main>
  )
}