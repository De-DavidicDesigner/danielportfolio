import { Award } from "lucide-react";
import { Section, has } from "./ui";

export default function Experience({
  profile: { stats = [], experience = [], achievements = [] },
}) {
  const both = has(experience) && has(achievements);
  const title = both
    ? "Experience and achievements"
    : has(experience)
      ? "Experience"
      : "Achievements";
  return (
    <Section id="experience" title={title}>
      {has(stats) && (
        <ul className="mb-12 grid grid-cols-2 gap-6 sm:grid-cols-3">
          {stats.map(({ value, label }) => (
            <li key={label} className="border-l-2 border-accent pl-4">
              <p className="font-display text-4xl font-bold tracking-tight">
                {value}
              </p>
              <p className="mt-1 text-sm text-muted">{label}</p>
            </li>
          ))}
        </ul>
      )}
      <div className={`grid gap-12 ${both ? "xl:grid-cols-2" : ""}`}>
        {has(experience) && (
          <ol className="space-y-8 border-l border-line pl-6">
            {experience.map((e) => (
              <li key={e.role + e.org} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-7.5 top-2 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-paper"
                />
                {e.period && <p className="text-sm text-muted">{e.period}</p>}
                <h3 className="mt-0.5 font-display text-lg font-bold">
                  {e.role}
                </h3>
                {e.org && (
                  <p className="text-sm font-medium text-accent">{e.org}</p>
                )}
                {e.description && (
                  <p className="mt-2 leading-relaxed text-muted">
                    {e.description}
                  </p>
                )}
              </li>
            ))}
          </ol>
        )}
        {has(achievements) && (
          <ul className="divide-y divide-line border-y border-line self-start">
            {achievements.map((a) => (
              <li key={a.title} className="flex gap-4 py-5">
                <Award
                  size={20}
                  className="mt-0.5 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-semibold">{a.title}</h3>
                  {a.detail && (
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {a.detail}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Section>
  );
}
