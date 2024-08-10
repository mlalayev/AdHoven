import './Header.css';
import { useTranslation } from 'react-i18next';
import StickyPart from './Header-StickyPart/StickyPart';

function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <header style={{

    }}>
      <StickyPart />
    </header>
  )
}

export default Header