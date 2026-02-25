import Link from "next/link"
import styles from "@/styles/projects-page.module.css"


const projects = [
  {
    title: "SafeTick",
    slug: "safetick",
    desc: "Secure e-signature platform with multi-signer workflows and audit logs.",
  },
  {
    title: "QuickBox",
    slug: "quickbox",
    desc: "Document sharing & signing system with real-time tracking.",
  },
  {
    title: "Brio",
    slug: "brio",
    desc: "AI influencer marketing platform to manage creators and campaigns.",
  },
  {
    title: "Buymoon",
    slug: "buymoon",
    desc: "Modern ecommerce app with cart, checkout, and admin dashboard.",
  },
]

export default function AllProjects() {
  return (
        <section className={styles.section}>
      <h1 className={styles.heading}>All Projects</h1>

      <div className={styles.grid}>
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className={styles.card}
          >
            {/* Top macOS bar */}
            <div className={styles.tools}>
              <div className={styles.circle}>
                <span className={`${styles.box} ${styles.red}`} />
              </div>
              <div className={styles.circle}>
                <span className={`${styles.box} ${styles.yellow}`} />
              </div>
              <div className={styles.circle}>
                <span className={`${styles.box} ${styles.green}`} />
              </div>
            </div>

            {/* Content */}
            <div className={styles.cardContent}>
              <h2 className={styles.title}>{project.title}</h2>
              <p className={styles.desc}>{project.desc}</p>
              <span className={styles.view}>View Project →</span>
            </div>
          </Link>
        ))}
      </div>
      
    </section>

   
  )
}
