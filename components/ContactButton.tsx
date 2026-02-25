import Link from "next/link"
import styles from "@/styles/contact-button.module.css"

export default function ContactButton() {
  return (
    <Link href="/contact" className={styles.button}>
      
      <div className={styles.overlay}>
        <div className={styles.fill} />

        <div className={styles.iconCircle}>
          <div className={styles.icon}>
            <svg viewBox="0 0 16 16">
              <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" />
            </svg>
          </div>
        </div>
      </div>

      <div className={styles.label}>
        Contact Us
      </div>
    </Link>
  )
}
