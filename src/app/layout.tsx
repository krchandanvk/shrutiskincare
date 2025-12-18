import "./globals.css";
import Link from "next/link";
<img src="/logo.png.png" />

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* HEADER */}
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
            {/* BRAND NAME */}
            <Link
              href="/"
              style={{
                fontSize: 26,
                fontWeight: 700,
                color: "#ec4899",
                letterSpacing: "0.5px",
              }}
            >
              Shruti Skin Care
            </Link>

            {/* NAV LINKS */}
            <nav style={{ display: "flex", gap: 22 }}>
              <Link href="/free-consultation">Free Consultation</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main>{children}</main>

        {/* FLOATING WHATSAPP */}
        <a
          href="https://wa.me/917484819768"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            backgroundColor: "#25D366",
            color: "#fff",
            padding: "14px 18px",
            borderRadius: "50px",
            textDecoration: "none",
            fontWeight: 600,
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            zIndex: 9999,
          }}
        >
          💬 WhatsApp Us
        </a>
      </body>
    </html>
  );
}
