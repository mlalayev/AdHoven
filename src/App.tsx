import Footer from "./Common/Footer/Footer";
import Header from "./Common/Header/Header";
import i18n from './Components/I18N/I18N.jsx';
import { I18nextProvider } from 'react-i18next';
import MainPage from "./Components/MainPage/MainPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <I18nextProvider i18n={i18n}>
        <Routes>
          <Route path="/" element={<>
            <Header />
            <MainPage />
            <Footer />
          </>} />
          <Route path="/about" element={<>
            <MainPage />
            <Footer />
            <Header />
          </>} />
        </Routes>
      </I18nextProvider>
    </Router>
  )
}

export default App
