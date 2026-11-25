import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="ep-footer py-4">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        <div className="d-flex align-items-center gap-2">
          <img src={logo} alt="" width="34" height="34" />
          <span className="ep-brand">
            Elite <span>Properties</span>
          </span>
        </div>
        <small className="text-white-50">
          © {new Date().getFullYear()} Elite Properties. All rights reserved.
        </small>
      </div>
    </footer>
  );
}