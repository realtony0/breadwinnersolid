import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const navItems = [
  { to: '/', label: 'Accueil' },
  { to: '/shop', label: 'Shop' },
  { to: '/lookbook', label: 'Lookbook' },
  { to: '/about', label: 'À propos' },
];

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const { itemCount, toggleCart } = useCart();

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

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleCart}
            className="relative hidden rounded-full border border-white/30 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3rem] text-white transition hover:border-white md:inline-flex"
          >
            Panier
            {itemCount > 0 && (
              <span className="ml-3 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-white text-[0.65rem] font-bold text-brand-green">
                {itemCount}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={toggleCart}
            className="relative flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-white transition hover:border-white md:hidden"
            aria-label="Ouvrir le panier"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              className="h-5 w-5"
            >
              <path d="M6 7l1.5 12h9L18 7H6z" />
              <path d="M9 7a3 3 0 0 1 6 0" />
            </svg>
            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-white text-[0.65rem] font-bold text-brand-green">
                {itemCount}
              </span>
            )}
          </button>

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
