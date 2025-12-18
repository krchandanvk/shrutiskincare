export default function ContactPage() {
  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: 32 }}>
      <h1>Contact ShrutiSkinCare</h1>

      <p style={{ fontSize: 16, lineHeight: 1.6 }}>
        We are happy to help you with skincare, haircare, makeup, and home-salon
        services.
      </p>

      <div style={{ marginTop: 24 }}>
        <p>📞 <strong>Call / WhatsApp:</strong> 7484819768</p>
        <p>📧 <strong>Email:</strong> care@shrutiskincare.com</p>
        <p>📍 <strong>Service:</strong> Pan India (Door-to-door delivery)</p>
      </div>

      <p style={{ marginTop: 24 }}>
        👉 For best results, we recommend a{" "}
        <a href="/free-consultation">FREE consultation</a> before ordering.
      </p>
    </main>
  );
}
