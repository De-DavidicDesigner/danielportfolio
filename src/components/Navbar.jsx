import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { has } from "./ui";
import { Link } from "../lib/router";
import { useTheme } from "../lib/theme";

function ThemeToggle() {
  const { mode, toggle } = useTheme();
  const dark = mode === "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Light mode" : "Dark mode"}
      className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-line text-ink transition hover:border-accent hover:text-accent"
    >
      <Sun
        size={18}
        aria-hidden="true"
        className={`absolute transition duration-500 ${dark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}`}
      />
      <Moon
        size={18}
        aria-hidden="true"
        className={`absolute transition duration-500 ${dark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}`}
      />
    </button>
  );
}

export default function Navbar({ profile, path }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const links = [
    has(profile.bio) && ["/#about", "About"],
    (has(profile.services) || has(profile.skills)) && ["/#services", "What I Do"],
    (has(profile.experience) ||
      has(profile.achievements) ||
      has(profile.stats)) && ["/#experience", "Experience"],
    has(profile.projects) && ["/projects", "Projects"],
  ].filter(Boolean);

  const linkClass = (to) =>
    to === path
      ? "text-ink"
      : "text-muted transition-colors hover:text-ink";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${scrolled || open ? "border-line bg-paper/80 backdrop-blur-lg" : "border-transparent"}`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8"
      >
        <Link
          to="/"
          className="min-w-0 truncate font-display text-lg font-bold tracking-tight"
        >
          {profile.name}
          <span className="text-accent">.</span>
        </Link>
        <ul className="hidden items-center gap-8 text-sm md:flex">
          {links.map(([to, label]) => (
            <li key={to}>
              <Link
                to={to}
                aria-current={to === path ? "page" : undefined}
                className={linkClass(to)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex shrink-0 items-center gap-3">
          <ThemeToggle />
          <Link to="/#contact" className="btn-primary hidden py-2.5 md:inline-flex">
            Let's Connect
          </Link>
          <button
            type="button"
            className="-mr-2 p-2 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <X size={24} aria-hidden="true" />
            ) : (
              <Menu size={24} aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-line bg-paper px-5 pb-6 md:hidden"
        >
          <ul className="divide-y divide-line">
            {[...links, ["/#contact", "Contact"]].map(([to, label]) => (
              <li key={to}>
                <Link
                  to={to}
                  onClick={() => setOpen(false)}
                  className="block py-3.5 text-base font-medium"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
