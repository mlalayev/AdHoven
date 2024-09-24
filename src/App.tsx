import React, { useState } from 'react';
import Footer from './Common/Footer/Footer';
import Header from './Common/Header/Header.jsx';
import i18n from './Components/I18N/I18N';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import MainPage from './Components/MainPage/MainPage';
import RightPart from './Components/PageRightPart/RightPart';

interface RightPartProps {
  isNewsTrue: boolean;
  isFaqsTrue: boolean;
  isTextPart: boolean;
}

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
          {/* Dynamic routes with manually controlled props */}
          <Route
            path="/path1"
            element={<PageWithTextPart
              isFaqsTrue={true}
              isNewsTrue={false}
              isTextPart={true} />}
          />
          <Route
            path="/path2"
            element={<PageWithTextPart
              isFaqsTrue={false}
              isNewsTrue={false}
              isTextPart={true} />}
          />
          <Route
            path="/path3"
            element={<PageWithTextPart
              isFaqsTrue={false}
              isNewsTrue={false}
              isTextPart={true} />}
          />
          <Route
            path="/path4"
            element={<PageWithTextPart
              isFaqsTrue={false}
              isNewsTrue={false}
              isTextPart={true} />}
          />
          <Route
            path="/path5"
            element={<PageWithTextPart
              isFaqsTrue={false}
              isNewsTrue={false}
              isTextPart={true} />}
          />
          <Route
            path="/path6"
            element={<PageWithTextPart
              isFaqsTrue={false}
              isNewsTrue={false}
              isTextPart={true} />}
          />
          <Route
            path="/path7"
            element={<PageWithTextPart
              isFaqsTrue={false}
              isNewsTrue={false}
              isTextPart={true} />}
          />
          <Route
            path="/path8"
            element={<PageWithTextPart
              isFaqsTrue={false}
              isNewsTrue={false}
              isTextPart={true} />}
          />
          <Route
            path="/path9"
            element={<PageWithTextPart
              isFaqsTrue={false}
              isNewsTrue={false}
              isTextPart={true} />}
          />
          {/* <Route
            path="/path10"
            element={<PageWithTextPart
              isFaqsTrue={false}
              isNewsTrue={false}
              isTextPart={true} />}
          /> */}
          <Route
            path="/about"
            element={<PageWithTextPart
              isFaqsTrue={false}
              isNewsTrue={false}
              isTextPart={true} />}
          />
        </Routes>
      </I18nextProvider>
    </Router>
  );
}

// A reusable component to handle routes with dynamic text content
const PageWithTextPart = ({ isNewsTrue, isTextPart, isFaqsTrue }: RightPartProps) => {
  const location = useLocation();


  return (
    <>
      <Header />
      <RightPart
        currentPath={location.pathname}
        isNewsTrue={isNewsTrue}
        isTextPart={isTextPart}
        isFaqsTrue={isFaqsTrue}
      />
      <Footer />
    </>
  );
};

export default App;
