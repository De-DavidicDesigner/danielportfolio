// Your projects. Shown in full on the /projects page; ones marked `featured`
// also appear in the "Selected work" section on the home page.
//
// image   → put the screenshot in  public/images/projects/  and write "/images/projects/<file>"
//           (16:10 works best, e.g. 1600×1000 PNG/JPG/WebP). Leave "" to show a styled placeholder.
// liveUrl → the deployed site (https://...). Leave "" if there is none.
// repoUrl → the GitHub repository. Leave "" to hide the "Code" button.
// category drives the filter buttons on the projects page.
//
// TODO: the three entries below are placeholders. Replace them with your real work.

export const projects = [
  {
    title: "Portfolio",
    description:
      "A responsive portfolio with a dark/light theme switch, a filterable projects page and smooth reveal animations.",
    image: "/images/projects/portfolio.png",
    category: "Web development",
    tools: ["React", "Tailwind CSS", "Vite"],
    year: "2026",
    liveUrl: "https://danielportfolio-henna.vercel.app/",
    repoUrl: "",
    featured: true,
  },
  {
    title: "Backend Portfolio",
    description:
      "A responsive portfolio for backend engineer, featuring a filterable projects section and smooth reveal animations.",
    image: "/images/projects/samportfolio.png",
    category: "Web development",
    tools: ["React", "Tailwind CSS", "Vite"],
    year: "2026",
    liveUrl: "https://samuel-omolaja.vercel.app/",
    repoUrl: "",
    featured: true,
  },
  {
    title: "OGITECH Project Management System",
    description:
      "A full-stack platform for managing final-year projects, with separate dashboards for students, supervisors and admins. Students submit topics and write chapters section by section; supervisors approve, request revisions and leave feedback.",
    image: "/images/projects/ogitechpms.png",
    category: "Web development",
    tools: ["React", "Tailwind CSS", "Vite", "Node.js", "Express", "MySQL"],
    year: "2026",
    liveUrl: "https://ogitech-pms.vercel.app/",
    repoUrl: "",
    featured: true,
  },
  {
    title: "Business Website",
    description:
      "A clean, mobile-first website concept for a local service business, designed in Figma and built by hand.",
    image: "/images/projects/goshen.png",
    category: "Web design",
    tools: ["HTML", "CSS", "Figma", "React", "Tailwind CSS", "Vite", "Framer Motion"],
    year: "2025",
    liveUrl: "https://www.goshenluxe.com/",
    repoUrl: "",
    featured: true,
  },
  {
    title: "Weather Application",
    description:
      "Shows current conditions and a five-day forecast for any city, with location search and unit switching.",
    image: "/images/projects/weather.png",
    category: "Web app",
    tools: ["JavaScript", "REST API", "CSS"],
    year: "2025",
    liveUrl: "https://weather-app-tau-ten-79.vercel.app/",
    repoUrl: "",
    featured: true,
  },
];
