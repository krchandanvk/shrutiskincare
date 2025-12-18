import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        {/* ================= HEADER ================= */}
        <header
          style={{
            background: "#ffffff",
            padding: "18px 32px",
            borderBottom: "1px solid #f3e8ff",
            position: "sticky",
            top: 0,
            zIndex: 1000,
          }}
        >
          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* BRAND + LOGO */}
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                textDecoration: "none",
              }}
            >
              {/* LOGO IMAGE */}
              <img
                src="/logo.png"
                alt="Shruti Skin Care Logo"
                style={{
                  width: 42,
                  height: 42,
                  objectFit: "contain",
                }}
              />

              {/* BRAND TEXT */}
              <div>
                <div
                  style={{
                    fontSize: 24,
                    fontWeight: 700,
                    color: "#ec4899",
                    lineHeight: 1,
                  }}
                >
                  Shruti Skin Care
                </div>

                <small style={{ fontSize: 12, color: "#6b7280" }}>
                  Everyday Beauty. Naturally Confident.
                </small>
              </div>
            </Link>

            {/* NAVIGATION */}
            <nav style={{ display: "flex", gap: 22 }}>
