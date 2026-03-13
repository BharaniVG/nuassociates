import { CSSProperties } from "react";

type Styles = {
  [key: string]: CSSProperties;
};

export const styles: Styles = {
  wrapper: {
    padding: "100px 40px",
    background: "#f7f8fb"
  },

  leadershipRow: {
    display: "flex",
    justifyContent: "center",
    gap: "120px",
    marginBottom: "80px",
    flexWrap: "wrap"
  },

  personCard: {
    textAlign: "center",
    transition: "0.4s",
    cursor: "pointer"
  },

  avatar: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    marginBottom: "14px"
  },

  name: {
    fontWeight: 600,
    fontSize: "1.1rem",
    color: "#0b2c64"
  },

  role: {
    fontSize: "0.85rem",
    opacity: 0.7
  },

  departmentGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))",
    gap: "50px"
  },

  department: {
    background: "white",
    padding: "25px",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
  },

  departmentTitle: {
    textAlign: "center",
    marginBottom: "18px",
    fontWeight: 600,
    letterSpacing: "0.05em",
    color: "#0b2c64"
  },

  memberGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(110px,1fr))",
    gap: "18px"
  },

  draftingCard: {
    marginTop: "80px",
    textAlign: "center",
    padding: "25px",
    borderRadius: "20px",
    background: "#e9edf5",
    fontSize: "1.2rem",
    fontWeight: 500
  }
};
