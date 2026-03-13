import { useState } from "react";
import Careers from './Careers';


const C = {
  herobg: "#1a2a4a",       // deep navy hero
  heroBorder: "#2d3f5e",
  accentBlue: "#c8dce8",   // light blue accent
  pagebg: "#f0f6fa",       // very light blue-white page background
  white: "#ffffff",
  cardBorder: "#d4e4ef",
  navy: "#10104c",
  mid: "#2d3f5e",
  muted: "#6b8ca8",
  inputBorder: "#c0d8e8",
  inputBg: "#f8fbfd",
  labelColor: "#4a6a82",
};

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange: React.ChangeEventHandler<
                        HTMLInputElement | HTMLTextAreaElement
                      > = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    border: `1px solid ${C.inputBorder}`,
    borderRadius: "6px",
    fontSize: "0.92rem",
    color: C.navy,
    background: C.white,
    outline: "none",
    boxSizing: "border-box" as const,
    fontFamily: "'Tahoma', sans-serif",
  };

  const labelStyle = {
    display: "block",
    fontSize: "0.66rem",
    letterSpacing: "0.13em",
    fontFamily: "'Tahoma', sans-serif",
    fontWeight: 700,
    color: C.navy,
    marginBottom: "7px",
    textTransform: "uppercase" as const,
  };

  const infoItems = [
    { label: "EMAIL",    icon: "✉",  value: "office@nuassociates.com" },
    {
      label: "LOCATION", icon: "⊙",
      value: "No. 940, Shantha Complex,\n1st Floor, 20th Main Road,\nBanashankari II Stage,\nBangalore, Karnataka, India\nPincode: 560070"
    },
  ];

  const fields: { label: string; name: keyof FormData; placeholder: string; type: string }[] = [
    { label: "NAME *",  name: "name",  placeholder: "Your full name",         type: "text"  },
    { label: "EMAIL *", name: "email", placeholder: "your.email@example.com", type: "email" },
  ];

  return (
    <div style={{ fontFamily: "'Tahoma', sans-serif", minHeight: "100vh"}}>

      {/* ── Deep Navy Hero ── */}
      <section style={{
        padding: "80px 40px 50px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        background: C.white,
      }}>
        {/* Subtle decorative rings */}
        <div style={{
          position: "absolute", top: "-80px", left: "50%", transform: "translateX(-50%)",
          width: "600px", height: "600px", borderRadius: "50%",
          border: "1px solid rgba(251, 252, 252, 0.08)", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", top: "-40px", left: "50%", transform: "translateX(-50%)",
          width: "400px", height: "400px", borderRadius: "50%",
          border: "1px solid rgba(200,220,232,0.06)", pointerEvents: "none",
        }} />

        <p style={{
          fontSize: "0.8rem", letterSpacing: "0.2em", fontFamily: "'Tahoma', sans-serif",
          color: C.navy, marginBottom: "20px", opacity: 0.7,
        }}>
          GET IN TOUCH
        </p>
        <h1 style={{
          fontSize: "clamp(2.4rem, 5vw, 3.8rem)", color: C.navy,
          fontWeight: 400, margin: "0 0 24px", letterSpacing: "-0.5px", lineHeight: 1.15,
        }}>
          Let's Create <em style={{ fontStyle: "italic", fontWeight: 700, color: C.navy }}>Together</em>
        </h1>
        <p style={{
          fontSize: "1.02rem", color: C.navy,
          maxWidth: "520px", margin: "0 auto 60px", lineHeight: 1.8,
        }}>
          We're always interested in new collaborations and challenging projects. Reach out to discuss how we can bring your vision to life.
        </p>

        {/* Info pills */}
        <div style={{
          display: "flex", justifyContent: "center", gap: "0",
          flexWrap: "wrap", maxWidth: "900px", margin: "0 auto",
          border: `1px solid ${C.heroBorder}`, borderRadius: "10px", overflow: "hidden",
        }}>
          {infoItems.map((item, i) => (
            <div key={i} style={{
              flex: "1 1 160px",
              padding: "24px 20px",
              textAlign: "left",
              borderRight: i < infoItems.length - 1 ? `1px solid ${C.heroBorder}` : "none",
              background: i % 2 === 0 ? "rgba(255,255,255,0.03)" : "transparent",
            }}>
              <div style={{
                fontSize: "0.62rem", letterSpacing: "0.15em", fontFamily: "'Tahoma', sans-serif",
                fontWeight: 700, color: C.navy, marginBottom: "10px", opacity: 0.8,
              }}>
                {item.label}
              </div>
              <div style={{ fontSize: "0.95rem", color: C.navy, whiteSpace: "pre-line", lineHeight: 1.65 }}>
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div
        style={{
        width: "70%",
        height: "1px",
        margin: "20px auto",
        background:
         "linear-gradient(to right, transparent, rgba(30,39,86,0.4), transparent)"
        }}
      />

      <Careers/>

     {/* ── Bottom Cards ── */}
<section style={{
  display: "grid",
  gridTemplateColumns: "1fr",
  maxWidth: "1060px",
  margin: "0 auto",
  gap: "16px",
  padding: "0 16px",
  transform: "translateY(-32px)",
}}>
</section>


<div style={{ height: "32px" }} />
</div>

  );
}