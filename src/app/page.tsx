import { categories } from "../data/categories";

export default function HomePage() {
  return (
    <main style={{ maxWidth: 1200, margin: "0 auto", padding: 32 }}>
      {/* HERO */}
      <section className="hero section">
        <h1>Everyday Beauty. Naturally Confident.</h1>

        <p style={{ fontSize: 18, maxWidth: 600, lineHeight: 1.7 }}>
          Free skincare & beauty consultation on call or video.
          <br />
          Home-salon friendly care.
          <br />
          <strong>Free home delivery 🇮🇳 Pan India.</strong>
        </p>

        <div style={{ marginTop: 30 }}>
          <a href="/free-consultation" className="btn-primary">
            Get Free Consultation
          </a>

          <a href="/contact" style={{ marginLeft: 18, fontWeight: 500 }}>
            Contact Us
          </a>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="section">
        <h2>Our Beauty Categories</h2>
        <p>No pricing shown. Expert guidance first.</p>

        <div className="category-grid" style={{ marginTop: 40 }}>
          {categories.map((cat) => (
            <a
              key={cat.slug}
              href={`/categories/${cat.slug}`}
              className="category-card"
            >
              <h3>{cat.title}</h3>
              <p>{cat.tagline}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
