export default function Page() {
  const phone = "813-648-0099";

  const images = [
    "/images/job1.jpeg",
    "/images/job2.jpeg",
    "/images/job3.jpeg",
    "/images/job4.jpeg",
    "/images/job5.jpeg",
  ];

  return (
    <main style={{ background: "#202020", color: "white", fontFamily: "Arial, sans-serif", minHeight: "100vh" }}>
      <div style={{ background: "#ffcc00", color: "#111", textAlign: "center", padding: 12, fontWeight: 900 }}>
        24/7 Mobile Tire Service Available — Call Now: {phone}
      </div>

      <a href={`tel:${phone}`} style={{
        position: "fixed", bottom: 20, right: 20, zIndex: 99,
        background: "#ffcc00", color: "#111", padding: "16px 24px",
        borderRadius: 14, fontWeight: 900, textDecoration: "none"
      }}>
        Book Service
      </a>

      <section style={{ padding: "60px 22px", textAlign: "center" }}>
        <h1 style={{ fontSize: 48, fontWeight: 900, marginBottom: 15 }}>
          24/7 Mobile Tire Service
        </h1>
        <p style={{ fontSize: 20, color: "#ddd", maxWidth: 700, margin: "0 auto 30px" }}>
          Tire problems? We bring the shop to you. Fast roadside tire repair, replacement, install, balance, and TPMS service across Tampa Bay.
        </p>

        <a href={`tel:${phone}`} style={{
          background: "#ffcc00", color: "#111", padding: "16px 55px",
          borderRadius: 6, fontWeight: 900, textDecoration: "none", display: "inline-block"
        }}>
          CALL US
        </a>

        <div style={{ marginTop: 22 }}>
          <a href="https://instagram.com/tirecare_" target="_blank" style={{ color: "#ffcc00", margin: 12 }}>Instagram</a>
          <a href="https://tiktok.com/@_tirecare" target="_blank" style={{ color: "#ffcc00", margin: 12 }}>TikTok</a>
          <a href="https://facebook.com/search/top?q=tire%20care%20mobile%20service" target="_blank" style={{ color: "#ffcc00", margin: 12 }}>Facebook</a>
        </div>
      </section>

      <section style={{ padding: "50px 22px" }}>
        <h2 style={{ textAlign: "center", fontSize: 38, fontWeight: 900 }}>OUR SERVICES</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 25,
          maxWidth: 1100,
          margin: "35px auto"
        }}>
          {[
            ["Tire Replacement", images[0]],
            ["Roadside Tire Service", images[1]],
            ["Install & Balance", images[2]],
            ["TPMS Sensor Service", images[3]],
            ["Emergency Tire Help", images[4]],
          ].map(([title, img]) => (
            <div key={title} style={{ background: "#111", borderRadius: 8, overflow: "hidden" }}>
              <img src={img} style={{ width: "100%", height: 260, objectFit: "cover" }} />
              <div style={{ background: "#ffcc00", color: "#111", padding: 18, textAlign: "center", fontWeight: 900 }}>
                {title}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "50px 22px", textAlign: "center", background: "#181818" }}>
        <h2 style={{ fontSize: 38, fontWeight: 900 }}>WHY CHOOSE TIRE CARE?</h2>
        <p style={{ color: "#ddd", fontSize: 19 }}>Open 24/7 • Fast Response • Tampa Bay Service Area • 158+ Five-Star Google Reviews</p>
      </section>

      <section style={{ padding: "50px 22px", textAlign: "center" }}>
        <h2 style={{ fontSize: 38, fontWeight: 900 }}>158+ FIVE-STAR REVIEWS</h2>
        <p style={{ color: "#ddd", fontSize: 19 }}>
          Real customers trust Tire Care Mobile Service for fast, professional mobile tire help.
        </p>
        <a href="https://www.google.com/search?q=tire+care+mobile+service" target="_blank" style={{ color: "#ffcc00", fontWeight: 900 }}>
          View Google Reviews
        </a>
      </section>

      <footer style={{ padding: 35, textAlign: "center", background: "#111", color: "#ccc" }}>
        <h3 style={{ color: "#ffcc00" }}>Tire Care Mobile Service</h3>
        <p>{phone}</p>
        <p>Open 24/7 • Tampa Bay, FL</p>
      </footer>
    </main>
  );
}
