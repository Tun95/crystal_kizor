// src/common/footer/Footer.tsx
import { brandsIn, domains } from "../../data/ecosystem";
import { env } from "../../config/env";

const Footer = () => {
  const socials = Object.entries(env.social).filter(([, url]) => url);

  return (
    <footer className="on-dark bg-ink text-chalk">
      <div className="wrap grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="font-display text-2xl font-semibold">Crystal Kizor</p>
          <p className="mt-3 max-w-[30ch] text-chalk/75">
            Architect, designer, entrepreneur, speaker and researcher.
          </p>
          {socials.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {socials.map(([name, url]) => (
                <li key={name}>
                  <a href={url} target="_blank" rel="noopener noreferrer" className="link-line">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <nav aria-label="Footer" className="grid gap-8 sm:grid-cols-3 md:col-span-8">
          {domains.map((d) => (
            <div key={d.id}>
              <p className="font-display font-semibold">{d.label}</p>
              <ul className="mt-3 space-y-2">
                {brandsIn(d.id).map((b) => (
                  <li key={b.id}>
                    <a href={`#${b.id}`} className="text-chalk/80 hover:text-chalk hover:underline">
                      {b.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="border-t border-chalk/20">
        <p className="wrap py-6 text-sm text-chalk/65">
          &copy; {new Date().getFullYear()} Crystal Kizor. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
