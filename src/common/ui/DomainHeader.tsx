// src/common/ui/DomainHeader.tsx
import type { CSSProperties } from "react";
import type { Domain } from "../../types/public/ecosystem-types";

interface Props {
  domain: Domain;
  /** Colour behind the label, so the line breaks cleanly around it */
  bg: string;
}

/** Section opener: a dimension string, then the domain and what it covers. */
const DomainHeader = ({ domain, bg }: Props) => (
  <header>
    <div className="dim" style={{ "--bg": bg } as CSSProperties} aria-hidden="true">
      <span>{domain.label}</span>
    </div>
    <h2 className="mt-10 max-w-[18ch] text-[clamp(2.1rem,4.6vw,3.6rem)]">
      {domain.headline}
    </h2>
  </header>
);

export default DomainHeader;
