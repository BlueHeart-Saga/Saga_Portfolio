import styles from "@/styles/certification-detail.module.css"
import Link from "next/link"

export default function UIUXCertificate() {
  return (
    <main className={styles.page}>
      <Link href="/certifications" className={styles.back}>
        ← Back to Certifications
      </Link>

      <section className={styles.card}>
        <h1>UI / UX Design</h1>
        <span className={styles.meta}>Online Certification · Remote</span>

        <p>
          UI/UX fundamentals including wireframing, Figma, Canva,
          and user-centered design principles.
        </p>

        <div className={styles.preview}>
          Certificate Preview
        </div>
      </section>
    </main>
  )
}