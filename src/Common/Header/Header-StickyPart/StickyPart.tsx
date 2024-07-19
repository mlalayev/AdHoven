import './StickyPart.css';
import logo from '../../../assets/logotwo.png';
import Switcher from '../../LanguageSwitcher/Switcher';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Temprature from '../Header-Temprature/Temprature.tsx'
import MenuNav from '../../../../HeaderMenu.json';


function StickyPart() {

  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
  }

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sticky-part">
      <img src={logo} alt="logo" className='logo' />
      {isMenuOpen && (
        <ul className='menu-ul'>
          <li><a href="#">{t('header.aboutus')}</a></li>
          <li><a href="#">{t('header.services')}</a></li>
          <li><a href="#">{t('header.faq')}</a></li>
          <li><a href="#">{t('header.contactus')}</a></li>
        </ul>
      )}

      <ul className='menu-ul-desktop'>
        {MenuNav[i18n.language].map((item) => {
          return (
            <li key={item.id}><a href={item.link}><span>{item.name}</span></a></li>
          )
        })}
      </ul>

      <div className="sticky-part-right">
        <Temprature />

        <div className='hamburger-menu'>
          <input
            type="checkbox"
            id="checkbox"
            checked={isMenuOpen}
            onChange={handleMenuToggle}
          />
          <label htmlFor="checkbox" className="toggle">
            <div className="bar bar--top"></div>
            <div className="bar bar--middle"></div>
            <div className="bar bar--bottom"></div>
          </label>
        </div>

        <Switcher changeLanguage={changeLanguage} />
      </div>
    </div>
  );
}

export default StickyPart;
