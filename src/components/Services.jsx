import { SERVICES } from "../data/content";

export default function Services() {
  return (
    <section id="services" className="py-section">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: 640 }}>
          <p className="ep-eyebrow">What We Do</p>
          <h2 className="ep-heading">Services Built Around You</h2>
          <p className="text-muted">
            From the first search to the final signature, we handle everything.
          </p>
        </div>

        <div className="row g-4">
          {SERVICES.map((s) => (
            <div className="col-sm-6 col-lg-3" key={s.title}>
              <div className="ep-service h-100 text-center p-4">
                <div className="ep-service-icon mx-auto mb-3">
                  <i className={`bi ${s.icon}`}></i>
                </div>
                <h3 className="h5 ep-heading">{s.title}</h3>
                <p className="text-muted mb-0">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}