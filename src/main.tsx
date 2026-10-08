import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/familjen-grotesk";
import "@fontsource-variable/newsreader";
import "./index.css";
import App from "./App.tsx";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";
import { EnquiryProvider } from "./context/EnquiryContext.tsx";

createRoot(document.getElementById("root")!).render(
  <Router>
    <HelmetProvider>
      <EnquiryProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </EnquiryProvider>
    </HelmetProvider>
  </Router>,
);
