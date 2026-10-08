// src/utilities/analytics/analytics.ts
// Thin wrapper so every event goes through one place. No-ops without a GA ID.
import ReactGA from "react-ga4";
import { env } from "../../config/env";

let ready = false;

export const initAnalytics = () => {
  if (!env.googleTrackingId || ready) return;
  ReactGA.initialize(env.googleTrackingId);
  ready = true;
};

export const trackEvent = (
  name: string,
  params: Record<string, string | number> = {},
) => {
  if (!ready) return;
  ReactGA.event(name, params);
};

export const trackPageView = () => {
  if (!ready) return;
  ReactGA.send({ hitType: "pageview", page: "/", title: "Home" });
};
