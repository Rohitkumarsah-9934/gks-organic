import { NavLink } from 'react-router-dom';
import { Home, Info, FileText, BookOpen, MapPin, Mail } from 'lucide-react';

const items = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/about', label: 'About Us', icon: Info },
  { to: '/benefits', label: 'Benefits', icon: FileText },
  { to: '/blog', label: 'Blog', icon: BookOpen },
  { to: '/location', label: 'Location', icon: MapPin },
  { to: '/contact', label: 'Contact', icon: Mail },
];

// Mobile-only bottom navigation (hidden on md+)
export default function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 bg-maroon text-white shadow-[0_-4px_12px_rgba(0,0,0,0.15)] md:hidden">
      <ul className="mx-auto flex max-w-xl items-stretch">
        {items.map(({ to, label, icon: Icon }, i) => (
          <li key={to} className={`flex-1 ${i > 0 ? 'border-l border-white/25' : ''}`}>
            <NavLink
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `flex h-full flex-col items-center gap-1 px-1 py-2.5 text-[11px] font-medium ${
                  isActive ? 'border-b-2 border-yellow-400' : 'border-b-2 border-transparent opacity-90'
                }`
              }
            >
              <Icon className="h-6 w-6" />
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
