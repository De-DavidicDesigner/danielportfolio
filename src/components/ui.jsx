import { useEffect, useRef } from "react";
import { Linkedin, Github, Instagram, Twitter, Globe } from "lucide-react";

export const SOCIALS = {
  linkedin: [Linkedin, "LinkedIn"],
  github: [Github, "GitHub"],
  instagram: [Instagram, "Instagram"],
  x: [Twitter, "X"],
  website: [Globe, "Website"],
};

export const has = (v) => (Array.isArray(v) ? v.length > 0 : Boolean(v));
export const initials = (name = "") =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

export function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) return el.classList.add("in");
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("in");
          io.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

// Heading sits in a left column on desktop, content on the right.
export function Section({ id, title, children }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="border-t border-line py-16 md:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-8 md:grid-cols-12 md:gap-12">
        <h2
          id={`${id}-title`}
          className="font-display text-2xl font-bold tracking-tight md:sticky md:top-24 md:col-span-3 md:self-start"
        >
          {title}
        </h2>
        <Reveal className="md:col-span-9">{children}</Reveal>
      </div>
    </section>
  );
}
