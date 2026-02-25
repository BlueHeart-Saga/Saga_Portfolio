"use client"

import styles from "../styles/earth.module.css"
import { CSSProperties } from "react"

export default function Earth() {
  return (
    <section className={styles.earthSection}>
      <div className={styles.sectionBanner}>

        {[1, 2, 3, 4, 5, 6, 7].map((n) => (
          <div
            key={n}
            className={styles.star}
            style={{ "--i": n } as CSSProperties}
          >
            <div className={styles.curvedCornerStar}>
              <div className={styles.bottomRight}></div>
              <div className={styles.bottomLeft}></div>
            </div>

            <div className={styles.curvedCornerStar}>
              <div className={styles.topRight}></div>
              <div className={styles.topLeft}></div>
            </div>
          </div>
        ))}

      </div>
    </section>
  )
}
