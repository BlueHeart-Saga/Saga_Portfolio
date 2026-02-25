import styles from "@/styles/certification-detail.module.css"
import Link from "next/link"

export default function MobileOSCertificate() {
  return (
    <main className={styles.page}>
      
      <Link href="/certifications" className={styles.back}>
        ← Back to Certifications
      </Link>

      <section className={styles.card}>
        <h1>Mobile OS & Data Recovery</h1>

        <span className={styles.meta}>
          MobileInfo Tech · Thoothukudi
        </span>

        <p>
          Hands-on training in mobile operating systems, debugging,
          flashing, firmware handling, device recovery, and data
          restoration techniques across various mobile platforms.
        </p>

        <div className={styles.preview}>
          Certificate Preview
        </div>
      </section>

    </main>
  )
}