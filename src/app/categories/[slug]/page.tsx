import { categories } from "../../../data/categories";
import { notFound } from "next/navigation";

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories.find((c: any) => c.slug === params.slug);
  if (!category) return notFound();

  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: 32 }}>
      <h1>{category.title}</h1>
      <p>{category.tagline}</p>
      <p>
        <strong>Target:</strong> {category.target}<br />
        <strong>Best for:</strong> {category.bestFor}
      </p>
      <h3>What we offer</h3>
      <ul>
        {category.items.map((i: string) => <li key={i}>{i}</li>)}
      </ul>
      <p style={{ marginTop: 24 }}>🚚 Free home delivery • Pan India • Door-to-door</p>
    </main>
  );
}
