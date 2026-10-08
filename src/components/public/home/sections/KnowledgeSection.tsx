// src/components/public/home/sections/KnowledgeSection.tsx
import DomainHeader from "../../../../common/ui/DomainHeader";
import BrandMark from "../../../../common/ui/BrandMark";
import BrandActions from "../../../../common/ui/BrandActions";
import ImageSlot from "../../../../common/ui/ImageSlot";
import { getImage } from "../../../../utilities/assets/assetLookup";
import { brandsIn, domains } from "../../../../data/ecosystem";

const KnowledgeSection = () => {
  const items = brandsIn("knowledge");

  return (
    <section
      id="knowledge"
      aria-labelledby="knowledge-title"
      className="py-20 md:py-28"
    >
      <div className="wrap" id="knowledge-title">
        <DomainHeader domain={domains[1]} bg="#f2f3ef" />

        <div className="mt-16 border-t-[1.5px] border-ink">
          {items.map((b) => (
            <article
              key={b.id}
              id={b.id}
              className="grid gap-6 border-b-[1.5px] border-ink py-10 md:grid-cols-12 md:gap-10 md:py-12"
            >
              <div className="md:col-span-4">
                <h3 className="text-[1.9rem] font-medium leading-[1.1]">
                  <BrandMark id={b.id} name={b.name} className="text-[1.9rem] font-medium" />
                </h3>
                <p className="note mt-2">{b.tagline}</p>
              </div>

              <div className="md:col-span-5">
                <p className="max-w-[56ch]">{b.summary}</p>
                <p className="note mt-4">For: {b.audience}</p>
                <BrandActions brand={b} tone="ink" />
              </div>

              {/* Optional speaking photo: only rendered once the file exists */}
              {b.id === "speaking" && getImage("crystal-speaking") && (
                <div className="md:col-span-3">
                  <ImageSlot
                    name="crystal-speaking"
                    alt="Crystal Kizor speaking on stage"
                    aspect="aspect-[3/2]"
                    label="Crystal speaking."
                  />
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeSection;
