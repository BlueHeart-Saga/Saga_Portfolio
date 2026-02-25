import styles from "../styles/projects.module.css"
import Link from "next/link"


export default function Projects() {
  const projects = [
    {
      name: "Brio",
      desc: "AI Influencer Marketing platform to manage campaigns, creators, and analytics.",
      demo: "#",
      code: "#"
    },
    {
      name: "SignTick",
      desc: "Secure E-Signature platform with recipient tracking, audit logs, and cloud storage.",
      demo: "#",
      code: "#"
    },
    {
      name: "Buymoon",
      desc: "Modern ecommerce application with cart, checkout, and admin dashboard.",
      demo: "#",
      code: "#"
    },
    {
      name: "Don Bosco College",
      desc: "Responsive college website clone with departments, events, and admissions flow.",
      demo: "#",
      code: "#"
    }
  ]

  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.title}>Projects</h2>

      <div className={styles.slider}>
        <div className={styles.track}>
          {[...projects, ...projects].map((project, index) => (
            <div className={styles.card} key={index}>
              
              {/* Icon / Placeholder */}
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5Z" />
              </svg>

              {/* Hover Content */}
              <div className={styles.cardContent}>
                <p className={styles.cardTitle}>
                  {project.name}
                </p>

                <p className={styles.cardDescription}>
                  {project.desc}
                </p>

                <div className={styles.btns}>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.cardButton}
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className={`${styles.cardButton} ${styles.secondary}`}
                  >
                    Source Code
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
       {/* VIEW ALL BUTTON */}
  <div className={styles.viewAllWrapper}>
    <Link href="/projects" className={styles.viewAllBtn}>
      View All Projects →
    </Link>
  </div>
    </section>
  )
}
