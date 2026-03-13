import React from "react";

const Careers = () => {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <p style={styles.eyebrow}>CAREERS</p>

        <h1 style={styles.title}>
          Join Our Team of <span style={styles.highlight}>Design Thinkers</span>
        </h1>

        <p style={styles.subtitle}>
          We are looking for passionate professionals who believe in thoughtful
          architecture and collaborative creation.
        </p>

        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h2 style={styles.roleTitle}>Junior Architect</h2>
            <span style={styles.badge}>Full-time</span>
          </div>

          <div style={styles.divider} />

          <div style={styles.grid}>
            <div>
              <h3 style={styles.sectionTitle}>Role Description</h3>
              <p style={styles.text}>
                This is a full-time role for a Junior Architect at nu associates,
                located in Bengaluru. The Junior Architect will be responsible for
                architectural design, design development & detailing, site
                co-ordination, and project management tasks as part of their
                day-to-day responsibilities.
              </p>
            </div>

            <div>
              <h3 style={styles.sectionTitle}>Qualifications</h3>
              <ul style={styles.list}>
                <li>Architecture and Architectural Design skills</li>
                <li>Design development & detailing expertise</li>
                <li>Experience in the field of architecture and design</li>
                <li>Strong problem-solving and analytical skills</li>
                <li>Excellent communication and collaboration abilities</li>
                <li>Bachelor's degree in Architecture</li>
              </ul>
            </div>
          </div>

          <div style={styles.buttonWrapper}>
            <button style={styles.button}>
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    background: "#FFFFFF",
    padding: "120px 20px",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    maxWidth: "1100px",
    width: "100%",
    textAlign: "center",
    color: "#10104c",
  },
  eyebrow: {
    letterSpacing: "3px",
    fontSize: "12px",
    opacity: 0.7,
    marginBottom: "20px",
  },
  title: {
    fontSize: "48px",
    fontWeight: 500,
    marginBottom: "20px",
  },
  highlight: {
    fontStyle: "italic",
    opacity: 0.85,
  },
  subtitle: {
    maxWidth: "600px",
    margin: "0 auto 60px",
    opacity: 0.8,
    lineHeight: 1.6,
  },
  card: {
    background: "#ffffff",
    border: "1px solid rgba(6, 4, 74, 0.15)",
    borderRadius: "14px",
    padding: "50px",
    textAlign: "left",
    backdropFilter: "blur(8px)",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  roleTitle: {
    fontSize: "28px",
    fontWeight: 500,
    margin: 0,
  },
  badge: {
    background: "rgba(255,255,255,0.1)",
    padding: "6px 14px",
    borderRadius: "20px",
    fontSize: "12px",
    letterSpacing: "1px",
  },
  divider: {
    height: "1px",
    background: "rgba(255,255,255,0.15)",
    margin: "30px 0",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "50px",
  },
  sectionTitle: {
    fontSize: "16px",
    letterSpacing: "1px",
    marginBottom: "15px",
    opacity: 0.8,
  },
  text: {
    lineHeight: 1.7,
    opacity: 0.85,
  },
  list: {
    paddingLeft: "18px",
    lineHeight: 1.8,
    opacity: 0.85,
  },
  buttonWrapper: {
    textAlign: "center",
    marginTop: "50px",
  },
  button: {
    background: "#14233d",
    color: "#FFFFFF",
    padding: "14px 40px",
    borderRadius: "30px",
    border: "none",
    fontSize: "14px",
    letterSpacing: "1px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
};

export default Careers;