// src/hooks/Hooks.ts
import { useContext, useEffect, useState, type RefObject } from "react";
import { EnquiryContext } from "../context/enquiry-context";

export const useEnquiry = () => {
  const ctx = useContext(EnquiryContext);
  if (!ctx) throw new Error("useEnquiry must be used within EnquiryProvider");
  return ctx;
};

/** True once the element has entered the viewport (fires once). */
export const useInViewOnce = (
  ref: RefObject<Element | null>,
  threshold = 0.25,
) => {
  const [seen, setSeen] = useState(
    () => typeof window === "undefined" || !("IntersectionObserver" in window),
  );
  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref, seen, threshold]);
  return seen;
};
