import './StickyPart.css';
import logo from '../../../assets/Logo.png';
import Switcher from '../../LanguageSwitcher/Switcher';
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';

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

      {isMenuOpen && (
        <ul className='menu-ul'>
          <li><a href="#">{t('header.aboutus')}</a></li>
          <li><a href="#">{t('header.services')}</a></li>
          <li><a href="#">{t('header.activity')}</a></li>
          <li><a href="#">{t('header.media')}</a></li>
          <li><a href="#">{t('header.faq')}</a></li>
          <li><a href="#">{t('header.contactus')}</a></li>
        </ul>
      )}

      <ul className='menu-ul-desktop'>
        <li><a href="#">{t('header.aboutus')}</a></li>
        <li><a href="#">{t('header.services')}</a></li>
        <li><a href="#">{t('header.activity')}</a></li>
        <li><a href="#">{t('header.media')}</a></li>
        <li><a href="#">{t('header.faq')}</a></li>
        <li><a href="#">{t('header.contactus')}</a></li>
      </ul>

      <Switcher changeLanguage={changeLanguage} />
    </div>
  );
}

export default StickyPart;
