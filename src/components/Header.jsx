import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Accueil' },
  { to: '/shop', label: 'Shop' },
  { to: '/lookbook', label: 'Lookbook' },
  { to: '/about', label: 'À propos' },
];

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, [open]);

  return (
    <header
      className={`relative z-20 w-full transform bg-brand-green px-6 py-4 text-white shadow-lg transition-all duration-700 ease-out md:px-8 md:py-6 ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 font-semibold tracking-[0.2rem] md:text-lg">
          <span className="uppercase">BREADWINNER</span>
          <img src="/shots/logo1.jpg" alt="Breadwinner logo" className="h-6 w-auto object-contain" />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium uppercase tracking-wide md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `relative transition-colors duration-300 ease-in-out ${
                  isActive ? 'text-white' : 'text-white/80 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-white/20 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 h-[2px] w-full bg-white transition-all duration-300 ${
                open ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'
              }`}
            />
            <span
              className={`absolute left-0 h-[2px] w-full bg-white transition-all duration-300 ${
                open ? 'opacity-0' : 'top-1/2 -translate-y-1/2'
              }`}
            />
            <span
              className={`absolute left-0 h-[2px] w-full bg-white transition-all duration-300 ${
                open ? 'bottom-1/2 translate-y-1/2 -rotate-45' : 'bottom-0'
              }`}
            />
          </span>
        </button>
      </div>

      <nav
        className={`md:hidden transition-all duration-500 ease-out ${
          open ? 'pointer-events-auto mt-4 max-h-60 opacity-100' : 'pointer-events-none max-h-0 opacity-0'
        }`}
      >
        <ul className="space-y-3 rounded-lg border border-white/10 bg-brand-green/95 px-6 py-5 text-sm font-medium uppercase tracking-wide">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block w-full transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-white/80 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
