export default function Page() {
  const phone = "813-648-0099";
  const googleReviewLink = "https://www.google.com/search?q=tire+care+mobile+service";
  const instagramLink = "https://instagram.com/tirecare_";
  const tiktokLink = "https://tiktok.com/@_tirecare";
  const facebookLink = "https://www.facebook.com/people/Tire-care-mobile-service/61581024939195/";

  const photos = [
    { src: "/images/job2.jpeg", title: "Roadside Tire Service" },
    { src: "/images/job1.jpeg", title: "Premium Vehicle Service" },
    { src: "/images/job3.jpeg", title: "Truck Tire Service" },
    { src: "/images/job4.jpeg", title: "Emergency Tire Help" },
    { src: "/images/job5.jpeg", title: "Install & Balance" },
  ];

  const services = [
    {
      title: "Tire Install & Balance",
      text: "Mobile tire installation and balancing at your location.",
    },
    {
      title: "Roadside Tire Service",
      text: "Flat tire, blowout, or emergency tire help when you need it.",
    },
    {
      title: "TPMS Sensor Service",
      text: "TPMS sensor replacement, diagnosis, and service.",
    },
  ];

  return (
    <main style={styles.page}>
      <a href={`tel:${phone}`} style={styles.floatingCall}>📞 Call Now</a>

      <header style={styles.header}>
        <div style={styles.logoWrap}>
          <img src="/images/logo.jpeg" alt="Tire Care Mobile Service logo" style={styles.logo} />
          <div>
            <div style={styles.brand}>Tire Care</div>
            <div style={styles.brandSub}>Mobile Service</div>
          </div>
        </div>
        <nav style={styles.nav}>
          <a href="#services" style={styles.navLink}>Services</a>
          <a href="#gallery" style={styles.navLink}>Gallery</a>
          <a href="#reviews" style={styles.navLink}>Reviews</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
        </nav>
      </header>

      <section style={styles.hero}>
        <div style={styles.heroText}>
          <p style={styles.badge}>24/7 Roadside Tire Service • Tampa Bay & surrounding areas </p>
          <h1 style={styles.h1}>Tire problems? <span style={styles.orange}>We come to you.</span></h1>
          <p style={styles.heroP}>
            Tire Care Mobile Service provides fast, professional mobile tire repair, replacement, installation, balancing, and TPMS service directly at your location. Our experienced technicians are equipped to handle roadside emergencies, flat tires, tire changes, lockout assistance, fuel delivery, and more  saving you time and getting you back on the road safely. Whether you’re at home, work, stranded on the highway, or stuck in a parking lot, we bring reliable 24/7 roadside assistance and expert service straight to you across the Tampa Bay area.
          </p>

          <a href={googleReviewLink} target="_blank" style={styles.reviewBadge}>
            ⭐⭐⭐⭐⭐ <b>158+ Five-Star Google Reviews</b>
          </a>

          <div style={styles.heroButtons}>
            <a href={`tel:${phone}`} style={styles.primaryBtn}>📞 Call Now: {phone}</a>
            <a href="#services" style={styles.secondaryBtn}>View Services</a>
          </div>

          <div style={styles.socials}>
            <a href={instagramLink} target="_blank" style={styles.socialLink}>Instagram: @tirecare_</a>
            <a href={tiktokLink} target="_blank" style={styles.socialLink}>TikTok: @_tirecare</a>
            <a href={facebookLink} target="_blank" style={styles.socialLink}>Facebook</a>
          </div>
        </div>

        <div style={styles.heroCard}>
          <img src="/images/job1.jpeg" alt="Tire Care Mobile Service job" style={styles.heroImg} />
          <div style={styles.heroCardText}>
            <h2 style={styles.cardTitle}>Mobile Tire Help Without the Wait</h2>
            <p style={styles.cardP}>Stuck at home, work, or on the road? We pull up with the tools, tires, and service you need.</p>
          </div>
        </div>
      </section>

      <section id="services" style={styles.section}>
        <div style={styles.sectionHead}>
          <h2 style={styles.h2}>Our Services</h2>
          <p style={styles.sectionP}>Professional tire service brought directly to you.</p>
        </div>
        <div style={styles.serviceGrid}>
          {services.map((service, i) => (
            <div key={service.title} style={styles.serviceCard}>
              <img src={photos[i].src} alt={service.title} style={styles.serviceImg} />
              <div style={styles.serviceBody}>
                <h3 style={styles.h3}>{service.title}</h3>
                <p style={styles.cardP}>{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.whySection}>
        <div style={styles.twoCol}>
          <div>
            <h2 style={styles.h2}>Why Choose Tire Care?</h2>
            <p style={styles.heroP}>We save you time by bringing the tire shop to your driveway, job, parking lot, or roadside location.</p>
          </div>
          <div style={styles.checkList}>
            <div style={styles.check}>🕒Open 24/7</div>
            <div style={styles.check}>📍 servicing tampa and surrounding areas</div>
            <div style={styles.check}>🚨Fast, honest, professional mobile tire service & more</div>
            <div style={styles.check}>🛠️We bring the shop to you</div>
            <div style={styles.check}>🌏Areas service:Tampa • Wesley Chapel • New Tampa • Lutz • Land O’ Lakes • Clearwater • St. Petersburg • Brandon • Riverview • Town ‘N’ Country • Carrollwood • Temple Terrace • South Tampa • Ybor City • Citrus Park • Palm Harbor • Dunedin • Largo • Pinellas Park • Safety Harbor • Oldsmar • Odessa • Ruskin • Apollo Beach • Seffner • Valrico • Tarpon Springs • Spring Hill • Brooksville • Trinity • Zephyrhills • Plant City • Tampa Bay Area</div>
          </div>
        </div>
      </section>
      <section id="gallery" style={styles.section}>
        <div style={styles.sectionHead}>
          <h2 style={styles.h2}>Recent Jobs</h2>
          <p style={styles.sectionP}>Real Tire Care Mobile Service work around Tampa Bay.</p>
        </div>
        <div style={styles.galleryGrid}>
          {photos.map((photo) => (
            <div key={photo.src} style={styles.galleryCard}>
              <img src={photo.src} alt={photo.title} style={styles.galleryImg} />
              <div style={styles.galleryTitle}>{photo.title}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="reviews" style={styles.reviewSection}>
        <div style={styles.stars}>⭐⭐⭐⭐⭐</div>
        <p style={styles.googleTrusted}>Google Trusted</p>
        <h2 style={styles.bigReview}>158+ Five-Star Reviews</h2>
        <p style={styles.sectionP}>Real customers trust Tire Care Mobile Service for fast, professional mobile tire help across Tampa Bay.</p>
        <a href={googleReviewLink} target="_blank" style={styles.primaryBtn}>View Google Reviews</a>
      </section>

      <section id="contact" style={styles.cta}>
        <h2 style={styles.h2Dark}>Need tire service today?</h2>
        <p style={styles.ctaP}>Call Tire Care Mobile Service and we’ll bring the shop to you.</p>
        <a href={`tel:${phone}`} style={styles.blackBtn}>📞 {phone}</a>
      </section>

      <footer style={styles.footer}>
        <img src="/images/logo.jpeg" alt="Tire Care Mobile Service logo" style={styles.footerLogo} />
        <p style={styles.footerText}>© 2026 Tire Care Mobile Service. We bring the shop to you.</p>
        <div style={styles.footerSocials}>
          <a href={instagramLink} target="_blank" style={styles.socialLink}>Instagram</a>
          <a href={tiktokLink} target="_blank" style={styles.socialLink}>TikTok</a>
          <a href={facebookLink} target="_blank" style={styles.socialLink}>Facebook</a>
        </div>
      </footer>
    </main>
  );
}

const styles = {
  page: { minHeight: "100vh", background: "#09090b", color: "white", fontFamily: "Arial, sans-serif" },
  floatingCall: { position: "fixed", right: 20, bottom: 20, zIndex: 100, background: "#f97316", color: "#000", padding: "16px 24px", borderRadius: 999, fontWeight: 900, textDecoration: "none", boxShadow: "0 15px 40px rgba(249,115,22,.35)" },
  header: { maxWidth: 1200, margin: "0 auto", padding: "22px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20 },
  logoWrap: { display: "flex", alignItems: "center", gap: 14 },
  logo: { width: 72, height: 72, objectFit: "contain", borderRadius: 12, background: "#000" },
  brand: { fontWeight: 900, fontSize: 22, textTransform: "uppercase" },
  brandSub: { color: "#fb923c", fontWeight: 900, textTransform: "uppercase", fontSize: 13 },
  nav: { display: "flex", gap: 18, flexWrap: "wrap" },
  navLink: { color: "#f4f4f5", textDecoration: "none", fontWeight: 800 },
  hero: { maxWidth: 1200, margin: "0 auto", padding: "55px 24px 80px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 40, alignItems: "center" },
  badge: { display: "inline-block", color: "#fdba74", border: "1px solid rgba(249,115,22,.45)", background: "rgba(249,115,22,.1)", padding: "10px 16px", borderRadius: 999, fontWeight: 800 },
  h1: { fontSize: "clamp(42px, 6vw, 72px)", lineHeight: 1.02, margin: "18px 0", fontWeight: 1000, letterSpacing: "-2px" },
  orange: { color: "#fb923c" },
  heroP: { fontSize: 19, color: "#d4d4d8", lineHeight: 1.6 },
  reviewBadge: { display: "inline-flex", gap: 10, alignItems: "center", color: "#fdba74", border: "1px solid rgba(249,115,22,.4)", background: "rgba(0,0,0,.55)", padding: "13px 16px", borderRadius: 16, textDecoration: "none", marginTop: 12 },
  heroButtons: { display: "flex", gap: 14, marginTop: 24, flexWrap: "wrap" },
  primaryBtn: { display: "inline-block", background: "#f97316", color: "#000", padding: "16px 24px", borderRadius: 16, fontWeight: 900, textDecoration: "none" },
  secondaryBtn: { display: "inline-block", border: "1px solid #52525b", color: "white", padding: "16px 24px", borderRadius: 16, fontWeight: 900, textDecoration: "none" },
  socials: { display: "flex", gap: 14, marginTop: 22, flexWrap: "wrap" },
  socialLink: { color: "#fb923c", fontWeight: 900, textDecoration: "none" },
  heroCard: { background: "#18181b", border: "1px solid #27272a", borderRadius: 28, overflow: "hidden", boxShadow: "0 25px 60px rgba(0,0,0,.35)" },
  heroImg: { width: "100%", height: 360, objectFit: "cover", display: "block" },
  heroCardText: { padding: 24, background: "#000" },
  cardTitle: { margin: 0, fontSize: 26, fontWeight: 900 },
  cardP: { color: "#d4d4d8", lineHeight: 1.55 },
  section: { maxWidth: 1200, margin: "0 auto", padding: "70px 24px" },
  sectionHead: { textAlign: "center", marginBottom: 36 },
  h2: { fontSize: "clamp(34px, 4vw, 52px)", margin: 0, fontWeight: 1000 },
  sectionP: { color: "#d4d4d8", fontSize: 18, lineHeight: 1.6 },
  serviceGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 },
  serviceCard: { background: "#18181b", border: "1px solid #27272a", borderRadius: 24, overflow: "hidden" },
  serviceImg: { width: "100%", height: 220, objectFit: "cover", display: "block" },
  serviceBody: { padding: 24 },
  h3: { color: "#fb923c", fontSize: 24, margin: "0 0 8px", fontWeight: 900 },
  whySection: { background: "rgba(24,24,27,.8)", padding: "70px 24px" },
  twoCol: { maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 34, alignItems: "center" },
  checkList: { display: "grid", gap: 14 },
  check: { background: "#000", border: "1px solid #27272a", borderRadius: 18, padding: 18, fontWeight: 800 },
  galleryGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 18 },
  galleryCard: { borderRadius: 22, overflow: "hidden", border: "1px solid #27272a", background: "#18181b" },
  galleryImg: { width: "100%", height: 240, objectFit: "cover", display: "block" },
  galleryTitle: { padding: 14, color: "#fdba74", fontWeight: 900, textAlign: "center" },
  reviewSection: { maxWidth: 1000, margin: "0 auto", padding: "75px 24px", textAlign: "center", borderTop: "1px solid #27272a" },
  stars: { fontSize: 34 },
  googleTrusted: { color: "#fdba74", textTransform: "uppercase", letterSpacing: 4, fontWeight: 900 },
  bigReview: { fontSize: "clamp(42px, 6vw, 72px)", margin: "10px 0", fontWeight: 1000 },
  cta: { maxWidth: 980, margin: "20px auto 70px", borderRadius: 28, padding: "50px 24px", textAlign: "center", background: "#f97316", color: "#000" },
  h2Dark: { fontSize: "clamp(34px, 4vw, 52px)", margin: 0, fontWeight: 1000, color: "#000" },
  ctaP: { fontSize: 19, fontWeight: 800 },
  blackBtn: { display: "inline-block", background: "#000", color: "#fff", padding: "16px 26px", borderRadius: 16, fontWeight: 900, textDecoration: "none" },
  footer: { borderTop: "1px solid #27272a", padding: "35px 24px", textAlign: "center", color: "#a1a1aa" },
  footerLogo: { width: 110, height: 110, objectFit: "contain", marginBottom: 12 },
  footerText: { margin: 0 },
  footerSocials: { display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap", marginTop: 16 },
};
