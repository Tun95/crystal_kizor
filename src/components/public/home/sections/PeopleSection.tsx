// src/components/public/home/sections/PeopleSection.tsx
import DomainHeader from "../../../../common/ui/DomainHeader";
import ImageSlot from "../../../../common/ui/ImageSlot";
import BrandMark from "../../../../common/ui/BrandMark";
import BrandActions from "../../../../common/ui/BrandActions";
import { brandsIn, domains } from "../../../../data/ecosystem";

const PeopleSection = () => (
  <section
    id="people"
    aria-labelledby="people-title"
    className="bg-mist py-20 md:py-28"
  >
    <div className="wrap" id="people-title">
      <DomainHeader domain={domains[2]} bg="#dde2f0" />

      <div className="mt-16 grid gap-14 md:grid-cols-2 md:gap-12">
        {brandsIn("people").map((b) => (
          <article key={b.id} id={b.id}>
            <ImageSlot
              name={b.id}
              alt={b.name}
              aspect="aspect-[16/10]"
              label={`${b.name} image.`}
            />
            <div className="mt-7">
              <BrandMark id={b.id} name={b.name} className="text-[1.6rem]" />
              <h3 className="mt-2 text-[1.9rem] font-medium">{b.tagline}</h3>
              <p className="prose-body mt-4">{b.summary}</p>
              <p className="note mt-4">For: {b.audience}</p>
              <BrandActions brand={b} tone="ink" />
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default PeopleSection;
