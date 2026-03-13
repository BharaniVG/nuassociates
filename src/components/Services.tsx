import { useEffect, useRef, useState } from "react";
import { ReactNode } from "react";
import { departments } from "./teamData";

const leaders = [
  { name: "Naveen Bhat",   role: "Principal Architect", initials: "NB" , dept: ""},
  { name: "Ajay Appachu",  role: "Studio Head",  initials: "AS", dept: "" },
];

const services = [
  {
    num: "01",
    label: "Architectural Design",
    desc: "Our team translates your vision into functional, aesthetic realities. We balance spatial efficiency, site context, and local regulations to create inspired structures that stand the test of time.",
    svg: (
      <svg viewBox="0 0 56 56" fill="none" width="48" height="48">
        <polygon points="28,7 47,20 47,49 9,49 9,20" stroke="currentColor" strokeWidth="1.6" fill="none"/>
        <rect x="21" y="33" width="14" height="16" stroke="currentColor" strokeWidth="1.3" fill="none"/>
        <polyline points="14,20 28,12 42,20" stroke="currentColor" strokeWidth="1.3"/>
      </svg>
    ),
  },
  {
    num: "02",
    label: "Services Design (Structural & MEP)",
    desc: "Our internal services design team designs and coordinates all the services of your building. By integrating structural integrity with efficient mechanical, electrical, and plumbing systems, we ensure your space is safe and design delivery is seamless.",
    svg: (
      <svg viewBox="0 0 56 56" fill="none" width="48" height="48">
        <circle cx="28" cy="28" r="18" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M20 28 h4 l3-6 4 12 3-6 4 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: "03",
    label: "Project Management",
    desc: "Our PMC team acts as your representative on-site to manage timelines, budgets, and contractors, ensuring the final build matches the blueprints exactly while mitigating risks and preventing costly delays.",
    svg: (
      <svg viewBox="0 0 56 56" fill="none" width="48" height="48">
        <rect x="10" y="10" width="36" height="36" rx="2" stroke="currentColor" strokeWidth="1.6"/>
        <line x1="10" y1="20" x2="46" y2="20" stroke="currentColor" strokeWidth="1.3"/>
        <line x1="20" y1="10" x2="20" y2="46" stroke="currentColor" strokeWidth="1.3" strokeDasharray="3 2"/>
        <circle cx="33" cy="33" r="6" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M33 30 v3 l2 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "04",
    label: "Design and Build",
    desc: "We provide a unique experience of architect-led Design and Build services. By handling both design and construction under one roof, we streamline communication, reduce costs, and accelerate the delivery of your project.",
    svg: (
      <svg viewBox="0 0 56 56" fill="none" width="48" height="48">
        <rect x="5" y="10" width="46" height="36" rx="2" stroke="currentColor" strokeWidth="1.6"/>
        <line x1="5" y1="20" x2="51" y2="20" stroke="currentColor" strokeWidth="1.3"/>
        <line x1="20" y1="10" x2="20" y2="46" stroke="currentColor" strokeWidth="1.3"/>
        <circle cx="11" cy="15" r="1.8" fill="currentColor" opacity=".5"/>
        <circle cx="16" cy="15" r="1.8" fill="currentColor" opacity=".5"/>
      </svg>
    ),
  },
  {
    num: "05",
    label: "Interior Design",
    desc: "Our interior design team curates the human experience within the walls. From material selection to lighting and bespoke layouts, we endeavour to ensure the interior environment is both beautiful and highly functional.",
    svg: (
      <svg viewBox="0 0 56 56" fill="none" width="48" height="48">
        <rect x="8" y="14" width="22" height="28" rx="1.5" stroke="currentColor" strokeWidth="1.6"/>
        <line x1="13" y1="21" x2="25" y2="21" stroke="currentColor" strokeWidth="1.3"/>
        <line x1="13" y1="26" x2="25" y2="26" stroke="currentColor" strokeWidth="1.3"/>
        <line x1="13" y1="31" x2="20" y2="31" stroke="currentColor" strokeWidth="1.3"/>
        <rect x="32" y="22" width="16" height="14" rx="1" stroke="currentColor" strokeWidth="1.6"/>
        <line x1="35" y1="27" x2="45" y2="27" stroke="currentColor" strokeWidth="1.3"/>
        <line x1="35" y1="31" x2="45" y2="31" stroke="currentColor" strokeWidth="1.3"/>
      </svg>
    ),
  },
  {
    num: "06",
    label: "Infrastructure & Master Planning",
    desc: "With 15+ years of experience, our design team has the expertise to handle large-scale design of urban areas and developments. We integrate land use, transportation, and utilities to create sustainable, long-term frameworks for community growth and connectivity.",
    svg: (
      <svg viewBox="0 0 56 56" fill="none" width="48" height="48">
        <rect x="4" y="40" width="48" height="5" rx="1" stroke="currentColor" strokeWidth="1.6"/>
        <rect x="9" y="26" width="8" height="14" stroke="currentColor" strokeWidth="1.3"/>
        <rect x="24" y="18" width="8" height="22" stroke="currentColor" strokeWidth="1.3"/>
        <rect x="39" y="30" width="8" height="10" stroke="currentColor" strokeWidth="1.3"/>
        <line x1="4" y1="13" x2="52" y2="13" stroke="currentColor" strokeWidth="1.3" strokeDasharray="4 3"/>
      </svg>
    ),
  },
  {
    num: "07",
    label: "IGBC and LEED Design",
    desc: "As a member of IGBC, and having executed LEED Platinum certified projects, we specialize in frameworks for sustainable building certifications. These certifications ensure your project minimizes environmental impact through energy efficiency, water conservation, waste reduction, and eco-friendly materials.",
    svg: (
      <svg viewBox="0 0 56 56" fill="none" width="48" height="48">
        <path d="M28 8 C18 14 10 22 10 32 C10 42 18 48 28 48 C38 48 46 42 46 32 C46 22 38 14 28 8Z" stroke="currentColor" strokeWidth="1.6" fill="none"/>
        <path d="M28 8 C28 8 28 28 28 48" stroke="currentColor" strokeWidth="1.3" strokeDasharray="3 2"/>
        <path d="M10 32 C18 28 38 28 46 32" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M20 18 C24 20 32 20 36 18" stroke="currentColor" strokeWidth="1.3"/>
      </svg>
    ),
  },
];

const verticals = [
  "Industrial Campus",
  "Educational Institutes",
  "Corporate Interiors",
  "Commercial Buildings",
  "Residential Projects",
  "Hospitality Industry",
  "Others",
];

const certifications = [
  "Empanelled with Karnataka Industrial Area Development Board",
  "Registered with BBMP / Bengaluru Development Authority",
  "Registered with ELCITA",
  "Registered with Fire Department, Bengaluru",
  "Registered with Pollution Control Board",
  "Registered with Airport Authority of India",
  "Registered with Indian Green Building Council",
];

function useInView(): [React.RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );

    if (ref.current) obs.observe(ref.current);

    return () => obs.disconnect();
  }, []);

  return [ref, visible];
}

