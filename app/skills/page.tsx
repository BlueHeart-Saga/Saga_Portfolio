import styles from "@/styles/skills-page.module.css"

const skillGroups = [
  {
    title: "Frontend Development",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Responsive Design",
      "Modern UI Layouts"
    ]
  },
  {
    title: "Backend Development",
    skills: [
      "Python",
      "Django",
      "FastAPI",
      "REST API Design",
      "Database Integration"
    ]
  },
  {
    title: "UI / UX & Design",
    skills: [
      "Figma",
      "Canva",
      "Wireframing",
      "User Interface Design",
      "Design Systems",
      "User-Centered Design"
    ]
  },
  {
    title: "Cloud & Deployment",
    skills: [
      "Docker",
      "GitHub",
      "CI / CD",
      "Azure",
      "Cloud Deployment",
      "Application Migration",
      "Environment Configuration"
    ]
  }
]

export default function SkillsPage() {
  return (
    <main className={styles.page}>
      
      <header className={styles.header}>
        <h1>Technical Skills</h1>
        <p>Technologies, tools, and workflows I work with.</p>
      </header>

      <div className={styles.grid}>
        {skillGroups.map(group => (
          <section key={group.title} className={styles.card}>
            <h2>{group.title}</h2>

            <div className={styles.skills}>
              {group.skills.map(skill => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </section>
        ))}
      </div>

    </main>
  )
}