// src/common/ui/BrandActions.tsx
import { env } from "../../config/env";
import { useEnquiry } from "../../hooks/Hooks";
import { trackEvent } from "../../utilities/analytics/analytics";
import type { Brand } from "../../types/public/ecosystem-types";

interface Props {
  brand: Brand;
  /** "ink" on light sections, "ochre" on dark ones */
  tone: "ink" | "ochre";
}

/** Primary action opens the contact form pre-set to this brand. */
const BrandActions = ({ brand, tone }: Props) => {
  const { setEnquiry } = useEnquiry();
  const url = env.brandUrls[brand.id];

  return (
    <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-4">
      <a
        href="#contact"
        className={`btn ${tone === "ochre" ? "btn-ochre" : "btn-ink"}`}
        onClick={() => {
          setEnquiry(brand.id);
          trackEvent("cta_click", { brand: brand.id, placement: "brand_section" });
        }}
      >
        {brand.actionLabel}
      </a>
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="link-line"
          onClick={() =>
            trackEvent("outbound_click", { brand: brand.id, url })
          }
        >
          Visit {brand.name}
        </a>
      )}
    </div>
  );
};

export default BrandActions;
