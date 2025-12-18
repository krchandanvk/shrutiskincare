import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/919876543210"
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
