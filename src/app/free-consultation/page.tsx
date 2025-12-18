"use client";

import { useState } from "react";

export default function FreeConsultation() {
  const [name, setName] = useState("");
  const [concern, setConcern] = useState("");

  const handleWhatsApp = () => {
    const message = `Hello ShrutiSkinCare,%0A%0AI want a FREE beauty consultation.%0A%0AName: ${name}%0AConcern: ${concern}`;
    const phone = "917484819768"; // 👉 replace with your WhatsApp number
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: 32 }}>
      <h1 style={{ marginBottom: 12 }}>Free Beauty & Skincare Consultation</h1>

      <p style={{ fontSize: 16, color: "#444", lineHeight: 1.6 }}>
        Get personalized skincare, haircare & beauty guidance from our expert.
        <br />
        📞 Call | 📹 Video | 💬 WhatsApp
        <br />
        <strong>100% FREE • No obligation • Pan India</strong>
      </p>

      <div
        style={{
          marginTop: 32,
          padding: 24,
          border: "1px solid #eee",
          borderRadius: 10,
        }}
      >
        <h3>Tell us about yourself</h3>

        <label style={{ display: "block", marginTop: 16 }}>
          Your Name
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          style={{
            width: "100%",
            padding: 10,
            marginTop: 6,
            borderRadius: 6,
            border: "1px solid #ccc",
          }}
        />

        <label style={{ display: "block", marginTop: 16 }}>
          Your Skin / Hair / Beauty Concern
        </label>
        <textarea
          value={concern}
          onChange={(e) => setConcern(e.target.value)}
          placeholder="Acne, pigmentation, hair fall, bridal care, etc."
          rows={4}
          style={{
            width: "100%",
            padding: 10,
            marginTop: 6,
            borderRadius: 6,
            border: "1px solid #ccc",
          }}
        />

        <button
          onClick={handleWhatsApp}
          style={{
            marginTop: 20,
            padding: "12px 18px",
            background: "#25D366",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
            fontSize: 16,
          }}
        >
          💬 Get Free Consultation on WhatsApp
        </button>

        <p style={{ marginTop: 12, fontSize: 14, color: "#666" }}>
          🔒 Your information is safe. No spam. No pressure to buy.
        </p>
      </div>

      <p style={{ marginTop: 24 }}>
        🚚 Free home delivery • Door-to-door • Pan India
      </p>
    </main>
  );
}
