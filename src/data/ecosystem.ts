// src/data/ecosystem.ts
// Single source of truth for the page. Edit copy here, not in components.
import type {
  Brand,
  Domain,
  EnquiryOption,
  StartPath,
} from "../types/public/ecosystem-types";

export const domains: Domain[] = [
  {
    id: "space",
    label: "Space",
    headline: "Buildings and objects, designed for climate and context.",
  },
  {
    id: "knowledge",
    label: "Knowledge",
    headline: "Learning, ideas and conversation for the built environment.",
  },
  {
    id: "people",
    label: "People",
    headline: "Opportunity and purpose for children and young people.",
  },
];

export const brands: Brand[] = [
  {
    id: "studio-coka",
    name: "Studio COKA",
    domain: "space",
    tagline: "Architecture, interiors and construction",
    summary:
      "An architecture, interior design and construction studio focused on thoughtful, climate-responsive design.",
    audience:
      "Homeowners, developers and organisations commissioning a building or interior.",
    actionLabel: "Start a project",
    mapWidth: 3,
    mapHeight: 100,
  },
  {
    id: "elevated",
    name: "ELEvated",
    domain: "space",
    tagline: "Furniture and product design",
    summary:
      "A contemporary furniture and product design brand making functional, well-designed pieces rooted in African context, materials and ideas.",
    audience: "People furnishing homes, studios and workplaces.",
    actionLabel: "Ask about ELEvated",
    mapWidth: 2,
    mapHeight: 58,
  },
  {
    id: "tea",
    name: "The Effective Architect",
    domain: "knowledge",
    tagline: "Learn, grow, build a better career",
    summary:
      "An architecture education and media platform helping architects and built-environment professionals learn, grow and build better careers.",
    audience:
      "Students, early-career architects and built-environment professionals.",
    actionLabel: "Ask about TEA",
    mapWidth: 2,
    mapHeight: 82,
  },
  {
    id: "speaking",
    name: "Speaking",
    domain: "knowledge",
    tagline: "Talks and conversations",
    summary:
      "Talks, conversations and engagements on architecture, climate-responsive design, African cities, design, entrepreneurship and the built environment.",
    audience:
      "Conference and event organisers, universities, panel hosts and media.",
    actionLabel: "Invite Crystal to speak",
    mapWidth: 1.6,
    mapHeight: 62,
  },
  {
    id: "writing",
    name: "Research & writing",
    domain: "knowledge",
    tagline: "Ideas, authorship and media",
    summary:
      "Architecture, research, writing, media and ideas that sit directly under Crystal's own name.",
    audience: "Readers, researchers, journalists and collaborators.",
    actionLabel: "Get in touch about the work",
    mapWidth: 1.6,
    mapHeight: 46,
  },
  {
    id: "ako-alliance",
    name: "AKO Alliance",
    domain: "people",
    tagline: "Access to education",
    summary:
      "An initiative expanding access to education and creating opportunities for children and young people.",
    audience: "Partners, supporters and the families it serves.",
    actionLabel: "Partner with AKO",
    mapWidth: 2,
    mapHeight: 72,
  },
  {
    id: "alive-and-free",
    name: "Alive and Free",
    domain: "people",
    tagline: "A Christian youth movement",
    summary:
      "A Christian youth movement helping young people walk in truth, healing, freedom, identity, purpose and life in Christ.",
    audience: "Young people, youth leaders and churches.",
    actionLabel: "Connect with Alive and Free",
    mapWidth: 2,
    mapHeight: 90,
  },
];

export const startPaths: StartPath[] = [
  { label: "Commission a building or interior", brand: "studio-coka" },
  { label: "Furnish a home or workplace", brand: "elevated" },
  { label: "Grow as an architect", brand: "tea" },
  { label: "Invite Crystal to speak", brand: "speaking" },
  { label: "Read the research and writing", brand: "writing" },
  { label: "Support young people", brand: "ako-alliance" },
];

export const enquiryOptions: EnquiryOption[] = [
  {
    id: "studio-coka",
    label: "A building or interior",
    placeholder: "Tell us about the site, the brief and when you hope to start.",
  },
  {
    id: "elevated",
    label: "Furniture or product design",
    placeholder: "What are you furnishing, and what do you have in mind?",
  },
  {
    id: "tea",
    label: "Learning and career growth",
    placeholder: "Where are you in your career, and what do you want to learn?",
  },
  {
    id: "speaking",
    label: "A speaking engagement",
    placeholder: "Event name, date, audience size and the topic you have in mind.",
  },
  {
    id: "writing",
    label: "Research, writing or press",
    placeholder: "What are you working on, and how could Crystal contribute?",
  },
  {
    id: "ako-alliance",
    label: "Partnering on education",
    placeholder: "Who are you, and how would you like to support or partner?",
  },
  {
    id: "alive-and-free",
    label: "Youth and church",
    placeholder: "Tell us about your group or church, and what you are looking for.",
  },
];

export const getBrand = (id: string) => brands.find((b) => b.id === id)!;
export const brandsIn = (domain: string) =>
  brands.filter((b) => b.domain === domain);
