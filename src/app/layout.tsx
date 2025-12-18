import "./globals.css";
import Link from "next/link";
import type { ReactNode } from "react";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
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
              {/* LOGO */}
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
              <Link href="/free-consultation">Free Consultation</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>

        {/* ================= PAGE CONTENT ================= */}
        <main>{children}</main>

        {/* ================= WHATSAPP BUTTON ================= */}
        <a
          href="https://wa.me/917484819768"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            backgroundColor: "#25D366",
            color: "#ffffff",
            padding: "14px 18px",
            borderRadius: "50px",
            textDecoration: "none",
            fontWeight: 600,
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            zIndex: 2000,
          }}
        >
          WhatsApp
        </a>
      </body>
    </html>
  );
}
