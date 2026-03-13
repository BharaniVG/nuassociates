import { useEffect, useRef, useState } from "react";
import { ReactNode } from "react";
import { departments } from "./teamData";

import NAVEEN from "../assets/team/Naveen.webp";
import AJAY from "../assets/team/Ajay.webp";
import TEAM from "../assets/team/team.webp";

const leaders = [
  { name: "Naveen Bhat",   role: "Principal Architect", initials: "NB" , dept: "", image: NAVEEN },
  { name: "Ajay Appachu",  role: "Studio Head",  initials: "AS", dept: "" , image: AJAY},
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



export default function AboutUs() {
  return (
    <div style={{ fontFamily: "inherit", background: "#fff", color: "#0f2d52" }}>
      <style>{`
        .sy-wrap * { box-sizing: border-box; margin: 0; padding: 0; }
        .sy-wrap {
          font-family: 'Tahoma', 'Inter', sans-serif;
          color: #0f2d52;
          background: #fff;
        }

        /* ── ABOUT ── */
        .sy-about {
          max-width: 1100px;
          margin: 0 auto;
          padding: 80px 48px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: start;
        }
        .sy-about > div { height: 100%; }
        @media(max-width: 760px) {
          .sy-about { grid-template-columns: 1fr; padding: 56px 24px; gap: 40px; }
          .sy-leader-grid { grid-template-columns: 1fr !important; }
          .sy-svc-list .sy-svc-row { grid-template-columns: 1fr !important; }
          .sy-caps-cols { flex-direction: column !important; }
        }

        .sy-section-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #0f2d52;
          margin-bottom: 20px;
        }

        .sy-h2 {
          font-family: 'Tahoma', Inter, serif;
          font-size: clamp(26px, 3.5vw, 38px);
          font-weight: 700;
          color: #0f2d52;
          line-height: 1.2;
          margin-bottom: 28px;
        }

        .sy-body {
          font-size: 14.5px;
          line-height: 1.85;
          color: #4a6080;
          font-weight: 300;
        }
        .sy-body p + p { margin-top: 18px; }

        .sy-img-box {
          width: 100%;
          aspect-ratio: 4/3;
          background: #d0e0f0;
          border-radius: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
        }
        .sy-img-box img {
          width: 100%; height: 100%; object-fit: comtain;
        }
        .sy-img-placeholder-text {
          font-size: 12px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #6e90b0;
        }

        /* ── WHAT WE DO ── */
        .sy-wwd {
          background: #ffffff;
          padding: 72px 48px;
        }
        .sy-wwd-inner {
          max-width: 1100px;
          margin: 0 auto;
        }
        .sy-wwd-cols {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0 64px;
          margin-top: 36px;
        }
        @media(max-width: 760px){ .sy-wwd-cols { grid-template-columns: 1fr; } }

        .sy-wwd-block { padding: 32px 0; border-top: 1px solid #c8daf0; }
        .sy-wwd-block + .sy-wwd-block { }
        .sy-wwd-block-label {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #6e90b0;
          margin-bottom: 14px;
        }
        .sy-wwd-block-title {
          font-family: 'Tahoma', Inter, serif;
          font-size: 17px;
          font-weight: 700;
          color: #0f2d52;
          margin-bottom: 14px;
          line-height: 1.35;
        }
        .sy-wwd-block-body {
          font-size: 14px;
          line-height: 1.82;
          color: #4d6a88;
          font-weight: 300;
        }
        .sy-wwd-block-body p + p { margin-top: 14px; }

        /* ── LEADERSHIP ── */
        .sy-leadership {
          max-width: 1100px;
          margin: 0 auto;
          padding: 72px 48px;
        }

        .sy-leader-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 340px));
          justify-content: center;
          gap: 32px;
          margin-top: 40px;
        }

        .sy-leader-card {
          text-align: center;
          padding: 40px 24px 32px;
          border: 1px solid #dce8f5;
          border-radius: 2px;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
          background: #fff;
        }
        .sy-leader-card:hover {
          box-shadow: 0 8px 32px rgba(15,45,82,0.1);
          transform: translateY(-3px);
        }

        .sy-avatar {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          margin: 0 auto 20px;
          background: linear-gradient(135deg, #1a3d6e 0%, #0f2d52 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Tahoma', Inter, serif;
          font-size: 28px;
          color: #fff;
          letter-spacing: 1px;
          border: 3px solid #dce8f5;
        }

        .sy-leader-name {
          font-family: 'Tahoma', Inter, serif;
          font-size: 17px;
          font-weight: 700;
          color: #0f2d52;
          margin-bottom: 6px;
        }
        .sy-leader-role {
          font-size: 12.5px;
          color: #5a7a9e;
          line-height: 1.6;
        }
    
      `}</style>

      <div className="sy-wrap">

        {/* ══ ABOUT US ══ */}
        <section>
          <div className="sy-about">
            <div style={{ opacity: 1 }}>
              <Fade delay={0.05}>
                <h2 className="sy-h2">About Us</h2>
                <div className="sy-body">
                  <p>
                    We are a specialized architectural firm, where technical precision meets visionary design with an integrated approach. Our multidisciplinary team combines deep engineering expertise with a passion for operational excellence.
                  </p>
                  <p>
                    We transform complex requirements into high-performance environments that stand the test of time.
                  </p>
                </div>
              </Fade>
            </div>
            <Fade delay={0.15}>
              <div className="sy-img-box">
                <img src={TEAM} />
              </div>
            </Fade>
          </div>
        </section>

        {/* ══ LEADERSHIP ══ */}
        <section>
          <div className="sy-leadership">
            <Fade>
              <h2 className="sy-h2">Leadership</h2>
            </Fade>
            <div className="sy-leader-grid">
              {leaders.map((l, i) => (
                <Fade key={l.name} delay={i * 0.1}>
                  <div className="sy-leader-card">
                    <div className="sy-img-box"><img src={l.image} alt={l.initials} /></div>
                    <div className="sy-leader-name">{l.name}</div>
                    <div className="sy-leader-role">{l.role}<br />{l.dept}</div>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </section>

        {/* ══ WHAT WE DO ══ */}
        <section className="sy-leadership">
          <div className="sy-wwd-inner">
            <Fade>
              <h2 className="sy-h2">Our Approach</h2>
            </Fade>
            <div className="sy-wwd-cols">
              <Fade delay={0.08}>
                <div>
                  <div className="sy-wwd-block">
                    <div className="sy-wwd-block-label">Functional Design</div>
                    <div className="sy-wwd-block-title">Future-Ready Spaces</div>
                    <div className="sy-wwd-block-body">
                      <p>
                        At NU Associates, functional design is our business and our passion. We design future-ready spaces that prioritize efficiency, safety, and scalability.
                      </p>
                      <p>
                        From master planning to final commissioning, we integrate sustainable practices and smart technologies to optimize workflows and maximize ROI. We don't just design buildings — we create strategic assets that empower leaders to thrive.
                      </p>
                    </div>
                  </div>
                  <div className="sy-wwd-block">
                    <div className="sy-wwd-block-label">Personalized Design</div>
                    <div className="sy-wwd-block-title">Your Space, Your Identity</div>
                    <div className="sy-wwd-block-body">
                      <p>
                        We believe every design is personalized — your space should show off your tastes and personality, work with your philosophy, and have a positive impact on your team and business.
                      </p>
                      <p>
                        We know that creating a space that does all these things isn't easy, and we're here to help.
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade delay={0.16}>
                <div>
                  <div className="sy-wwd-block">
                    <div className="sy-wwd-block-label">Expert Delivery</div>
                    <div className="sy-wwd-block-title">From Discovery to Delivery</div>
                    <div className="sy-wwd-block-body">
                      <p>
                        Our talented designers bring years of experience to the table. From discovering your unspoken needs to ensuring delivery with optimal costing and practical ideas.
                      </p>
                      <p>
                        We'll make sure that your space isn't just aesthetically pleasing, but also a reflection of you.
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
