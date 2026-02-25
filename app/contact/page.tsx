"use client"

import styles from "@/styles/contact-page.module.css"

export default function ContactPage() {
  return (
    <main className={styles.page}>
      
      {/* ===== PROFILE / HEADER ===== */}
      <section className={styles.profileSection}>
        <h1>Contact Me</h1>
        <p>
          Have a project, collaboration, or opportunity?  
          Feel free to reach out.
        </p>
      </section>

      {/* ===== CONTACT GRID ===== */}
      <section className={styles.contactGrid}>

        {/* LEFT INFO */}
        <div className={styles.infoCard}>
          <h2>Profile</h2>

          <div className={styles.profileBlock}>
            <div className={styles.avatar} />
            <div>
              <h3>Saga</h3>
              <span>Frontend / Fullstack Developer</span>
            </div>
          </div>

          <div className={styles.details}>
            <p><strong>Email:</strong> saga@email.com</p>
            <p><strong>Location:</strong> Tamil Nadu, India</p>
            <p><strong>Availability:</strong> Open to work</p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form className={styles.form}>
          <h2>Send Message</h2>

          <input placeholder="Your Name" />
          <input placeholder="Your Email" />
          <textarea placeholder="Your Message" rows={5} />

          <button type="submit">Send Message</button>
        </form>

      </section>

      {/* ===== MAP SECTION ===== */}
      <section className={styles.mapSection}>
        <h2>Location</h2>

        <div className={styles.mapWrapper}>
          <iframe
  src="https://maps.google.com/maps?q=Sayalgudi%20Tamil%20Nadu&t=&z=8&ie=UTF8&iwloc=&output=embed"
  loading="lazy"
/>

        </div>
      </section>

      {/* ===== SOCIALS ===== */}
      <section className={styles.socialSection}>
  <h2>Connect</h2>

  <div className={styles.socialRow}>
    
    {/* GitHub */}
    <a href="https://github.com/BlueHeart-Saga" target="_blank" aria-label="GitHub">
      <svg viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577
        0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754
        -1.09-.744.082-.729.082-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305
        3.492.998.108-.775.418-1.305.76-1.605-2.665-.3-5.467-1.335-5.467-5.93
        0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322
        3.3 1.23A11.52 11.52 0 0112 6.845c1.02.005 2.045.138 3.003.404
        2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84
        1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.435.375.81 1.096.81 2.21
        0 1.595-.015 2.88-.015 3.27 0 .315.21.69.825.57C20.565 21.795 24 17.295
        24 12c0-6.63-5.373-12-12-12z" />
      </svg>
    </a>

    {/* LinkedIn */}
    <a href="https://www.linkedin.com/in/sagadevan-s-developer/" target="_blank" aria-label="LinkedIn">
      <svg viewBox="0 0 24 24">
        <path d="M4.98 3.5C4.98 5 3.86 6.1 2.5 6.1S0 5 0 3.5
        1.12.9 2.5.9s2.48 1.1 2.48 2.6zM.22 8.09H4.7V24H.22V8.09zM8.56 8.09h4.3v2.17h.06
        c.6-1.14 2.07-2.34 4.26-2.34 4.55 0 5.39 3 5.39 6.89V24h-4.5v-7.09
        c0-1.69-.03-3.87-2.36-3.87-2.36 0-2.72 1.85-2.72 3.75V24H8.56V8.09z" />
      </svg>
    </a>

    {/* Twitter / X */}
    <a href="https://twitter.com/" target="_blank" aria-label="Twitter">
      <svg viewBox="0 0 24 24">
        <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724
        9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.38 4.482
        A13.94 13.94 0 011.671 3.149 4.916 4.916 0 003.195 9.723
        4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89
        a4.935 4.935 0 01-2.224.084 4.923 4.923 0 004.6 3.417
        A9.867 9.867 0 010 19.54 13.94 13.94 0 007.548 22
        c9.142 0 14.307-7.721 13.995-14.646A9.936 9.936 0 0024 4.557z" />
      </svg>
    </a>

  </div>
</section>


    </main>
  )
}
