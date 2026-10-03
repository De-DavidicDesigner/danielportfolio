import { ArrowRight, MapPin } from "lucide-react";
import { has, initials } from "./ui";
import { Link } from "../lib/router";

export default function Hero({ profile }) {
  const {
    name,
    title,
    tagline,
    location,
    availability,
    profileImage,
    projects,
    stats,
  } = profile;
  const stat = has(stats) ? stats[0] : null;
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <div aria-hidden="true" className="glow absolute -right-40 -top-40 h-[36rem] w-[36rem]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 md:grid-cols-12 md:gap-8">
        <div className="order-2 md:order-1 md:col-span-7">
          {availability && (
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1 text-xs font-medium text-muted backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {availability}
            </p>
          )}
          <p className="mt-6 text-base text-muted">Hello, I'm</p>
          <h1 className="mt-2 wrap-break-word font-display text-5xl font-bold leading-[0.95] tracking-tighter sm:text-7xl lg:text-8xl">
            {name}
          </h1>
          <p className="mt-5 font-display text-xl font-medium text-accent sm:text-2xl">
            {title}
          </p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            {tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">
              Let's Work Together
            </a>
            {has(projects) && (
              <Link to="/projects" className="btn-secondary">
                View My Work <ArrowRight size={16} aria-hidden="true" />
              </Link>
            )}
          </div>
          {location && (
            <p className="mt-8 inline-flex items-center gap-1.5 text-sm text-muted">
              <MapPin size={16} aria-hidden="true" />
              {location}
            </p>
          )}
        </div>

        <div className="relative order-1 mx-auto w-full max-w-72 sm:max-w-sm md:order-2 md:col-span-5 md:max-w-md">
          {/* Accent halo the cut-out portrait sits on; it fades into the page at the bottom. */}
          <div aria-hidden="true" className="glow absolute inset-x-[-15%] bottom-[-5%] top-[5%]" />
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-1/2 aspect-square w-[88%] -translate-x-1/2 rounded-full border border-accent/25 bg-linear-to-b from-accent/25 to-transparent"
          />
          {profileImage ? (
            <img
              src={profileImage}
              alt={`Portrait of ${name}`}
              className="photo-fade relative mx-auto w-full drop-shadow-[0_20px_40px_rgb(0_0_0/0.35)]"
            />
          ) : (
            <div
              role="img"
              aria-label={`Initials of ${name}`}
              className="relative flex aspect-square items-center justify-center font-display text-8xl font-bold text-accent"
            >
              {initials(name)}
            </div>
          )}
          {stat && (
            <div className="absolute bottom-[14%] left-0 rounded-2xl border border-line bg-surface/75 px-4 py-3 shadow-xl backdrop-blur-md sm:-left-6">
              <p className="font-display text-3xl font-bold leading-none tracking-tight">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-muted">{stat.label}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
