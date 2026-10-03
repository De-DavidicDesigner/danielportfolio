import { Section, has } from "./ui";

export default function About({ profile }) {
  const { bio, focus, interests, location, education, availability } = profile;
  const facts = [
    ["Location", location],
    ["Education", education],
    ["Focus", focus],
    ["Availability", availability],
  ].filter(([, v]) => has(v));
  return (
    <Section id="about" title="About me">
      <div className={`grid gap-10 ${facts.length ? "lg:grid-cols-5" : ""}`}>
        <div className="max-w-prose space-y-5 text-lg leading-relaxed lg:col-span-3">
          {[].concat(bio).map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        {(facts.length > 0 || has(interests)) && (
          <div className="lg:col-span-2">
            {facts.length > 0 && (
              <dl className="divide-y divide-line border-y border-line text-sm">
                {facts.map(([k, v]) => (
                  <div key={k} className="grid grid-cols-3 gap-4 py-3.5">
                    <dt className="text-muted">{k}</dt>
                    <dd className="col-span-2 font-medium">{v}</dd>
                  </div>
                ))}
              </dl>
            )}
            {has(interests) && (
              <p className="mt-5 text-sm text-muted">
                Interests: {interests.join(", ")}
              </p>
            )}
          </div>
        )}
      </div>
    </Section>
  );
}
