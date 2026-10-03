import { ArrowUpRight, Link2, Mail, MessageCircle, Phone } from "lucide-react";
import { SOCIALS } from "./ui";

export default function Contact({
  profile: { contact = {}, socialLinks = {} },
}) {
  const wa = (contact.whatsapp || "").replace(/\D/g, "");
  const items = [
    contact.email && {
      icon: Mail,
      label: "Email",
      text: contact.email,
      href: `mailto:${contact.email}`,
    },
    contact.phone && {
      icon: Phone,
      label: "Phone",
      text: contact.phone,
      href: `tel:${contact.phone.replace(/\s/g, "")}`,
    },
    wa && {
      icon: MessageCircle,
      label: "WhatsApp",
      text: "Start a chat",
      href: `https://wa.me/${wa}`,
      external: true,
    },
    ...Object.entries({ ...socialLinks, website: contact.website })
      .filter(([, url]) => url)
      .map(([key, url]) => {
        const [icon, label] = SOCIALS[key] || [Link2, key];
        return {
          icon,
          label,
          text: url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""),
          href: url,
          external: true,
        };
      }),
  ].filter(Boolean);
  const primary =
    items.find((i) => i.label === "Email") ||
    items.find((i) => i.label === "WhatsApp");

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="border-t border-line py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-line bg-surface px-6 py-14 sm:px-12 md:py-20">
          <div aria-hidden="true" className="bg-dots absolute inset-0" />
          <div
            aria-hidden="true"
            className="glow absolute -bottom-48 -right-32 h-[32rem] w-[32rem]"
          />
          <div className="relative">
            <p className="eyebrow">Contact</p>
            <h2
              id="contact-title"
              className="mt-3 font-display text-5xl font-bold tracking-tighter sm:text-7xl"
            >
              Let's connect<span className="text-accent">.</span>
            </h2>
            <p className="mt-5 max-w-xl text-lg text-muted">
              Have a project in mind, or just want to say hello? Send a message
              and I'll get back to you.
            </p>
            {primary && (
              <a
                href={primary.href}
                {...(primary.external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                className="btn-primary mt-8"
              >
                Send Me a Message
              </a>
            )}
            {items.length > 0 && (
              <ul className="mt-14 max-w-2xl divide-y divide-line border-y border-line">
                {items.map(({ icon: Icon, label, text, href, external }) => (
                  <li key={label}>
                    <a
                      href={href}
                      {...(external && {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                      className="flex items-center gap-4 py-4 group transition-colors hover:text-accent"
                    >
                      <Icon
                        size={20}
                        className="shrink-0 text-muted group-hover:text-accent"
                        aria-hidden="true"
                      />
                      <span className="w-24 shrink-0 text-sm text-muted">
                        {label}
                      </span>
                      <span className="min-w-0 flex-1 truncate">{text}</span>
                      <ArrowUpRight
                        size={16}
                        className="shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
