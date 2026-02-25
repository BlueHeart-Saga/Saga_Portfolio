"use client"

import styles from "@/styles/puzzle.module.css"

export default function Puzzle() {
  return (
    <div className={styles.container}>
      {[1, 2, 3].map((_, cubeIndex) => (
        <div key={cubeIndex} className={styles.cube}>
          {[-1, 0, 1].map((x) => (
            <div key={x} style={{ "--x": x, "--y": 0 } as React.CSSProperties}>
              {[3, 2, 1].map((i) => (
                <span key={i} style={{ "--i": i } as React.CSSProperties} />
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
