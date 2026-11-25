import { useEffect } from "react";
import logo from "../assets/logo.png";

const SITE_URL = "https://mohamedwaelmatar20.github.io/Elite_Properties/";  
const TITLE = "Elite Properties | Luxury Villas, Penthouses & Apartments";
const DESCRIPTION =
  "Elite Properties offers exclusive luxury villas, penthouses and apartments for sale and rent. Expert real estate advice, verified listings and personal service.";
const OG_IMAGE = `${SITE_URL}og-image.jpg`; // الملف في مجلد public

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Elite Properties",
  url: SITE_URL,
  logo: OG_IMAGE,
  image: OG_IMAGE,
  description:
    "Luxury real estate agency offering villas, penthouses and apartments for sale and rent.",
  telephone: "+20-100-000-0000",
  email: "info@eliteproperties.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Business Avenue",
    addressLocality: "New Cairo",
    addressCountry: "EG",
  },
  openingHours: "Su-Th 09:00-18:00",
};

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel, href, type) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
  if (type) el.setAttribute("type", type);
}

export default function SEO() {
  useEffect(() => {
    document.title = TITLE;

    setMeta("name", "description", DESCRIPTION);
    setMeta("name", "robots", "index, follow");
    setMeta("name", "theme-color", "#0b1f3a");

    // Open Graph
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", "Elite Properties");
    setMeta("property", "og:title", TITLE);
    setMeta("property", "og:description", DESCRIPTION);
    setMeta("property", "og:url", SITE_URL);
    setMeta("property", "og:image", OG_IMAGE);

    // Twitter
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", TITLE);
    setMeta("name", "twitter:description", DESCRIPTION);
    setMeta("name", "twitter:image", OG_IMAGE);

    // Canonical + favicon (الشعار من src/assets)
    setLink("canonical", SITE_URL);
    setLink("icon", logo, "image/png");

    // Structured data (JSON-LD)
    let script = document.getElementById("ld-json");
    if (!script) {
      script = document.createElement("script");
      script.id = "ld-json";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(STRUCTURED_DATA);
  }, []);

  return null;
}