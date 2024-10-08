import './StickyPart.css';
import logo from '../../../assets/logotwo.png';
import Switcher from '../../LanguageSwitcher/Switcher.tsx';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Temprature from '../Header-Temprature/Temprature.tsx'
import MenuNav from '../../../../HeaderMenu.json';

function StickyPart() {
  const { i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      style={{
        // maxWidth: "20.vw"
      }}
      className="sticky-part">
      <img src={logo} alt="logo" className='logo' />

      <ul className={`menu-ul ${isMenuOpen ? 'active' : ''}`}>
        {MenuNav[i18n.language].map((item) => (
          <li key={item.id}>
            <a href={item.link}>
              <span>{item.name}</span>
            </a>
          </li>
        ))}
      </ul>

      <ul className={`menu-ul-desktop ${isMenuOpen ? 'active' : ''}`}>
        {MenuNav[i18n.language].map((item) => (
          <li key={item.id} className={item.submenu ? 'has-submenu' : ''}>
            <a className='donttry' href={item.link}>
              <span>{item.name}</span>
            </a>
            {item.submenu && (
              <ul className="submenul">
                {item.submenu.map((subItem) => (
                  <li className='none' key={subItem.id}>
                    <a href={subItem.link}>{subItem.name}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
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
