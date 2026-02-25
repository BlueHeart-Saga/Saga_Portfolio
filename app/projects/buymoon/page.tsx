import styles from "@/styles/project-detail.module.css"
import Link from "next/link"

export default function BuymoonProject() {
  return (
    <main className={styles.page}>
      <Link href="/projects" className={styles.back}>
        ← Back to Projects
      </Link>

      <section className={styles.card}>
        <h1>Buymoon</h1>
        <span className={styles.meta}>Ecommerce Application</span>

        <p>
          Buymoon is a modern ecommerce application featuring product browsing,
          cart management, checkout workflows, and admin controls.
        </p>

        <div className={styles.preview}>Project Preview</div>

        <div className={styles.actions}>
          <a href="#" target="_blank">Live Demo</a>
          <a href="#" target="_blank">Source Code</a>
        </div>
      </section>
    </main>
  )
}