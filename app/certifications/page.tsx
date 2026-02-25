import Link from "next/link"
import styles from "@/styles/certifications-page.module.css"

const certifications = [
  {
    title: "Frontend Developer",
    org: "Corpfields",
    location: "Nagercoil",
    route: "/certifications/frontend",
    desc: "Completed frontend development training covering HTML, CSS, JavaScript, React, and real-world UI projects."
  },
  {
    title: "Mobile OS & Data Recovery",
    org: "MobileInfo Tech",
    location: "Thoothukudi",
    route: "/certifications/mobile-os",
    desc: "Hands-on training in mobile operating systems, debugging, flashing, and data recovery techniques."
  },
  {
    title: "Typewriting",
    org: "Don Bosco College",
    location: "Thoothukudi",
    route: "/certifications/typewriting",
    desc: "Certified in professional typewriting with speed, accuracy, and document formatting."
  },
  {
    title: "UI / UX Design",
    org: "Online Certification",
    location: "Remote",
    route: "/certifications/ui-ux",
    desc: "UI/UX fundamentals including wireframing, Figma, Canva, and user-centered design principles."
  },
  {
    title: "Python Backend Basics",
    org: "Self Learning",
    location: "Online",
    route: "/certifications/python",
    desc: "Backend fundamentals with Python, Django, FastAPI, REST APIs, and database integration."
  }
]

export default function CertificationsPage() {
  return (
    <main className={styles.page}>
      
      <header className={styles.header}>
        <h1>Certifications</h1>
        <p>Professional training, technical learning, and verified skills.</p>
      </header>

      <div className={styles.grid}>
        {certifications.map(cert => (
          <div key={cert.title} className={styles.card}>
            
            <div>
              <h2>{cert.title}</h2>

              <span className={styles.meta}>
                {cert.org} · {cert.location}
              </span>

              <p>{cert.desc}</p>
            </div>

            <div className={styles.footer}>
              <span className={styles.badge}>Certified</span>

              <Link href={cert.route} className={styles.viewBtn}>
                View Certificate →
              </Link>
            </div>

          </div>
        ))}
      </div>

    </main>
  )
}