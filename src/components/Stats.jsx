import { STATS } from "../data/content";

export default function Stats() {
  return (
    <section className="ep-stats py-5" aria-label="Company statistics">
      <div className="container">
        <div className="row text-center g-4">
          {STATS.map((s) => (
            <div className="col-6 col-lg-3" key={s.label}>
              <p className="ep-stat-value mb-1">{s.value}</p>
              <p className="mb-0 text-white-50">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}