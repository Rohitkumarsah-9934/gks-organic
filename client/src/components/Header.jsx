import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Search, Mail } from 'lucide-react';
// import Logo from './Logo.jsx';
import Logo from "../Images/Logo.jpeg";

export const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/benefits', label: 'Benefits' },
  { to: '/blog', label: 'Blog' },
  { to: '/location', label: 'Location' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="container-page relative flex items-center justify-between py-3">
        {/* mobile: hamburger | desktop: logo */}
        <button
          className="rounded-lg p-1 text-gray-900 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={open}
        >
          {open ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
        </button>

      <Link
  to="/"
  className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
  onClick={() => setOpen(false)}
>
  <img
    src={Logo}
    alt="Logo"
    className="h-10 sm:h-20 w-auto object-contain"
  />
</Link>

        {/* desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === '/'}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive ? 'bg-maroon text-white' : 'text-gray-700 hover:bg-leaf-light'
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3 text-gray-900">
          <Link to="/blog" aria-label="Search blog" className="rounded-lg p-1 hover:text-maroon">
            <Search className="h-7 w-7" />
          </Link>
          <Link to="/contact" aria-label="Contact" className="rounded-lg p-1 hover:text-maroon">
            <Mail className="h-7 w-7" />
          </Link>
        </div>
      </div>

      {/* mobile drawer */}
      {open && (
        <nav className="border-t border-gray-100 bg-white md:hidden">
          <ul className="container-page grid gap-1 py-3">
            {navItems.map((n) => (
              <li key={n.to}>
                <NavLink
                  to={n.to}
                  end={n.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3 font-medium ${isActive ? 'bg-maroon text-white' : 'text-gray-800 hover:bg-leaf-light'}`
                  }
                >
                  {n.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
