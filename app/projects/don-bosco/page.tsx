import styles from "@/styles/project-detail.module.css"
import Link from "next/link"

export default function DonBoscoProject() {
  return (
    <main className={styles.page}>
      
      <Link href="/projects" className={styles.back}>
        ← Back to Projects
      </Link>

      <section className={styles.card}>
        <h1>Don Bosco College Website</h1>

        <span className={styles.meta}>
          Responsive Web Design · UI / Frontend Project
        </span>

        <p>
          A responsive college website interface designed to showcase
          academic departments, campus information, events, and student
          resources. The project focuses on clean layout structure,
          intuitive navigation, and modern UI design principles.
        </p>

        <p>
          Built with a strong emphasis on usability, accessibility,
          and cross-device compatibility to ensure a seamless
          browsing experience across desktops, tablets, and mobile devices.
        </p>

        <div className={styles.preview}>
          Project Preview
        </div>

        <div className={styles.actions}>
          <a href="#" target="_blank">Live Demo</a>
          <a href="#" target="_blank">Source Code</a>
        </div>
      </section>

    </main>
  )
}