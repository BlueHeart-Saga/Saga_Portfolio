import styles from "../styles/certifications.module.css"
import Link from "next/link"

export default function Certifications() {

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

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Certifications</h2>

      <div className={styles.slider}>
        <div className={styles.track}>
          {[...certifications, ...certifications].map((cert, i) => (
            <div key={i} className={styles.parent}>
              <div className={styles.card}>

                <div className={styles.logo}>
                  <span className={`${styles.circle} ${styles.circle1}`} />
                  <span className={`${styles.circle} ${styles.circle2}`} />
                  <span className={`${styles.circle} ${styles.circle3}`} />
                  <span className={`${styles.circle} ${styles.circle4}`} />
                  <span className={`${styles.circle} ${styles.circle5}`} />
                </div>

                <div className={styles.glass} />

                <div className={styles.content}>
                  <span className={styles.title}>{cert.title}</span>
                  <span className={styles.text}>
                    {cert.org} · {cert.location}
                  </span>
                  <p className={styles.desc}>{cert.desc}</p>
                </div>

                <div className={styles.bottom}>
                  <span className={styles.badge}>Certified</span>
                  <Link href={cert.route} className={styles.viewBtn}>
                    View
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* VIEW ALL BUTTON */}
      <div className={styles.viewAllWrapper}>
        <Link href="/certifications" className={styles.viewAllBtn}>
          View All Certificates →
        </Link>
      </div>

    </section>
  )
}
