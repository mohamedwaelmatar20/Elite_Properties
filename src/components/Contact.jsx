import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // لاحقاً: اربطه بـ Formspree أو EmailJS هنا
    setSent(true);
    e.target.reset();
  };

  return (
    <section id="contact" className="py-section">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-5">
            <p className="ep-eyebrow">Get in Touch</p>
            <h2 className="ep-heading mb-3">Let’s Find Your Dream Property</h2>
            <p className="text-muted mb-4">
              Send us a message and one of our agents will contact you within 24 hours.
            </p>

            <address className="mb-4">
              <p className="mb-2">
                <i className="bi bi-telephone-fill text-gold me-2"></i>
                <a href="tel:+201000000000" className="text-reset text-decoration-none">
                  +20 100 000 0000
                </a>
              </p>
              <p className="mb-2">
                <i className="bi bi-envelope-fill text-gold me-2"></i>
                <a href="mailto:info@eliteproperties.com" className="text-reset text-decoration-none">
                  info@eliteproperties.com
                </a>
              </p>
              <p className="mb-2">
                <i className="bi bi-geo-alt-fill text-gold me-2"></i>
                123 Business Avenue, New Cairo
              </p>
              <p className="mb-0">
                <i className="bi bi-clock-fill text-gold me-2"></i>
                Sun – Thu, 9:00 AM – 6:00 PM
              </p>
            </address>

            <a
              href="https://wa.me/201000000000"
              target="_blank"
              rel="noreferrer"
              className="btn btn-gold btn-lg"
            >
              <i className="bi bi-whatsapp me-2"></i>Chat on WhatsApp
            </a>
          </div>

          <div className="col-lg-7">
            <form className="ep-form p-4 p-md-5 rounded-4 shadow-sm" onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">Full name</label>
                  <input id="name" type="text" className="form-control" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input id="email" type="email" className="form-control" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="phone" className="form-label">Phone</label>
                  <input id="phone" type="tel" className="form-control" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="interest" className="form-label">I’m interested in</label>
                  <select id="interest" className="form-select" defaultValue="Buying">
                    <option>Buying</option>
                    <option>Selling</option>
                    <option>Renting</option>
                  </select>
                </div>
                <div className="col-12">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea id="message" rows="4" className="form-control" required></textarea>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-gold btn-lg w-100">
                    Send Message
                  </button>
                </div>
              </div>

              {sent && (
                <div className="alert alert-success mt-4 mb-0" role="status">
                  Thank you! We’ll get back to you shortly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}