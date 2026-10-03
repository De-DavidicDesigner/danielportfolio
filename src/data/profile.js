// ONE customer = ONE profile object. Replace this file to build another person's site.
// Every field except name, title and tagline is optional: empty fields are hidden, not shown blank.
// Sample content below is placeholder copy, not real clients or statistics.
// Background-removed PNG so the portrait blends into the page. Original: self.jpeg
import self from "../assets/images/self-cutout.png";
import { projects } from "./projects";

// Accent colour per mode. The dark one should be lighter so it stays readable on the dark background.
export const theme = { accent: "#2b44d6", accentDark: "#8b9bff" };

export const profile = {
  name: "Daniel Omolaja",
  title: "Software Engineer & Graphic Designer",
  location: "Lagos, Nigeria",
  availability: "Open to freelance projects",
  tagline:
    "I build clean, responsive websites and create visual designs that help people and businesses communicate better online.",
  profileImage: self, // a transparent PNG looks best. Empty shows initials.

  bio: [
    "I'm a frontend developer and graphic designer based in Lagos. I care about the small details that make a website clear, fast and easy to use.",
    "Because I work in both design and code, an idea can go from sketch to working page without losing anything along the way.",
  ],
  focus: "Responsive React interfaces and brand visuals",
  education: "",
  interests: ["Interface design", "Typography", "Brand identity"],

  // Only real numbers. The first stat also shows as a badge on the hero photo.
  stats: [{ value: "6", label: "Projects completed" }],

  skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "UI/UX", "Graphic Design"],

  // icon keys: code, palette, layout, briefcase, camera, pen, megaphone, users
  services: [
    { icon: "code", title: "Frontend development", description: "Fast, accessible websites and web apps built with React and modern CSS." },
    { icon: "layout", title: "Responsive web design", description: "Layouts that work properly on phones, tablets and desktops." },
    { icon: "palette", title: "Graphic design", description: "Logos, social media graphics and print-ready visuals with a consistent look." },
  ],

  experience: [
    { role: "Freelance Frontend Developer", org: "Independent", period: "2023 to present", description: "Building websites and interfaces for small businesses and individuals." },
    { role: "Graphic Designer", org: "Independent", period: "2021 to present", description: "Designing brand visuals and social media content." },
  ],

  achievements: [
    { title: "Sample achievement", detail: "Replace with a certification, award or milestone." },
    { title: "Another sample milestone", detail: "Add a short line of context." },
  ],

  projects, // edit these in data/projects.js

  contact: {
    email: "buztech20@gmail.com", // TODO: your real email
    phone: "2347019972196", // TODO: digits only, with country code
    whatsapp: "2347019972196", // TODO: digits only, with country code
    website: "",
  },

  socialLinks: {
    linkedin: "https://www.linkedin.com/in/daniel-omolaja-72590426b/", // TODO: full profile URLs
    github: "https://github.com/De-DavidicDesigner",
    instagram: "https://www.instagram.com/omolaja.daniel/",
    x: "",
  },
};
