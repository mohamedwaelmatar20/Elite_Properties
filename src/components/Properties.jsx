import { PROPERTIES } from "../data/content";

export default function Properties() {
  return (
    <section id="properties" className="py-section bg-light">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: 640 }}>
          <p className="ep-eyebrow">Featured</p>
          <h2 className="ep-heading">Exclusive Properties</h2>
          <p className="text-muted">
            A curated selection of our finest homes available right now.
          </p>
        </div>

        <div className="row g-4">
          {PROPERTIES.map((p) => (
            <div className="col-md-6 col-lg-4" key={p.id}>
              <article className="card ep-card h-100 border-0 shadow-sm">
                <div className="position-relative overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.alt}
                    className="card-img-top ep-card-img"
                    width="600"
                    height="400"
                    loading="lazy"
                  />
                  <span className="badge ep-tag">{p.tag}</span>
                </div>
                <div className="card-body p-4">
                  <p className="text-gold fw-bold fs-5 mb-1">{p.price}</p>
                  <h3 className="h5 ep-heading">{p.title}</h3>
                  <p className="text-muted small mb-3">
                    <i className="bi bi-geo-alt-fill me-1"></i>
                    {p.location}
                  </p>
                  <div className="d-flex justify-content-between border-top pt-3 small">
                    <span><i className="bi bi-door-open me-1"></i>{p.beds} Beds</span>
                    <span><i className="bi bi-droplet me-1"></i>{p.baths} Baths</span>
                    <span><i className="bi bi-aspect-ratio me-1"></i>{p.area}</span>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}