import aboutImg from "../assets/2.png";

export default function About() {
  return (
    <section id="about" className="py-section">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="position-relative">
              <img
                src={aboutImg}
                alt="Elegant living room of a luxury home"
                className="img-fluid rounded-4 shadow-lg ep-about-img"
                width="800"
                height="600"
                loading="lazy"
              />
              <div className="ep-badge">
                <strong>15+</strong>
                <span>Years of Excellence</span>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <p className="ep-eyebrow">About Us</p>
            <h2 className="ep-heading mb-4">
              Your Trusted Partner in Premium Real Estate
            </h2>
            <p className="text-muted mb-4">
              Elite Properties has been connecting discerning clients with
              extraordinary homes for over a decade. We combine deep market
              knowledge with a personal, white-glove service to make every
              transaction smooth and rewarding.
            </p>
            <ul className="list-unstyled mb-4">
              {[
                "Exclusive and verified listings",
                "Transparent pricing and honest advice",
                "Dedicated agent from first visit to final key",
              ].map((item) => (
                <li key={item} className="d-flex align-items-center gap-2 mb-2 fw-medium">
                  <i className="bi bi-check-circle-fill text-gold"></i>
                  {item}
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn btn-navy btn-lg">
              Talk to an Expert
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}