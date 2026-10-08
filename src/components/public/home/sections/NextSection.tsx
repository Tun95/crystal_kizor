// src/components/public/home/sections/NextSection.tsx
import { useEnquiry } from "../../../../hooks/Hooks";
import { trackEvent } from "../../../../utilities/analytics/analytics";

const NextSection = () => {
  const { setEnquiry } = useEnquiry();

  return (
    <section
      id="next"
      aria-labelledby="next-title"
      className="border-b border-ink/20 py-20 md:py-24"
    >
      <div className="wrap grid gap-8 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-6">
          <p className="inline-block border-[1.5px] border-ink px-3 py-1 font-display text-sm font-medium">
            Concept
          </p>
          <h2 id="next-title" className="mt-5 text-[clamp(1.9rem,3.8vw,3rem)]">
            What Crystal is building next: tools made for this work.
          </h2>
        </div>
        <div className="md:col-span-5 md:col-start-8 md:pt-12">
          <p className="max-w-[54ch]">
            AI-powered tools are planned across the ecosystem. The first idea is
            a portfolio and career mentor for architects, grounded in what The
            Effective Architect teaches. It is early, and it will only ship if it
            genuinely helps the people it is for.
          </p>
          <a
            href="#contact"
            className="link-line mt-5 inline-block"
            onClick={() => {
              setEnquiry("tea");
              trackEvent("cta_click", { placement: "next_tools" });
            }}
          >
            Tell Crystal what would help you
          </a>
        </div>
      </div>
    </section>
  );
};

export default NextSection;
