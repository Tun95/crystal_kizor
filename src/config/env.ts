// src/config/env.ts - type-safe environment variables
export const env = {
  contactEmail: import.meta.env.VITE_CONTACT_EMAIL || "hello@example.com",
  formEndpoint: import.meta.env.VITE_FORM_ENDPOINT || "",
  googleTrackingId: import.meta.env.VITE_REACT_APP_GOOGLE_TRACKING || "",
  frontendUrl: import.meta.env.VITE_FRONTEND_URL || "http://localhost:3000",
  isDevelopment: import.meta.env.DEV,
  brandUrls: {
    "studio-coka": import.meta.env.VITE_URL_STUDIO_COKA || "",
    elevated: import.meta.env.VITE_URL_ELEVATED || "",
    tea: import.meta.env.VITE_URL_TEA || "",
    speaking: import.meta.env.VITE_URL_SPEAKING || "",
    writing: import.meta.env.VITE_URL_WRITING || "",
    "ako-alliance": import.meta.env.VITE_URL_AKO_ALLIANCE || "",
    "alive-and-free": import.meta.env.VITE_URL_ALIVE_AND_FREE || "",
  } as Record<string, string>,
  social: {
    Instagram: import.meta.env.VITE_SOCIAL_INSTAGRAM || "",
    LinkedIn: import.meta.env.VITE_SOCIAL_LINKEDIN || "",
    YouTube: import.meta.env.VITE_SOCIAL_YOUTUBE || "",
    X: import.meta.env.VITE_SOCIAL_TWITTER || "",
  } as Record<string, string>,
};
