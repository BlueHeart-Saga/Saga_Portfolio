import Link from "next/link"
import styles from "../styles/skills.module.css"

const skillCards = [
  {
    title: "Frontend",
    image: "/skills/frontend.png",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Responsive Design"
    ]
  },
  {
    title: "Backend",
    image: "/skills/backend.png",
    skills: [
      "Python",
      "Express js",
      "Django",
      "FastAPI",
      "REST APIs"
    ]
  },
  {
    title: "UI / UX",
    image: "/skills/uiux.png",
    skills: [
      "Figma",
      "Canva",
      "Wireframing",
      "User Interface Design",
      "Design Systems"
    ]
  },
  {
    title: "Cloud & Deployment",
    image: "/skills/cloud.png",
    skills: [
      "Docker",
      "GitHub",
      "CI / CD",
      "Azure",
      "Cloud Deployment",
      "Migration"
    ]
  }
]

export default function Skills() {
  return (
    <section className={styles.section}>
      
      {/* Updated Heading */}
      <h2 className={styles.heading}>Technical Skills</h2>

      <div className={styles.grid}>
        {skillCards.map((card) => (
          <div key={card.title} className={styles.card}>
            
            <div className={styles.imageWrapper}>
              <img src={card.image} alt={card.title} />
            </div>

            <div className={styles.content}>
              <h3>{card.title}</h3>
              <div className={styles.skills}>
                {card.skills.map(skill => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* CTA BUTTON */}
      <div className={styles.viewAllWrapper}>
        <Link href="/skills" className={styles.viewAllBtn}>
          View All Skills →
        </Link>
      </div>

    </section>
  )
}
