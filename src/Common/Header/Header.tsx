import Switcher from '../LanguageSwitcher/Switcher'
import { useTranslation } from 'react-i18next';

function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div>
      <Switcher changeLanguage={changeLanguage} />
      <h1>{t('header.home')}</h1>
    </div>
  )
}

export default Header