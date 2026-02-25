import styles from "@/styles/certification-detail.module.css"
import Link from "next/link"

export default function TypewritingCertificate() {
  return (
    <main className={styles.page}>
      <Link href="/certifications" className={styles.back}>
        ← Back to Certifications
      </Link>

      <section className={styles.card}>
        <h1>Typewriting</h1>
        <span className={styles.meta}>Don Bosco College · Thoothukudi</span>

        <p>
          Certified in professional typewriting with speed, accuracy,
          and document formatting.
        </p>

        <div className={styles.preview}>
          Certificate Preview
        </div>
      </section>
    </main>
  )
}