import styles from "@/styles/project-detail.module.css"
import Link from "next/link"

export default function QuickBoxProject() {
  return (
    <main className={styles.page}>
      <Link href="/projects" className={styles.back}>
        ← Back to Projects
      </Link>

      <section className={styles.card}>
        <h1>QuickBox</h1>
        <span className={styles.meta}>Document Sharing System</span>

        <p>
          QuickBox enables secure document distribution, recipient tracking,
          and streamlined signing workflows with real-time status updates.
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