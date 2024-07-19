import Switcher from '../LanguageSwitcher/Switcher'
import { useTranslation } from 'react-i18next';
import StickyPart from './Header-StickyPart/StickyPart';

function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
  };
  return (
    <header>
      <StickyPart />
    </header>
  )
}

export default Header