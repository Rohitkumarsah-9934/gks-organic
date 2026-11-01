import { Link } from "react-router-dom";
import {
  Leaf,
  ShieldCheck,
  HeartPulse,
  Recycle,
  Building2,
  MapPin,
  BookOpen,
  Phone,
  ArrowRight,
  Sprout,
} from "lucide-react";
import SectionTitle from "../components/SectionTitle.jsx";
import bannerImage from "../Images/banner.jpeg";
import pureNatural from "../Images/pureNatural.jpeg";
import Quality from "../Images/Quality.jpeg";
import Health from "../Images/Health.jpeg";
import ecoImg from "../Images/Eco.jpeg";
import AboutImage from "../Images/AboutImage.jpeg";
import SupperfoodImage from "../Images/SupperFood.jpeg";
import mobileBannerImage from "../Images/SupperFoodMobile.jpeg";

const highlights = [
  { label: "Pure & Natural", image: pureNatural },
  { label: "High Quality", image: Quality },
  { label: "Better Health", image: Health },
  { label: "Eco-Friendly", image: ecoImg },
];

const services = [
  { label: "Company Details", icon: Building2, to: "/about" },
  { label: "Our Location", icon: MapPin, to: "/location" },
  { label: "Blog & Articles", icon: BookOpen, to: "/blog" },
  { label: "Contact Us", icon: Phone, to: "/contact" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      {/* <section className="relative overflow-hidden bg-gradient-to-br from-lime-100 via-green-50 to-emerald-100">
        <div className="pointer-events-none absolute -left-10 top-10 h-48 w-48 rounded-full bg-lime-200/60 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-green-300/50 blur-3xl" />
        <div className="container-page relative grid items-center gap-6 py-10 sm:py-14 md:grid-cols-2">
          <div>
            <h1 className="font-serif text-4xl font-bold text-leaf-dark sm:text-5xl lg:text-6xl">GKS Organic</h1>
            <p className="mt-4 font-serif text-2xl text-gray-900 sm:text-3xl">
              A Natural Way
              <br />
              for a{' '}
              <span className="relative inline-block font-script text-4xl font-bold italic text-maroon sm:text-5xl">
                Healthier Life
                <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-maroon" />
              </span>
            </p>
            <Link to="/about" className="btn-primary mt-8">
              About Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative mx-auto flex h-64 w-full max-w-sm items-end justify-center sm:h-80">
            <Sprout className="h-48 w-48 text-leaf drop-shadow-lg sm:h-60 sm:w-60" strokeWidth={1.4} />
            <div className="absolute bottom-0 h-16 w-3/4 rounded-t-full bg-gradient-to-t from-amber-900 to-amber-800/80" />
            <div className="absolute right-0 top-4 flex h-24 w-24 flex-col items-center justify-center rounded-full border-2 border-leaf bg-white text-center shadow-lg sm:h-28 sm:w-28">
              <Leaf className="h-5 w-5 fill-leaf text-leaf" />
              <span className="text-lg font-bold leading-tight text-leaf-dark">100%</span>
              <span className="text-xs font-semibold text-leaf-dark">Natural</span>
            </div>
          </div>
        </div>
      </section> */}

      <div className="  w-full  m-0 p-0 overflow-hidden">
        <img
          src={bannerImage}
          alt="GKS Organic Banner"
          className="w-full h-auto block *:object-cover "
        />
      </div>

      {/* HIGHLIGHTS */}
      <section className="container-page py-10">
        <div className="flex w-full items-center gap-2">
          <span className="h-[2px] min-w-0 flex-1 bg-[#8b2635]"></span>

          <h2 className="shrink-0 whitespace-nowrap font-serif text-2xl font-bold text-green-900">
            Our Highlights
          </h2>

          <span className="h-[2px] min-w-0 flex-1 bg-[#8b2635]"></span>
        </div>
      </section>

      {/* ABOUT TEASER */}
      {/* <section className="bg-gradient-to-r from-rose-50 to-cream">
        <div className="container-page grid items-center gap-6 py-10 sm:grid-cols-2">
          <div className="flex justify-center text-8xl sm:text-9xl" aria-hidden="true">
            🥬
          </div>
          <div>
            <h2 className="font-serif text-3xl font-bold text-maroon">About GKS Organic</h2>
            <p className="mt-3 text-gray-700">
              We are committed to bringing the goodness of nature to your life with high-quality, natural and healthy food products.
            </p>
            <Link to="/about" className="btn-primary mt-5">
              Know More <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section> */}
      <div className="  w-full  m-0 p-0 overflow-hidden">
        <img
          src={AboutImage}
          alt="GKS Organic About"
          className="w-full h-auto block *:object-cover "
        />
      </div>

      {/* SERVICES */}
      <section className="container-page py-10">
        <div className="flex w-full items-center gap-2">
          <span className="h-[2px] min-w-0 flex-1 bg-[#8b2635]"></span>

          <h2 className="shrink-0 whitespace-nowrap font-serif text-2xl font-bold text-green-900">
            Our Services
          </h2>

          <span className="h-[2px] min-w-0 flex-1 bg-[#8b2635]"></span>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
          {services.map(({ label, icon: Icon, to }) => (
            <Link
              key={label}
              to={to}
              className="group flex flex-col items-center gap-3 text-center"
            >
              <span className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-leaf/40 bg-leaf-soft transition group-hover:bg-leaf group-hover:text-white sm:h-24 sm:w-24">
                <Icon className="h-9 w-9 text-leaf group-hover:text-white" />
              </span>
              <span className="text-sm font-medium text-gray-900 sm:text-base">
                {label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* SUPERFOOD BANNER */}
      <div className="w-full m-0 p-0 overflow-hidden">
  <picture>
    <source
      media="(max-width: 639px)"
      srcSet={mobileBannerImage}
    />

    <img
      src={SupperfoodImage}
      alt="GKS Organic Banner"
      className="w-full h-[420px] sm:h-auto object-fill block"
    />
  </picture>
</div>
    </>
  );
}
