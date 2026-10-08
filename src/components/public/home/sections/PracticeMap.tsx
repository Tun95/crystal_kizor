// src/components/public/home/sections/PracticeMap.tsx
import { useRef, useState, type CSSProperties } from "react";
import { brands, brandsIn, domains } from "../../../../data/ecosystem";
import { useInViewOnce } from "../../../../hooks/Hooks";
import { trackEvent } from "../../../../utilities/analytics/analytics";
import type { Brand } from "../../../../types/public/ecosystem-types";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const PracticeMap = () => {
  const [active, setActive] = useState<Brand>(brands[0]);
  const ref = useRef<HTMLDivElement>(null);
  const seen = useInViewOnce(ref, 0.3);
  const animate = !prefersReducedMotion();

  const bayWeights = domains.map((d) =>
    brandsIn(d.id).reduce((sum, b) => sum + b.mapWidth, 0),
  );
  const cols = bayWeights.map((w) => `${w}fr`).join(" ");
  let index = 0;

  const select = (b: Brand) => {
    if (b.id !== active.id) {
      setActive(b);
      trackEvent("map_select", { brand: b.id });
    }
  };

  return (
    <section
      id="practice"
      aria-labelledby="practice-title"
      className="border-t border-ink/20 py-16 md:py-20"
    >
      <div className="wrap">
        <div className="grid gap-6 md:grid-cols-12 md:gap-12">
          <h2
            id="practice-title"
            className="text-[clamp(2rem,4.2vw,3.4rem)] md:col-span-6"
          >
            One practice, standing on one name.
          </h2>
          <p className="max-w-[52ch] text-soft md:col-span-5 md:col-start-8 md:pt-2">
            Every brand asks the same question: how do we build well for the
            climate, the context and the people it serves? The answers come in
            three kinds of work. Choose any block to see what it is.
          </p>
        </div>

        <div
          ref={ref}
          className={`elev mt-10 md:mt-12 ${animate && !seen ? "is-pending" : ""}`}
          style={{ "--cols": cols } as CSSProperties}
        >
          <div className="elev__row">
            {domains.map((d) => (
              <div key={d.id} className="min-w-0">
                <p className="elev__label-mobile mb-3 items-center gap-2 font-display font-semibold">
                  <span className={`key key--${d.id}`} aria-hidden="true" />
                  {d.label}
                </p>
                <div className="elev__bay">
                  {brandsIn(d.id).map((b) => {
                    const i = index++;
                    return (
                      <a
                        key={b.id}
                        href={`#${b.id}`}
                        className={`blk blk--${d.id}`}
                        data-active={active.id === b.id}
                        style={
                          {
                            "--w": b.mapWidth,
                            "--bh": `${b.mapHeight}%`,
                            "--i": i,
                          } as CSSProperties
                        }
                        onMouseEnter={() => select(b)}
                        onFocus={() => select(b)}
                        onClick={() =>
                          trackEvent("map_click", { brand: b.id })
                        }
                      >
                        <span className="blk__name">{b.name}</span>
                        <span className="blk__tag">{b.tagline}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="elev__ground" aria-hidden="true" />

          <div className="elev__row elev__dims-row" aria-hidden="true">
            {domains.map((d) => (
              <div key={d.id} className="dim">
                <span>{d.label}</span>
              </div>
            ))}
          </div>

          <p className="note mt-5 text-center">
            Crystal Kizor: architecture, research, writing, media and ideas.
            The ground every block stands on.
          </p>
        </div>

        <div className="tb mt-7 hidden md:grid" aria-live="polite">
          <div className="tb__cell">
            <p className="note">Selected</p>
            <p className="mt-1 font-display text-[1.5rem] font-medium leading-tight">
              {active.name}
            </p>
          </div>
          <div className="tb__cell">
            <p className="note">What it is</p>
            <p className="mt-1 text-[1rem] leading-snug">{active.summary}</p>
          </div>
          <div className="tb__cell">
            <p className="note">Who it is for</p>
            <p className="mt-1 text-[1rem] leading-snug">{active.audience}</p>
          </div>
          <div className="tb__cell flex items-end">
            <a href={`#${active.id}`} className="link-line">
              Go to {active.name}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeMap;
