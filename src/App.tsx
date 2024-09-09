import React from 'react';
import Footer from './Common/Footer/Footer';
import Header from './Common/Header/Header';
import i18n from './Components/I18N/I18N';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import AboutMe from './Components/AboutMe/AboutMe';
import TextPart from './Components/TextPart/TextPart';
import MainPage from './Components/MainPage/MainPage';
import RightPart from './Components/PageRightPart/RightPart';

function App() {
  return (
    <Router>
      <I18nextProvider i18n={i18n}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <MainPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Header />
                <AboutMe />
                <Footer />
              </>
            }
          />
          {/* Dynamic routes based on paths from the JSON file */}
          <Route path="/path1" element={<PageWithTextPart />} />
          <Route path="/path2" element={<PageWithTextPart />} />
          <Route path="/aboutme" element={<PageWithTextPart />} />
        </Routes>
      </I18nextProvider>
    </Router>
  );
}

// A reusable component to handle routes with dynamic text content
const PageWithTextPart = () => {
  const location = useLocation();

  // You can add logic to set isNewsTrue based on specific paths
  const isNewsTrue = location.pathname.includes("news"); // Modify as needed
  const isTextPart = true; // You can adjust this logic too

  return (
    <>
      <Header />
      <RightPart
        currentPath={location.pathname}
        isNewsTrue={isNewsTrue}
        isTextPart={isTextPart}
      />
      <Footer />
    </>
  );
};

export default App;
