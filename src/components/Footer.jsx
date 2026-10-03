import { Link2 } from "lucide-react";
import { SOCIALS } from "./ui";

export default function Footer({ profile: { name, title, socialLinks = {} } }) {
  const links = Object.entries(socialLinks).filter(([, url]) => url);
  return (
    <footer className="border-t border-line py-10 text-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-base font-bold">{name}</p>
          <p className="text-muted">{title}</p>
        </div>
        {links.length > 0 && (
          <ul className="flex gap-4">
            {links.map(([key, url]) => {
              const [Icon, label] = SOCIALS[key] || [Link2, key];
              return (
                <li key={key}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-muted transition-colors hover:text-accent"
                  >
                    <Icon size={20} aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
        )}
        <p className="text-muted">
          &copy; {new Date().getFullYear()} {name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
