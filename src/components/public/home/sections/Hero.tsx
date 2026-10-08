// src/components/public/home/sections/Hero.tsx
import ImageSlot from "../../../../common/ui/ImageSlot";
import { getBrand, startPaths } from "../../../../data/ecosystem";
import { trackEvent } from "../../../../utilities/analytics/analytics";

const Hero = () => (
  <section id="top" aria-labelledby="hero-title" className="wrap pb-20 pt-10 md:pt-16">
    <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-x-16 lg:gap-y-14">
      <div className="lg:col-span-7 lg:row-start-1">
        <h1
          id="hero-title"
          className="text-[clamp(2.3rem,4.8vw,4.1rem)] font-medium"
        >
          Crystal Kizor designs spaces, shares knowledge and builds up young
          people.
        </h1>
        <p className="mt-7 max-w-[54ch] text-[1.25rem] leading-[1.55] text-soft">
          She is an architect, designer, entrepreneur, speaker and researcher.
          Her work runs from climate-responsive buildings and African-rooted
          furniture to education for architects and opportunity for the next
          generation.
        </p>
      </div>

      <div className="lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1">
        <ImageSlot
          name="crystal-portrait"
          alt="Portrait of Crystal Kizor"
          aspect="aspect-[4/5]"
          label="Portrait of Crystal Kizor."
          priority
        />
      </div>

      <div className="lg:col-span-7 lg:row-start-2">
        <div>
          <h2 className="font-display text-xl font-semibold tracking-tight">
            Where would you like to start?
          </h2>
          <ul className="mt-5 grid border-t border-ink/30 sm:grid-cols-2 sm:gap-x-10">
            {startPaths.map((p) => {
              const brand = getBrand(p.brand);
              return (
                <li key={p.brand} className="border-b border-ink/30">
                  <a
                    href={`#${p.brand}`}
                    className="group flex items-start gap-3 py-4"
                    onClick={() =>
                      trackEvent("start_path_click", { brand: p.brand })
                    }
                  >
                    <span
                      className={`key key--${brand.domain} mt-[0.5rem]`}
                      aria-hidden="true"
                    />
                    <span className="block">
                      <span className="block font-display text-[1.1rem] font-medium leading-snug group-hover:underline group-hover:underline-offset-4">
                        {p.label}
                      </span>
                      <span className="note">{brand.name}</span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
