"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import styles from "../styles/navbar.module.css"


export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false)
  const [onHero, setOnHero] = useState(true)
  const menuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  useEffect(() => {
  const handleKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") setOpen(false)
  }

  document.addEventListener("keydown", handleKey)
  return () => document.removeEventListener("keydown", handleKey)
}, [])

useEffect(() => {
  const hero = document.getElementById("hero")
  if (!hero) return

  const observer = new IntersectionObserver(
    ([entry]) => {
      setOnHero(entry.isIntersecting)
    },
    {
      threshold: 0.4, // hero must be 40% visible
    }
  )

  observer.observe(hero)

  return () => observer.disconnect()
}, [])



  return (
    // <div className={styles.portfolioGridBg}>
    <nav
  className={`${styles.navbar} ${
    onHero ? styles.heroNav : styles.transparentNav
  }`}
>

      <div className={styles.container}>

        {/* LOGO */}
        <h1 className={styles.logo}>Saga</h1>

        {/* MENU */}
        <div ref={menuRef} style={{ position: "relative" }}>
          <button
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Open Menu"
            className={styles.menuButton}
          >
            <span className={styles.menuLine} />
            <span className={styles.menuLine} />
            <span className={styles.menuLine} />
          </button>

          {open && (
            <div className={styles.dropdown}>
              <ul className={styles.dropdownList}>
                <li className={styles.dropdownItem}>
                  <Link href="/" onClick={() => setOpen(false)}>
                    Home
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/projects" onClick={() => setOpen(false)}>
                    Projects
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/contact" onClick={() => setOpen(false)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

      </div>
    </nav>
    // </div>
  )
}
