// src/App.tsx
import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ErrorBoundary from "./utilities/error/ErrorBoundary";
import HomeScreen from "./screens/publicscreens/homescreen/HomeScreen";
import { initAnalytics, trackPageView } from "./utilities/analytics/analytics";

const App = () => {
  useEffect(() => {
    initAnalytics();
    trackPageView();
  }, []);

  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        {/* Single page site: anything else goes home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </ErrorBoundary>
  );
};

export default App;
