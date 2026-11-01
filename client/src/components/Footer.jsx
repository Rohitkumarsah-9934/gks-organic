import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
// import Logo from './Logo.jsx';
import Logo from "../Images/Logo.jpeg";
export default function Footer() {
  return (
    
<footer className="mt-16 bg-leaf-dark text-white">
  <div className="container-page grid grid-cols-1 gap-10 py-10 md:grid-cols-3">

    {/* First Part - Logo & Description */}
    <div className="flex flex-col items-center md:items-start">
      <Link to="/">
        <img
          src={Logo}
          alt="GKS Organic Logo"
          className="h-[120px] w-auto object-contain"
        />
      </Link>

      <p className="mt-4 max-w-xs text-center text-sm text-white/80 md:text-left">
        A natural way for a healthier life. Pure, high-quality and
        eco-friendly food products.
      </p>
    </div>

    {/* Second Part - Quick Links */}
    <div>
      <h4 className="mb-4 font-serif text-lg font-semibold">
        Quick Links
      </h4>

      <ul className="grid grid-cols-2 gap-3 text-sm text-white/85">
        <li><Link to="/about" className="hover:underline">About Us</Link></li>
        <li><Link to="/benefits" className="hover:underline">Benefits</Link></li>
        <li><Link to="/blog" className="hover:underline">Blog & Articles</Link></li>
        <li><Link to="/location" className="hover:underline">Our Location</Link></li>
        <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
      </ul>
    </div>

    {/* Third Part - Get in Touch */}
    <div>
      <h4 className="mb-4 font-serif text-lg font-semibold">
        Get in Touch
      </h4>

      <ul className="space-y-3 text-sm text-white/85">
        <li className="flex items-start gap-2">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
          Jaipur, Rajasthan, India
        </li>

        <li className="flex items-center gap-2">
          <Phone className="h-4 w-4 shrink-0" />
          +91 7079816996
        </li>

        <li className="flex items-center gap-2">
          <Mail className="h-4 w-4 shrink-0" />
          support.gks@gmail.com
        </li>
      </ul>
    </div>

  </div>

  {/* Copyright */}
  <div className="border-t border-white/15 py-4 text-center text-xs text-white/70">
    © {new Date().getFullYear()} GKS Organic. All rights reserved.
  </div>
</footer>

  );
}
