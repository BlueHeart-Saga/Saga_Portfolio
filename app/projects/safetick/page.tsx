import styles from "@/styles/project-detail.module.css"
import Link from "next/link"

export default function SafeTickProject() {
  return (
    <main className={styles.page}>
      <Link href="/projects" className={styles.back}>
        ← Back to Projects
      </Link>

      <section className={styles.card}>
        <h1>SafeTick</h1>
        <span className={styles.meta}>E-Signature Platform</span>

        <p>
          SafeTick is a secure electronic signature platform designed to
          manage digital document workflows, multi-signer approvals,
          and audit-ready verification processes.
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