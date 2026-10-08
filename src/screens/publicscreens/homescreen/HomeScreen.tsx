// src/screens/publicscreens/homescreen/HomeScreen.tsx
import { Helmet } from "react-helmet-async";
import Home from "../../../components/public/home/Home";
import Header from "../../../common/header/Header";
import Footer from "../../../common/footer/Footer";
import { env } from "../../../config/env";

const title = "Crystal Kizor | Architect, designer, speaker and researcher";
const description =
  "Crystal Kizor designs spaces, shares knowledge and builds up young people. Explore Studio COKA, ELEvated, The Effective Architect, AKO Alliance, Alive and Free, speaking and research.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Crystal Kizor",
  jobTitle: "Architect",
  description,
  url: env.frontendUrl,
};

const HomeScreen = () => (
  <div className="flex min-h-screen flex-col">
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={env.frontendUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={env.frontendUrl} />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>

    <a
      href="#practice"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ochre focus:px-4 focus:py-2 focus:font-display"
    >
      Skip to the practice map
    </a>

    <Header />
    <main className="flex-grow">
      <Home />
    </main>
    <Footer />
  </div>
);

export default HomeScreen;
