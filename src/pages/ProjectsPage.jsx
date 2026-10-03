import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Search, X } from "lucide-react";
import { Link } from "../lib/router";
import { Reveal } from "../components/ui";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage({ profile }) {
  const { projects = [], name } = profile;
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  useEffect(() => {
    document.title = `Projects | ${name}`;
  }, [name]);

  const categories = useMemo(() => {
    const counts = new Map();
    projects.forEach((p) => p.category && counts.set(p.category, (counts.get(p.category) || 0) + 1));
    return [["All", projects.length], ...counts];
  }, [projects]);

  const q = query.trim().toLowerCase();
  const visible = projects.filter(
    (p) =>
      (category === "All" || p.category === category) &&
      (!q ||
        [p.title, p.description, p.category, ...(p.tools || [])]
          .join(" ")
          .toLowerCase()
          .includes(q)),
  );

  return (
    <>
      <header className="relative overflow-hidden pb-12 pt-28 md:pb-16 md:pt-36">
        <div aria-hidden="true" className="bg-dots absolute inset-0" />
        <div aria-hidden="true" className="glow absolute -top-40 left-1/2 h-96 w-[48rem] -translate-x-1/2" />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink">
            <ArrowLeft size={16} aria-hidden="true" /> Back home
          </Link>
          <p className="eyebrow mt-8">Portfolio</p>
          <h1 className="mt-3 font-display text-5xl font-bold tracking-tighter sm:text-7xl">
            Projects<span className="text-accent">.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            A collection of things I've designed and built. Each card links to the live site so you can try it for yourself.
          </p>
        </div>
      </header>

      <section aria-label="All projects" className="pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-col gap-4 border-y border-line py-4 md:flex-row md:items-center md:justify-between">
            {categories.length > 2 && (
              <div role="group" aria-label="Filter by category" className="-mx-1 flex flex-wrap gap-2">
                {categories.map(([c, count]) => {
                  const active = c === category;
                  return (
                    <button
                      key={c}
                      type="button"
                      aria-pressed={active}
                      onClick={() => setCategory(c)}
                      className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition ${active ? "border-accent bg-accent text-on-accent" : "border-line text-muted hover:border-ink/40 hover:text-ink"}`}
                    >
                      {c} <span className={active ? "opacity-70" : "opacity-60"}>{count}</span>
                    </button>
                  );
                })}
              </div>
            )}
            <label className="relative block md:ml-auto md:w-72">
              <span className="sr-only">Search projects</span>
              <Search size={16} aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name or tool…"
                className="w-full rounded-full border border-line bg-surface py-2 pl-9 pr-4 text-sm placeholder:text-muted focus:border-accent focus:outline-none"
              />
            </label>
          </div>

          <p className="mt-6 text-sm text-muted" aria-live="polite">
            Showing {visible.length} of {projects.length} project{projects.length === 1 ? "" : "s"}
          </p>

          {visible.length > 0 ? (
            <Reveal className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((p) => (
                <ProjectCard key={p.title} project={p} />
              ))}
            </Reveal>
          ) : (
            <div className="mt-6 rounded-xl border border-dashed border-line px-6 py-16 text-center">
              <p className="font-display text-xl font-bold">No projects match that.</p>
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setCategory("All");
                }}
                className="btn-secondary mt-5"
              >
                <X size={16} aria-hidden="true" /> Clear filters
              </button>
            </div>
          )}

          <div className="relative mt-20 overflow-hidden rounded-2xl border border-line bg-surface px-6 py-12 text-center sm:px-12">
            <div aria-hidden="true" className="glow absolute -bottom-32 left-1/2 h-64 w-[36rem] -translate-x-1/2" />
            <h2 className="relative font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Like what you see?
            </h2>
            <p className="relative mx-auto mt-3 max-w-md text-muted">
              I'm available for freelance work. Let's build something good together.
            </p>
            <Link to="/#contact" className="btn-primary relative mt-7">
              Get in touch <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
