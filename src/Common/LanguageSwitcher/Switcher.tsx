import './Switcher.css';
import '../Root.css'
import ruFlag from '../../assets/ru.svg';
import gbFlag from '../../assets/gb.svg';
import azFlag from '../../assets/az.svg';
import { useTranslation } from 'react-i18next';
import { useState, useEffect, useRef } from 'react';

const Switcher = ({ changeLanguage }: any) => {
    const dropdownRef = useRef<HTMLDivElement>(null);
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('selectedLanguage') || i18n.language || 'en');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleLanguageChange = (language: string) => {
        setSelectedLanguage(language);
        changeLanguage(language);
        localStorage.setItem('selectedLanguage', language); // Save selected language to localStorage
        setIsOpen(!isOpen); // Close the dropdown menu
    };

    const getFlagSrc = (language: string) => {
        switch (language) {
            case 'en':
                return gbFlag;
            case 'az':
                return azFlag;
            case 'ru':
                return ruFlag;
            default:
                return selectedLanguage;
        }
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const savedLanguage = localStorage.getItem('selectedLanguage');
        if (savedLanguage && savedLanguage !== i18n.language) {
            changeLanguage(savedLanguage);
        }
    }, [i18n.language, changeLanguage]);

    return (
        <div className="language-dropdown" ref={dropdownRef}>
            <button onClick={toggleDropdown} className="dropdown-toggle">
                <img src={getFlagSrc(selectedLanguage)} alt="SelectedFlag" className="flag" />
            </button>
            {isOpen && (
                <ul className="language-menu">
                    {selectedLanguage !== 'en' && (
                        <li onClick={() => handleLanguageChange('en')}>
                            <img src={gbFlag} alt="GBFlag" className="flag" />
                        </li>
                    )}
                    {selectedLanguage !== 'az' && (
                        <li onClick={() => handleLanguageChange('az')}>
                            <img src={azFlag} alt="AZFlag" className="flag" />
                        </li>
                    )}
                    {selectedLanguage !== 'ru' && (
                        <li onClick={() => handleLanguageChange('ru')}>
                            <img src={ruFlag} alt="RUFlag" className="flag" />
                        </li>
                    )}
                </ul>
            )}
        </div>
    );
};

export default Switcher;
