// src/common/header/Header.tsx
import { useState } from "react";
import { Menu, X } from "lucide-react";
import BrandMark from "../ui/BrandMark";
import { trackEvent } from "../../utilities/analytics/analytics";

const links = [
  { label: "Space", href: "#space" },
  { label: "Knowledge", href: "#knowledge" },
  { label: "People", href: "#people" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/20 bg-chalk/95 backdrop-blur">
      <div className="wrap flex h-[68px] items-center justify-between">
        <a
          href="#top"
          className="font-display text-[1.25rem] font-semibold tracking-tight"
          aria-label="Crystal Kizor, back to top"
        >
          <BrandMark id="crystal-kizor" name="Crystal Kizor" />
        </a>

        <nav aria-label="Main" className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="link-line no-underline hover:underline">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn-ink min-h-[42px] px-5"
            onClick={() => trackEvent("cta_click", { placement: "header" })}
          >
            Get in touch
          </a>
        </nav>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="wrap border-t border-ink/20 pb-6 pt-2 md:hidden"
        >
          <ul>
            {links.map((l) => (
              <li key={l.href} className="border-b border-ink/15">
                <a href={l.href} onClick={close} className="block py-4 font-display text-xl">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" onClick={close} className="btn btn-ink mt-6 w-full">
            Get in touch
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
