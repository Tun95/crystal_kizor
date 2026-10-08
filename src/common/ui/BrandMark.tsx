// src/common/ui/BrandMark.tsx
import { getLogo } from "../../utilities/assets/assetLookup";

interface Props {
  id: string;
  name: string;
  /** Place the logo on a light chip so dark logos work on dark sections */
  onDark?: boolean;
  className?: string;
}

/** Shows the supplied logo if present, otherwise the name set in type. */
const BrandMark = ({ id, name, onDark, className = "" }: Props) => {
  const logo = getLogo(id);
  if (logo) {
    return (
      <span
        className={`inline-flex items-center ${
          onDark ? "bg-chalk px-3 py-2" : ""
        } ${className}`}
      >
        <img src={logo} alt={name} className="h-8 w-auto" loading="lazy" decoding="async" />
      </span>
    );
  }
  return (
    <span className={`font-display text-[1.05rem] font-semibold ${className}`}>
      {name}
    </span>
  );
};

export default BrandMark;
