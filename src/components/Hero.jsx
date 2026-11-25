import heroImg from "../assets/1.png";

export default function Hero() {
  return (
    <section id="home" className="ep-hero d-flex align-items-center text-white">
      <img
        src={heroImg}
        alt="Luxury villa with modern architecture at sunset"
        className="ep-hero-img"
        width="1920"
        height="1080"
        fetchPriority="high"
      />
      <div className="ep-hero-overlay"></div>

      <div className="container position-relative py-5">
        <div className="row">
          <div className="col-lg-7">
            <p className="ep-eyebrow text-gold-light">Luxury Real Estate</p>
            <h1 className="display-3 fw-bold mb-4">
              Find a Home That <span className="text-gold fst-italic">Defines</span> Your
              Success
            </h1>
            <p className="lead mb-5 opacity-75">
              Discover exclusive villas, penthouses and apartments in the most
              prestigious locations, guided by experts you can trust.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <a href="#properties" className="btn btn-gold btn-lg">
                Explore Properties
              </a>
              <a href="#contact" className="btn btn-outline-light btn-lg">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}