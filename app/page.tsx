"use client"

import styles from "@/styles/background.module.css"

import Hero from "../components/Hero"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Earth from "../components/Earth"
import Certifications from "../components/Certifications"
import ContactButton from "@/components/ContactButton"

export default function Home() {
  return (
    <>
      {/* HERO WITH AUTO-SCROLL GRID */}
      <div className={styles.portfolioGridBg}>
        <div style={{ position: "relative", zIndex: 2 }}>
          <Hero />
        </div>
      </div>

      {/* OTHER SECTIONS */}
      <Skills />
      <Projects />
      <Earth />
      <Certifications />

      <div className={styles.centerWrapper}>
  <ContactButton />
</div>
    </>
  )
}
