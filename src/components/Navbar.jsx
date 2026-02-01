import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/solutions", label: "Solutions" },
  { to: "/pricing", label: "Pricing" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="pointer-events-none absolute -inset-2 rounded-2xl bg-techBlue/20 blur-xl" />
            <img
              src="/logo.png"
              alt="IT DATA SPARK"
              className="relative h-10 w-10 rounded-xl border border-white/10 bg-black/40 object-contain"
            />
          </div>

          <div className="relative leading-tight">
            <div className="text-lg font-extrabold tracking-widest">
              <span className="text-sparkGold">IT</span>
              <span className="text-techBlue"> DATA</span>
              <span className="text-white"> SPARK</span>
            </div>

            <div className="spark-underline mt-1 h-[3px] w-40 rounded-full bg-white/10 overflow-hidden">
              <span className="spark-underline__beam" />
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm tracking-wide transition ${
                  isActive
                    ? "text-techBlue"
                    : "text-white/70 hover:text-techBlue"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
