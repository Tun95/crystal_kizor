// src/components/public/home/sections/SpaceSection.tsx
import type { CSSProperties } from "react";
import DomainHeader from "../../../../common/ui/DomainHeader";
import ImageSlot from "../../../../common/ui/ImageSlot";
import BrandMark from "../../../../common/ui/BrandMark";
import BrandActions from "../../../../common/ui/BrandActions";
import { domains, getBrand } from "../../../../data/ecosystem";

const SpaceSection = () => {
  const coka = getBrand("studio-coka");
  const elevated = getBrand("elevated");

  return (
    <section
      id="space"
      aria-labelledby="space-title"
      className="on-dark bg-ink py-20 text-chalk md:py-28"
      style={{ "--ink": "#14214d" } as CSSProperties}
    >
      <div className="wrap" id="space-title">
        <DomainHeader domain={domains[0]} bg="#14214d" />

        <div className="mt-16 grid gap-14 md:grid-cols-12 md:gap-10">
          <article id={coka.id} className="md:col-span-7">
            <ImageSlot
              name="e1"
              alt="A Studio COKA project"
              aspect="aspect-[4/3]"
              label="Studio COKA project image."
            />
            <div className="mt-7">
              <BrandMark id={coka.id} name={coka.name} onDark className="text-[1.6rem]" />
              <h3 className="mt-2 max-w-[20ch] text-[1.9rem] font-medium">
                {coka.tagline}
              </h3>
              <p className="prose-body mt-4 text-chalk/85">{coka.summary}</p>
              <p className="note mt-4">For: {coka.audience}</p>
              <BrandActions brand={coka} tone="ochre" />
            </div>
          </article>

          <article id={elevated.id} className="md:col-span-5 md:mt-28">
            <ImageSlot
              name="e2"
              alt="An ELEvated furniture piece"
              aspect="aspect-[3/4]"
              label="ELEvated product image."
            />
            <div className="mt-7">
              <BrandMark id={elevated.id} name={elevated.name} onDark className="text-[1.6rem]" />
              <h3 className="mt-2 text-[1.9rem] font-medium">{elevated.tagline}</h3>
              <p className="prose-body mt-4 text-chalk/85">{elevated.summary}</p>
              <p className="note mt-4">For: {elevated.audience}</p>
              <BrandActions brand={elevated} tone="ochre" />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default SpaceSection;
