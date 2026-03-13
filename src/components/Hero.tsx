import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';

import JAMMINGGOAT from "../assets/hero/jamminggoat.webp";
import DONBOSCO from "../assets/hero/donbosco.webp";
import AIT from "../assets/hero/ait.webp";
import CARPARKLEH from "../assets/hero/lehParking.webp";
import KNK from "../assets/hero/knk.webp";
import BIOZEN from "../assets/hero/biozen.webp";
import TLD from "../assets/hero/TLD.webp";
import EFD from "../assets/hero/EFD.webp";
import GOVERNMENTSCHOOL from "../assets/hero/governmentschool.webp";


const backgrounds = [
  JAMMINGGOAT, DONBOSCO, AIT, CARPARKLEH,
  KNK, BIOZEN, TLD, EFD, GOVERNMENTSCHOOL
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [sliding, setSliding] = useState(false);
  const [nextIndex, setNextIndex] = useState(1);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const goTo = (newIndex: number, dir: "left" | "right") => {
    if (sliding) return;
    setNextIndex(newIndex);
    setDirection(dir);
    setSliding(true);
    setTimeout(() => {
      setIndex(newIndex);
      setSliding(false);
    }, 700);
  };

  const goNext = () => goTo((index + 1) % backgrounds.length, "right");
  const goPrev = () => goTo((index - 1 + backgrounds.length) % backgrounds.length, "left");

  useEffect(() => {
    const interval = setInterval(goNext, 4000);
    return () => clearInterval(interval);
  }, [index, sliding]);

  const baseStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#ffffff",
  };

  // Current slides out opposite to direction, next slides in from direction
  const currentExit = direction === "right" ? "-100%" : "100%";
  const nextEntry = direction === "right" ? "100%" : "-100%";

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0 }}>
      {/* Current image */}
      <div
        style={{
          ...baseStyle,
          backgroundImage: `url(${backgrounds[index]})`,
          transform: sliding ? `translateX(${currentExit})` : "translateX(0%)",
          transition: sliding ? "transform 0.7s ease-in-out" : "none",
        }}
      />

      {/* Next image */}
      <div
        style={{
          ...baseStyle,
          backgroundImage: `url(${backgrounds[nextIndex]})`,
          transform: sliding ? "translateX(0%)" : `translateX(${nextEntry})`,
          transition: sliding ? "transform 0.7s ease-in-out" : "none",
        }}
      />

      {/* Left Chevron */}
      <button
        onClick={goPrev}
        style={{
          position: "absolute",
          left: "1rem",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          background: "rgba(255,255,255,0.7)",
          border: "none",
          borderRadius: "50%",
          width: "2.5rem",
          height: "2.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          backdropFilter: "blur(4px)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          transition: "background 0.2s",
        }}
        onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.95)")}
        onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.7)")}
      >
        <ChevronLeft size={20} color="#333" />
      </button>

      {/* Right Chevron */}
      <button
        onClick={goNext}
        style={{
          position: "absolute",
          right: "1rem",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          background: "rgba(255,255,255,0.7)",
          border: "none",
          borderRadius: "50%",
          width: "2.5rem",
          height: "2.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          backdropFilter: "blur(4px)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          transition: "background 0.2s",
        }}
        onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.95)")}
        onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.7)")}
      >
        <ChevronRight size={20} color="#333" />
      </button>

      {/* Dot indicators */}
      <div style={{
        position: "absolute",
        bottom: "1rem",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: "0.4rem",
        zIndex: 10,
      }}>
        {backgrounds.map((_, i) => (
          <div
            key={i}
            onClick={() => goTo(i, i > index ? "right" : "left")}
            style={{
              width: i === index ? "1.5rem" : "0.5rem",
              height: "0.5rem",
              borderRadius: "9999px",
              background: i === index ? "#333" : "rgba(0,0,0,0.3)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}