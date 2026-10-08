// src/context/enquiry-context.ts
import { createContext } from "react";
import type { BrandId } from "../types/public/ecosystem-types";

export interface EnquiryContextType {
  enquiry: BrandId;
  setEnquiry: (id: BrandId) => void;
}

export const EnquiryContext = createContext<EnquiryContextType | undefined>(
  undefined,
);
