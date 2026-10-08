# Stage 1 Submission: Crystal Kizor

**Live site:** https://crystal-kizor.vercel.app/
**Source code:** https://github.com/Tun95/crystal_kizor

---

## Short note

Crystal's work spans buildings, objects, education, speaking and youth ministry, so a list of brands would feel scattered. My thinking: group everything into three kinds of work, Space, Knowledge and People, with Crystal Kizor as the ground they all stand on. That became an elevation drawing, the one memorable element of the page: each block is a brand, hover or focus shows what it is and who it is for, and each links to its section. A "Where would you like to start?" list sends different visitors to the right place within seconds. Every call to action opens one enquiry form pre-set to that brand.

Design: adire indigo, drawing-sheet white and ochre, with Familjen Grotesk and Newsreader. Motion is limited to one moment, the map rising once.

Technology: Vite, React, TypeScript and Tailwind. Fonts are self-hosted, there is no animation library, and images are lazy-loaded. It is accessible: keyboard focus, reduced motion respected, semantic landmarks. GA4 events track start paths, map use and form steps.

Placeholders are clearly marked where assets were not supplied. Copy beyond the brief, such as audiences, is my proposal for Crystal to review.

---

## Part 2: AI Product Thinking

**Tool: TEA Portfolio Mentor (The Effective Architect)**

**What it does.** An AI mentor that reviews a portfolio, CV or project write-up and returns structured feedback: clarity of story, project presentation, gaps for the target role, and next TEA lessons to take.

**Who it is for.** Students, graduates and early-career architects without access to senior mentors.

**Problem.** Honest portfolio feedback is scarce, slow and often depends on who you know. Many applicants apply blind and never learn why they were passed over.

**How it is used.** Upload a PDF or paste project descriptions, choose a goal (first job, masters, going independent), and receive a scorecard against a clear rubric, three priority fixes and links to relevant TEA content. Follow-up questions happen in chat.

**Technology.** Claude API: strong with long documents and images, and reliable at following a rubric. Retrieval over TEA's articles and lessons (embeddings in Postgres with pgvector) grounds advice in TEA's own teaching and lets the tool cite sources instead of inventing them.

**First version.** Write the rubric with Crystal and two or three reviewers. Build a React front end and one serverless function: extract PDF text, retrieve the closest TEA passages, call Claude with rubric plus passages, and return JSON shown as a scorecard. Index about 30 existing TEA pieces. Test on 20 real portfolios against human reviewers.

**Limitations and safeguards.** It cannot predict hiring outcomes and can misread image-heavy layouts, so output is labelled guidance, not a verdict. Uploads need explicit consent under the Nigeria Data Protection Act, no training on user data, and automatic deletion after 30 days. Per-user rate limits cap cost. Test against African practice examples to catch bias toward Western portfolio conventions. A visible "ask a human mentor" route stays available.

---

## Part 3: Analytics & Improvement

**What I would track.** Acquisition: traffic sources, landing pages, engaged sessions. Behaviour: scroll depth, which brand blocks and start paths get clicked, outbound clicks per brand. Conversion: form starts, abandonment by field, submissions by enquiry type. Health: Core Web Vitals (LCP, INP, CLS) and JavaScript errors.

**Tools.** Google Analytics 4 for events and funnels, Search Console for queries, Microsoft Clarity for recordings and heatmaps, PageSpeed Insights or Vercel Analytics for performance, and a Looker Studio dashboard for weekly review.

**How I would use the data.** Each week I pick the weakest funnel step, form one hypothesis, change one thing, and compare before and after.

**Scenario: 5,000 visitors, 5 enquiries (0.1%).**
1. Check measurement and the form. Does submit work on mobile and Safari? Does the email arrive? Is spam filtering swallowing messages? A broken form looks exactly like low demand.
2. Check traffic quality: sources, countries, bots, and whether visitors match what the page offers.
3. Find where people leave: scroll depth, heatmaps, clicks on start paths and calls to action.
4. Check the form: starts versus submissions, field count, error rates.

**Next steps.** Fix bugs first. Then shorten the form, add a direct email or WhatsApp option, move the call to action to where attention drops, match the message to each traffic source, and add proof such as projects and testimonials. Test one change at a time for two to four weeks.