import "./globals.css";
import Link from "next/link";

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
