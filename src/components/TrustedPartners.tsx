import React from "react";
import "./trustedPartners.css";

import DECATHLON from "../assets/clients/Decathlon.webp";
import DXC from "../assets/clients/DXC.webp";
import EFD from "../assets/clients/EFD.webp";
import HUBNER from "../assets/clients/HUBNER.webp";
import KIADB from "../assets/clients/KIADB.webp";
import KSTEPS from "../assets/clients/KSTEPS.webp";
import MOLEX from "../assets/clients/Molex.webp";
import NEWTRACE from "../assets/clients/Newtrace.webp";
import SUN from "../assets/clients/SUN.webp";
import TESCO from "../assets/clients/Tesco.webp";
import VST from "../assets/clients/VST.webp";

const logos = [
  DECATHLON,
  DXC,
  EFD,
  HUBNER,
  KIADB,
  KSTEPS,
  NEWTRACE,
  SUN,
  TESCO,
  VST,
];


export default function TrustedPartners() {
  // duplicate logos for seamless infinite loop
  const scrollingLogos = [...logos, ...logos];

  return (
    <section style={{ background: "#ffffff", padding: "30px 0" }}>
      <div style={{ maxWidth: 1200, margin: "auto", textAlign: "center" }}>
        <h2
          style={{
            fontSize: "26px",
            fontWeight: 600,
            color: "#0e356b",
            marginBottom: "50px",
          }}
        >
          Clients
        </h2>

        <div className="marquee-wrapper">
          {/* gradient fades */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              height: "100%",
              width: 120,
              background:
                "linear-gradient(to right, white 0%, rgba(255,255,255,0) 100%)",
              zIndex: 2,
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              height: "100%",
              width: 120,
              background:
                "linear-gradient(to left, white 0%, rgba(255,255,255,0) 100%)",
              zIndex: 2,
            }}
          />

          <div className="marquee">
            {scrollingLogos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="partner"
                style={{
                  height: 60,
                  margin: "0 60px",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.filter = "grayscale(0%)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "0.7";
                  e.currentTarget.style.filter = "grayscale(100%)";
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
