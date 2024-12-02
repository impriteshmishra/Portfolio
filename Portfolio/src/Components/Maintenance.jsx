import React from "react";

const MaintenancePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Thank You for visiting.</h1>
      <p style={styles.message}>
      Currently, I'm improving my portfolio website and will be back shortly!
      </p>
      <p style={styles.contact}>
        For inquiries, email me at{" "}
        <a href="mailto:your-email@example.com" style={styles.link}>
          priteshmishra2125@gmail.com
        </a>
      </p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    // padding: "50px",
    fontFamily: "'Arial', sans-serif",
    backgroundColor: "#f3f4f6",
    color: "#333",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: "2.5rem",
    color: "Blue",
  },
  message: {
    fontSize: "1.2rem",
  },
  contact: {
    marginTop: "20px",
    fontSize: "1rem",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
  },
};

export default MaintenancePage;