interface FadeProps {
  children: ReactNode;
  delay?: number;
}

function Fade({ children, delay = 0 }: FadeProps) {
  const [ref, v] = useInView(); // ✅ no null fallback

  return (
    <div
      ref={ref}
      style={{
        opacity: v ? 1 : 0,
        transform: v ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}



export default function Services() {
  return (
    <div style={{ fontFamily: "inherit", background: "#fff", color: "#0f2d52" }}>
      <style>{`
        .sy-wrap * { box-sizing: border-box; margin: 0; padding: 0; }
        .sy-wrap {
          font-family: 'Tahoma', 'Inter', sans-serif;
          color: #0f2d52;
          background: #fff;
        }


        /* ── SERVICES ── */
        .sy-services {
          background: #ffffff;
          padding: 72px 48px;
        }
        .sy-services-inner { max-width: 1100px; margin: 0 auto; }

        .sy-svc-list {
          margin-top: 40px;
          border-top: 1px solid #dce8f5;
        }

        .sy-svc-row {
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 40px;
          align-items: center;
          padding: 24px 0;
          border-bottom: 1px solid #dce8f5;
          transition: background 0.2s ease, padding 0.2s ease, margin 0.2s ease;
        }
        .sy-svc-row:hover {
          background: #e4eef8;
          margin: 0 -24px;
          padding: 24px 24px;
        }

        .sy-svc-row-left {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .sy-svc-icon {
          color: #0f2d52;
          flex-shrink: 0;
          display: flex;
        }

        .sy-svc-num {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 2px;
          color: #6e90b0;
          margin-bottom: 4px;
        }

        .sy-svc-label {
          font-size: 15px;
          font-weight: 600;
          color: #0f2d52;
          line-height: 1.35;
        }

        .sy-svc-row-desc {
          font-size: 13.5px;
          line-height: 1.8;
          color: #4a6080;
          font-weight: 300;
        }

        @media(max-width: 760px) {
          .sy-svc-row { grid-template-columns: 1fr; gap: 12px; }
          .sy-svc-row:hover { margin: 0; }
        }

      `}</style>

      <div className="sy-wrap">

        {/* ══ SERVICES ══ */}
        <section className="sy-services">
          <div className="sy-services-inner">
            <Fade>
              <h2 className="sy-h2">Our Services</h2>
            </Fade>
            <div className="sy-svc-list">
              {services.map((s, i) => (
                <Fade key={s.num} delay={i * 0.06}>
                  <div className="sy-svc-row">
                    <div className="sy-svc-row-left">
                      <div className="sy-svc-icon">{s.svg}</div>
                      <div>
                        <div className="sy-svc-label">{s.label}</div>
                      </div>
                    </div>
                    <div className="sy-svc-row-desc">{s.desc}</div>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}