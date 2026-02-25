import styles from "@/styles/project-detail.module.css"
import Link from "next/link"

export default function BrioProject() {
  return (
    <main className={styles.page}>
      <Link href="/projects" className={styles.back}>
        ← Back to Projects
      </Link>

      <section className={styles.card}>
        <h1>Brio</h1>
        <span className={styles.meta}>AI Influencer Marketing Platform</span>

        <p>
          Brio is an AI-driven influencer marketing platform built to manage
          creators, campaigns, analytics, and performance insights.
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