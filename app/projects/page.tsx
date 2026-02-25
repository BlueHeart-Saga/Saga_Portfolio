import AllProjects from "@/components/AllProjects"
import Puzzle from "@/components/Puzzle"
import styles from "@/styles/projects-page.module.css"

export default function ProjectsPage() {
  return (
    <>
      <AllProjects />

      {/* Separate Puzzle Section */}
      <section className={styles.puzzleSection}>
        <Puzzle />
      </section>
    </>
  )
}
