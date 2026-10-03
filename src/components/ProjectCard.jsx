import { ArrowUpRight, Github } from "lucide-react";
import { has } from "./ui";

const isUrl = (v) => /^https?:\/\//.test(v || "");

// Shown until a real screenshot is added: a little browser window in the accent colour.
function Placeholder({ title }) {
  return (
    <div aria-hidden="true" className="relative h-full w-full overflow-hidden bg-accent-soft">
      <div className="glow absolute -right-1/4 -top-1/3 h-[140%] w-[90%]" />
      <div className="absolute inset-x-[10%] bottom-0 top-[14%] rounded-t-lg border border-b-0 border-accent/30 bg-surface/80 shadow-2xl backdrop-blur-sm transition-transform duration-500 group-hover:-translate-y-2">
        <div className="flex gap-1.5 border-b border-line px-3 py-2.5">
          <span className="h-2 w-2 rounded-full bg-accent/50" />
          <span className="h-2 w-2 rounded-full bg-accent/30" />
          <span className="h-2 w-2 rounded-full bg-accent/20" />
        </div>
        <div className="space-y-2.5 p-4">
          <p className="truncate font-display text-lg font-bold text-accent sm:text-xl">{title}</p>
          <div className="h-2 w-3/4 rounded-full bg-ink/10" />
          <div className="h-2 w-1/2 rounded-full bg-ink/10" />
          <div className="grid grid-cols-3 gap-2 pt-2">
            <div className="h-10 rounded bg-accent/15" />
            <div className="h-10 rounded bg-accent/10" />
            <div className="h-10 rounded bg-accent/15" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectCard({ project: p, wide = false }) {
  const live = isUrl(p.liveUrl) ? p.liveUrl : "";
  const repo = isUrl(p.repoUrl) ? p.repoUrl : "";
  const ext = { target: "_blank", rel: "noopener noreferrer" };

  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-xl border border-line bg-surface transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_24px_60px_-30px_var(--accent)] ${wide ? "md:col-span-2" : ""}`}
    >
      <div className={`relative aspect-16/10 overflow-hidden ${wide ? "md:aspect-21/9" : ""}`}>
        {p.image ? (
          <img
            src={p.image}
            alt={`Screenshot of ${p.title}`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
          />
        ) : (
          <Placeholder title={p.title} />
        )}
        {live && (
          <div className="pointer-events-none absolute inset-0 flex items-end justify-end bg-linear-to-t from-paper/70 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1.5 text-xs font-semibold text-on-accent">
              Visit site <ArrowUpRight size={14} aria-hidden="true" />
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="flex items-center gap-2 text-xs font-medium text-muted">
          {p.category && <span className="text-accent">{p.category}</span>}
          {p.category && p.year && <span aria-hidden="true">·</span>}
          {p.year && <span>{p.year}</span>}
        </p>
        <h3 className="mt-2 font-display text-xl font-bold tracking-tight">
          {live ? (
            // Stretched link: the whole card opens the live site.
            <a href={live} {...ext} className="after:absolute after:inset-0 focus-visible:outline-none">
              {p.title}
            </a>
          ) : (
            p.title
          )}
        </h3>
        <p className="mt-2 leading-relaxed text-muted">{p.description}</p>
        {has(p.tools) && (
          <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Built with">
            {p.tools.map((t) => (
              <li key={t} className="rounded-full border border-line bg-paper px-2.5 py-0.5 text-xs text-muted">
                {t}
              </li>
            ))}
          </ul>
        )}
        <div className="relative z-10 mt-auto flex flex-wrap items-center gap-4 pt-6 text-sm font-semibold">
          {live ? (
            <a href={live} {...ext} className="inline-flex items-center gap-1 text-accent hover:underline">
              Live site<span className="sr-only">: {p.title}</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          ) : (
            <span className="text-muted">Live link coming soon</span>
          )}
          {repo && (
            <a href={repo} {...ext} className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-ink">
              <Github size={16} aria-hidden="true" />
              Code<span className="sr-only">: {p.title}</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
