import Link from "next/link";
import { categories } from "../data/categories";

export default function Home() {
  return (
    <main style={{ maxWidth: 1200, margin: "0 auto", padding: 32 }}>
      <section style={{ marginBottom: 60 }}>
        <h1 style={{ fontSize: 36, marginBottom: 12 }}>
          Everyday Beauty. Naturally Confident.
        </h1>
        <p style={{ fontSize: 18, color: "#444", lineHeight: 1.6 }}>
          Free skincare & beauty consultation on call or video.<br />
          Home-salon friendly care.<br />
          <strong>Free home delivery – Pan India.</strong>
        </p>
        <div style={{ marginTop: 20 }}>
          <Link href="/free-consultation" style={{
            padding: "12px 18px",
            background: "#ec4899",
            color: "#fff",
            borderRadius: 6,
            textDecoration: "none",
            marginRight: 16
          }}>
            Get Free Consultation
          </Link>
          <Link href="/contact">Contact Us</Link>
        </div>
      </section>

      <section>
        <h2>Our Beauty Categories</h2>
        <p>No pricing shown. Expert guidance first.</p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 20,
          marginTop: 24
        }}>
          {categories.map((cat: any) => (
            <Link key={cat.slug} href={`/categories/${cat.slug}`} style={{
              border: "1px solid #eee",
              padding: 20,
              borderRadius: 10,
              textDecoration: "none",
              color: "#000"
            }}>
              <h3>{cat.title}</h3>
              <p>{cat.tagline}</p>
              <small>{cat.bestFor}</small>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
