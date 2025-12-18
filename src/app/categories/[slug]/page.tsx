import Link from "next/link";
import { categories } from "../../../data/categories";
import { notFound } from "next/navigation";

export default function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const category = categories.find((c: any) => c.slug === params.slug);
  if (!category) return notFound();

  return (
    <main style={{ maxWidth: 1000, margin: "0 auto", padding: 32 }}>
      {/* HEADER */}
      <section style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: 34, marginBottom: 10 }}>
          {category.title}
        </h1>
        <p style={{ fontSize: 18, color: "#555", lineHeight: 1.6 }}>
          {category.tagline}
        </p>
      </section>

      {/* DESCRIPTION */}
      <section
        style={{
          background: "#f9fafb",
          padding: 24,
          borderRadius: 12,
          marginBottom: 40,
        }}
      >
        <p style={{ fontSize: 16, lineHeight: 1.7 }}>
          {category.description}
        </p>

        <p style={{ marginTop: 12, fontSize: 14, color: "#666" }}>
          ✔ Home-salon friendly &nbsp;•&nbsp; ✔ Expert-guided selection &nbsp;•&nbsp;
          ✔ Free consultation available
        </p>
      </section>

      {/* ITEMS GRID */}
      <section>
        <h2 style={{ marginBottom: 16 }}>
          What We Offer in {category.title}
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16,
          }}
        >
          {category.items.map((item: string) => (
            <div
              key={item}
              style={{
                border: "1px solid #eee",
                padding: 16,
                borderRadius: 10,
                background: "#fff",
              }}
            >
              ✔ {item}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          marginTop: 60,
          padding: 28,
          borderRadius: 14,
          background: "linear-gradient(135deg, #fde2f3, #fce7f3)",
        }}
      >
        <h3 style={{ fontSize: 22, marginBottom: 10 }}>
          Not sure what’s right for you?
        </h3>

        <p style={{ fontSize: 16, marginBottom: 20 }}>
          Get expert beauty & skincare guidance before choosing products.
          Our consultation is completely free.
        </p>

        <div>
          <Link
            href="/free-consultation"
            style={{
              padding: "12px 18px",
              background: "#ec4899",
              color: "#fff",
              borderRadius: 6,
              textDecoration: "none",
              marginRight: 14,
              fontWeight: 500,
            }}
          >
            Get Free Consultation
          </Link>

          <a
            href="https://wa.me/917484819768"
            target="_blank"
            style={{ fontWeight: 500 }}
          >
            WhatsApp Expert
          </a>
        </div>

        <p style={{ marginTop: 12, fontSize: 14, color: "#555" }}>
          🚚 Free home delivery • Pan India • Door-to-door service
        </p>
      </section>
    </main>
  );
}
