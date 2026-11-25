import { TESTIMONIALS } from "../data/content";

export default function Testimonials() {
  return (
    <section className="py-section ep-dark">
      <div className="container">
        <div className="text-center mb-5">
          <p className="ep-eyebrow">Testimonials</p>
          <h2 className="text-white ep-heading">What Our Clients Say</h2>
        </div>

        <div className="row g-4">
          {TESTIMONIALS.map((t) => (
            <div className="col-lg-4" key={t.name}>
              <figure className="ep-testimonial h-100 mb-0 p-4">
                <div className="text-gold mb-3" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="bi bi-star-fill me-1"></i>
                  ))}
                </div>
                <blockquote className="fst-italic text-white-50">“{t.text}”</blockquote>
                <figcaption className="d-flex align-items-center gap-3 mt-4">
                  <span className="ep-avatar">{t.name[0]}</span>
                  <span>
                    <strong className="d-block text-white">{t.name}</strong>
                    <small className="text-gold-light">{t.role}</small>
                  </span>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}