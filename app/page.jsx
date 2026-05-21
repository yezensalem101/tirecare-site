import React from "react";
import { Phone, MapPin, Clock, ShieldCheck, Star, Wrench, Truck, CheckCircle } from "lucide-react";

export default function Page() {
  const phone = "813-648-0099";
  const googleReviewLink = "https://www.google.com/search?q=tire+care+mobile+service";

  return (
    <main style={{ background: "#09090b", color: "white", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
      <a href={`tel:${phone}`} style={{ position: "fixed", bottom: 20, right: 20, zIndex: 50, background: "#f97316", color: "black", padding: "16px 24px", borderRadius: 999, fontWeight: 900, textDecoration: "none" }}>
        📞 Call Now
      </a>

      <section style={{ padding: "80px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <p style={{ color: "#fdba74", fontWeight: 700 }}>24/7 Roadside Tire Service • Tampa Bay</p>
        <h1 style={{ fontSize: 56, lineHeight: 1.05, margin: "20px 0" }}>
          Tire problems? <span style={{ color: "#fb923c" }}>We come to you.</span>
        </h1>
        <p style={{ fontSize: 20, color: "#d4d4d8", maxWidth: 700 }}>
          Tire Care Mobile Service brings fast mobile tire repair, replacement, installation, balancing, and TPMS service straight to your location.
        </p>

        <a href={googleReviewLink} target="_blank" style={{ display: "inline-block", marginTop: 24, color: "#fdba74", fontWeight: 900, textDecoration: "none" }}>
          ⭐⭐⭐⭐⭐ 158+ Five-Star Google Reviews
        </a>

        <div style={{ marginTop: 32 }}>
          <a href={`tel:${phone}`} style={{ background: "#f97316", color: "black", padding: "16px 24px", borderRadius: 16, fontWeight: 900, textDecoration: "none", marginRight: 12 }}>
            Call Now: {phone}
          </a>
          <a href="#services" style={{ border: "1px solid #3f3f46", color: "white", padding: "16px 24px", borderRadius: 16, fontWeight: 900, textDecoration: "none" }}>
            View Services
          </a>
        </div>
      </section>

      <section id="services" style={{ padding: "60px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ fontSize: 42, textAlign: "center" }}>Our Services</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 24, marginTop: 32 }}>
          {[
            ["Tire Install & Balance", "Mobile tire installation and balancing at your location."],
            ["Roadside Tire Service", "Flat tire, blowout, or emergency tire help when you need it."],
            ["TPMS Sensor Service", "TPMS sensor replacement, diagnosis, and service."]
          ].map(([title, text]) => (
            <div key={title} style={{ background: "#18181b", padding: 28, borderRadius: 24, border: "1px solid #27272a" }}>
              <h3 style={{ color: "#fb923c" }}>{title}</h3>
              <p style={{ color: "#d4d4d8" }}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "60px 24px", background: "#18181b" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: 42 }}>Why Choose Tire Care?</h2>
          <p style={{ color: "#d4d4d8", fontSize: 19 }}>
            We save you time by bringing the tire shop to your driveway, job, parking lot, or roadside location.
          </p>
          <ul style={{ color: "#d4d4d8", fontSize: 18, lineHeight: 2 }}>
            <li>✅ Open 24/7</li>
            <li>✅ Serving Tampa, Wesley Chapel, Clearwater, St. Pete, and nearby areas</li>
            <li>✅ Fast, honest, professional mobile tire service</li>
          </ul>
        </div>
      </section>

      <section style={{ padding: "70px 24px", maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
        <div style={{ background: "linear-gradient(135deg, rgba(249,115,22,.25), #18181b)", padding: 40, borderRadius: 28, border: "1px solid rgba(249,115,22,.4)" }}>
          <div style={{ fontSize: 34 }}>⭐⭐⭐⭐⭐</div>
          <p style={{ color: "#fdba74", fontWeight: 900 }}>GOOGLE TRUSTED</p>
          <h2 style={{ fontSize: 48 }}>158+ Five-Star Reviews</h2>
          <p style={{ color: "#d4d4d8", fontSize: 19 }}>
            Real customers trust Tire Care Mobile Service for fast, professional mobile tire help across Tampa Bay.
          </p>
          <a href={googleReviewLink} target="_blank" style={{ display: "inline-block", marginTop: 24, background: "#f97316", color: "black", padding: "16px 24px", borderRadius: 16, fontWeight: 900, textDecoration: "none" }}>
            View Google Reviews
          </a>
        </div>
      </section>

      <section style={{ padding: "40px 24px 80px", textAlign: "center" }}>
        <h2 style={{ fontSize: 42 }}>Need tire service today?</h2>
        <p style={{ fontSize: 19 }}>Call Tire Care Mobile Service and we’ll bring the shop to you.</p>
        <a href={`tel:${phone}`} style={{ display: "inline-block", background: "#f97316", color: "black", padding: "16px 28px", borderRadius: 16, fontWeight: 900, textDecoration: "none" }}>
          {phone}
        </a>
      </section>
    </main>
  );
}
