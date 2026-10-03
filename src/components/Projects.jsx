import { ArrowRight } from "lucide-react";
import { Section } from "./ui";
import { Link } from "../lib/router";
import ProjectCard from "./ProjectCard";

// Home page teaser: featured projects (or the first three) plus a link to /projects.
export default function Projects({ profile: { projects = [] } }) {
  const featured = projects.filter((p) => p.featured);
  const shown = (featured.length ? featured : projects).slice(0, 3);
  const n = shown.length;
  return (
    <Section id="work" title="Selected work">
      <div className="grid gap-6 md:grid-cols-2">
        {shown.map((p, i) => (
          <ProjectCard key={p.title} project={p} wide={n % 2 === 1 && i === 0} />
        ))}
      </div>
      <Link to="/projects" className="btn-secondary mt-10">
        See all {projects.length} projects <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </Section>
  );
}
