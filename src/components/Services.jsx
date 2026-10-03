import {
  Code2,
  Palette,
  LayoutDashboard,
  Briefcase,
  Camera,
  PenTool,
  Megaphone,
  Users,
  Sparkles,
} from "lucide-react";
import { Section, has } from "./ui";

const ICONS = {
  code: Code2,
  palette: Palette,
  layout: LayoutDashboard,
  briefcase: Briefcase,
  camera: Camera,
  pen: PenTool,
  megaphone: Megaphone,
  users: Users,
};

export default function Services({ profile: { services = [], skills = [] } }) {
  return (
    <Section id="services" title="What I do">
      {has(services) && (
        <ul className="divide-y divide-line border-y border-line">
          {services.map(({ icon, title, description }) => {
            const Icon = ICONS[icon] || Sparkles;
            return (
              <li
                key={title}
                className="group grid gap-2 py-6 sm:grid-cols-5 sm:gap-8"
              >
                <div className="flex items-center gap-3 sm:col-span-2">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-on-accent">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-lg font-bold leading-snug">
                    {title}
                  </h3>
                </div>
                <p className="leading-relaxed text-muted sm:col-span-3">
                  {description}
                </p>
              </li>
            );
          })}
        </ul>
      )}
      {has(skills) && (
        <div className={has(services) ? "mt-10" : ""}>
          <h3 className="text-sm font-medium text-muted">Skills and tools</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {skills.map((s) => (
              <li
                key={s}
                className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm transition-colors hover:border-accent hover:text-accent"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      )}
    </Section>
  );
}
