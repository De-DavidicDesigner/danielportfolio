import { ArrowRight, Code2, MapPin, Palette } from "lucide-react";
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
    <section
      id="top"
      className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36"
    >
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <div
        aria-hidden="true"
        className="glow absolute -right-40 -top-40 h-[36rem] w-[36rem]"
      />
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

        <div className="relative order-1 mx-auto w-full max-w-80 sm:max-w-sm md:order-2 md:col-span-5 md:max-w-md">
          <div aria-hidden="true" className="glow absolute inset-[-18%]" />
          {/* Slow-turning orbit ring around the portrait */}
          <div
            aria-hidden="true"
            className="spin-slow absolute bottom-[-6%] left-1/2 aspect-square w-full -translate-x-1/2 rounded-full border-2 border-dashed border-accent/35"
          />
          {/* Stage: solid accent disc + cut-out portrait whose head breaks out of the top.
              The whole stage fades into the page at the bottom. */}
          <div className="photo-fade relative -mx-12 -mt-12 px-12 pt-12">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-1/2 aspect-square w-[86%] -translate-x-1/2 rounded-full bg-linear-to-br from-accent via-accent/80 to-accent/30 shadow-[inset_0_-30px_60px_-20px_rgb(0_0_0/0.35),0_0_80px_-10px_var(--accent)]"
              />
              {profileImage ? (
                <img
                  src={profileImage}
                  alt={`Portrait of ${name}`}
                  className="portrait-bold relative mx-auto w-full"
                />
              ) : (
                <div
                  role="img"
                  aria-label={`Initials of ${name}`}
                  className="relative flex aspect-square items-center justify-center font-display text-8xl font-bold text-on-accent"
                >
                  {initials(name)}
                </div>
              )}
            </div>
          </div>
          {stat && (
            <div className="float absolute bottom-[16%] left-0 z-10 rounded-2xl border border-line bg-surface/80 px-4 py-3 shadow-2xl backdrop-blur-md sm:-left-8">
              <p className="font-display text-4xl font-bold leading-none tracking-tight">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-medium text-muted">
                {stat.label}
              </p>
            </div>
          )}
          <div className="float-delayed absolute right-0 top-[22%] z-10 hidden items-center sm:flex gap-2 rounded-full border border-line bg-surface/80 py-2 pl-2 pr-3.5 text-xs font-semibold shadow-2xl backdrop-blur-md sm:-right-6">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-on-accent">
              <Code2 size={14} aria-hidden="true" />
            </span>
            Code
            <span className="text-muted">&amp;</span>
            <Palette size={14} aria-hidden="true" className="text-accent" />
            Design
          </div>
        </div>
      </div>
    </section>
  );
}
