import p1 from "../assets/3.png";
import p2 from "../assets/4.png";
import p3 from "../assets/5.png";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Properties", href: "#properties" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const STATS = [
  { value: "15+", label: "Years of Experience" },
  { value: "850+", label: "Properties Sold" },
  { value: "1,200+", label: "Happy Clients" },
  { value: "25", label: "Prime Locations" },
];

export const PROPERTIES = [
  {
    id: 1,
    image: p1,
    alt: "Luxury penthouse with skyline view",
    tag: "For Sale",
    title: "Skyline Luxury Penthouse",
    location: "Downtown, New Cairo",
    price: "$1,250,000",
    beds: 3,
    baths: 3,
    area: "2,400 sq ft",
  },
  {
    id: 2,
    image: p2,
    alt: "Modern villa with private garden and pool",
    tag: "For Sale",
    title: "Royal Garden Villa",
    location: "Palm Hills Estate",
    price: "$2,100,000",
    beds: 5,
    baths: 4,
    area: "5,100 sq ft",
  },
  {
    id: 3,
    image: p3,
    alt: "Modern sea-view apartment interior",
    tag: "For Rent",
    title: "Modern Sea-View Apartment",
    location: "Marina Bay",
    price: "$4,500 / month",
    beds: 2,
    baths: 2,
    area: "1,650 sq ft",
  },
];

export const SERVICES = [
  {
    icon: "bi-house-door",
    title: "Buy a Property",
    text: "Hand-picked villas and apartments matched to your lifestyle and budget.",
  },
  {
    icon: "bi-graph-up-arrow",
    title: "Sell with Confidence",
    text: "Professional valuation, premium marketing and expert negotiation.",
  },
  {
    icon: "bi-key",
    title: "Rent & Manage",
    text: "Full property management so your investment works while you relax.",
  },
  {
    icon: "bi-bar-chart-line",
    title: "Investment Advice",
    text: "Market insights and ROI analysis to grow your property portfolio.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    role: "Villa Owner",
    text: "Elite Properties made selling our home effortless. Professional, fast and transparent from day one.",
  },
  {
    name: "Ahmed Hassan",
    role: "Property Investor",
    text: "Their market knowledge is outstanding. I closed three profitable deals in one year.",
  },
  {
    name: "Laura Mitchell",
    role: "First-time Buyer",
    text: "They listened to everything I needed and found my dream apartment within two weeks.",
  },
];