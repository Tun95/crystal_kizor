// src/context/EnquiryContext.tsx
import { useState, type ReactNode } from "react";
import type { BrandId } from "../types/public/ecosystem-types";
import { EnquiryContext } from "./enquiry-context";

export const EnquiryProvider = ({ children }: { children: ReactNode }) => {
  const [enquiry, setEnquiry] = useState<BrandId>("studio-coka");
  return (
    <EnquiryContext.Provider value={{ enquiry, setEnquiry }}>
      {children}
    </EnquiryContext.Provider>
  );
};
