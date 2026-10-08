// src/common/ui/ImageSlot.tsx
import { getImage } from "../../utilities/assets/assetLookup";

interface Props {
  /** File name (no extension) in src/assets/images */
  name: string;
  alt: string;
  /** Tailwind aspect class, e.g. "aspect-[4/5]" */
  aspect: string;
  /** Text shown on the placeholder */
  label: string;
  priority?: boolean;
  className?: string;
}

const ImageSlot = ({ name, alt, aspect, label, priority, className = "" }: Props) => {
  const src = getImage(name);

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`${aspect} w-full object-cover ${className}`}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        {...(priority ? { fetchPriority: "high" as const } : {})}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={`Placeholder: ${label}`}
      className={`ph ${aspect} flex w-full items-end border-[1.5px] border-dashed border-ink/50 p-4 ${className}`}
    >
      <p className="font-display text-sm leading-snug text-ink">
        <span className="font-semibold">Placeholder.</span> {label}
        <br />
        <span className="text-soft">Add src/assets/images/{name}.jpg</span>
      </p>
    </div>
  );
};

export default ImageSlot;
