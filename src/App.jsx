import { useEffect } from "react";
import { profile, theme } from "./data/profile";
import { has } from "./components/ui";
import { usePath } from "./lib/router";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectsPage from "./pages/ProjectsPage";

function Home() {
  useEffect(() => {
    document.title = `${profile.name} | ${profile.title}`;
  }, []);
  return (
    <>
      <Hero profile={profile} />
      {has(profile.bio) && <About profile={profile} />}
      {(has(profile.services) || has(profile.skills)) && (
        <Services profile={profile} />
      )}
      {(has(profile.experience) ||
        has(profile.achievements) ||
        has(profile.stats)) && <Experience profile={profile} />}
      {has(profile.projects) && <Projects profile={profile} />}
      <Contact profile={profile} />
    </>
  );
}

export default function App() {
  const path = usePath();
  const onProjects = path === "/projects" && has(profile.projects);

  useEffect(() => {
    const root = document.documentElement.style;
    if (theme.accent) root.setProperty("--accent-light", theme.accent);
    if (theme.accentDark) root.setProperty("--accent-dark", theme.accentDark);
    const title = `${profile.name} | ${profile.title}`;
    const set = (sel, value) =>
      document.querySelector(sel)?.setAttribute("content", value);
    set('meta[name="description"]', profile.tagline);
    set('meta[property="og:title"]', title);
    set('meta[property="og:description"]', profile.tagline);
  }, []);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-60 focus:rounded-md focus:bg-surface focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <Navbar profile={profile} path={onProjects ? "/projects" : "/"} />
      <main id="main">
        {onProjects ? <ProjectsPage profile={profile} /> : <Home />}
      </main>
      <Footer profile={profile} />
    </>
  );
}
