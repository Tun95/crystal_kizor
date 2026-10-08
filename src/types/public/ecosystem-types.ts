// src/types/public/ecosystem-types.ts
export type DomainId = "space" | "knowledge" | "people";

export type BrandId =
  | "studio-coka"
  | "elevated"
  | "tea"
  | "speaking"
  | "writing"
  | "ako-alliance"
  | "alive-and-free";

export interface Domain {
  id: DomainId;
  label: string;
  headline: string;
}

export interface Brand {
  id: BrandId;
  name: string;
  domain: DomainId;
  /** Short descriptor shown inside the practice map */
  tagline: string;
  summary: string;
  audience: string;
  /** Label of the primary on-page action (opens the contact form pre-filled) */
  actionLabel: string;
  /** Practice map: relative width and height (%) of the block */
  mapWidth: number;
  mapHeight: number;
}

export interface StartPath {
  label: string;
  brand: BrandId;
}

export interface EnquiryOption {
  id: BrandId;
  label: string;
  placeholder: string;
}
