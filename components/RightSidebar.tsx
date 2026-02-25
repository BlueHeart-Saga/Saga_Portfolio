import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaGlobe
} from "react-icons/fa"

import styles from "../styles/rightSidebar.module.css"

export default function RightSidebar() {
  return (
    <div className={styles.sidebar}>

      {/* Website */}
      <a
        href="https://yourwebsite.com"
        target="_blank"
        rel="noreferrer"
        aria-label="Website"
      >
        <FaGlobe />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/BlueHeart-Saga"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/sagadevan-s-developer/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedinIn />
      </a>

      {/* Twitter / X */}
      <a
        href="https://x.com/BlueheartS51444"
        target="_blank"
        rel="noreferrer"
        aria-label="Twitter"
      >
        <FaTwitter />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/blueheart_saga___143"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/91763919119"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>

      {/* Email */}
      <a
        href="mailto:sagasri143@email.com"
        aria-label="Email"
      >
        <FaEnvelope />
      </a>

      <span className={styles.line}></span>
    </div>
  )
}
