import './Footer.css';
import React from 'react';
import { useTranslation } from 'react-i18next';
import video from '../../assets/adhovenvideogif.mp4';
// import footerDataOne from '../../../FooterColumnFirst.json';
// import footerDataTwo from '../../../FooterColumnSecond.json';
// import footerDataThree from '../../../FooterColumnThird.json';
import { FaFacebook, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

import footerDataOne from '../../../FooterColumnFirst.json';
import footerDataTwo from '../../../FooterColumnSecond.json';
import footerDataThree from '../../../FooterColumnThird.json';
import Scroll from './ScrollToTop/Scroll';

// Ensure that the JSON data is typed correctly
const footerDataOneTyped: FooterDataSet = footerDataOne;
const footerDataTwoTyped: FooterDataSet = footerDataTwo;
const footerDataThreeTyped: FooterDataSet = footerDataThree;


interface FooterLink {
  name: string;
  url: string;
}

interface FooterContactDetail {
  icon: string;
  text: string;
}

interface FooterColumn {
  title: string;
  links?: FooterLink[];  // `links` is optional
  contactDetails?: FooterContactDetail[];  // `contactDetails` is optional
}

interface FooterData {
  footerColumns: FooterColumn[];
}

interface FooterDataSet {
  en: FooterData;
  az: FooterData;
  ru: FooterData;
}

const Footer = () => {
  const { t, i18n } = useTranslation();
  console.log(footerDataOne);

  return (
    <div
    style={{
      marginTop:"20px"
    }}
    className="footer-container">
      <footer className="footer">
        <section className="social-media">
          <div className="social-media-text">
            <span>{t('Get connected with us on social networks:')}</span>
          </div>
          <div className="social-media-icons">
            <a href="#" className="social-icon">
              <FaFacebook />
            </a>
            <a href="#" className="social-icon">
              <FaTwitter />
            </a>
            <a href="#" className="social-icon">
              <FaGoogle />
            </a>
            <a href="#" className="social-icon">
              <FaInstagram />
            </a>
            <a href="#" className="social-icon">
              <FaLinkedin />
            </a>
            <a href="#" className="social-icon">
              <FaGithub />
            </a>
          </div>
        </section>
        <section className="footer-links">
          <div className="footer-column">
            <video src={video} loop autoPlay muted className="video" />
            <p style={{ maxWidth: "300px", display: "none" }}>
              Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div className="footer-column">
            <h6 className="footer-title">{t('footer.contacts')}</h6>
            <hr className="footer-hr" />
            {footerDataOne[i18n.language as keyof FooterDataSet].footerColumns[0].links.map((link: FooterLink, index: number) => (
              <p key={index}>
                <a href={link.url} className="footer-link">{link.name}</a>
              </p>
            ))}
          </div>

          <div className="footer-column">
            <h6 className="footer-title">{t('footer.usefullinks')}</h6>
            <hr className="footer-hr" />
            {footerDataTwo[i18n.language as keyof FooterDataSet].footerColumns[0].links.map((link: FooterLink, index: number) => (
              <p key={index}>
                <a href={link.url} className="footer-link">{link.name}</a>
              </p>
            ))}
          </div>

          <div className="footer-column">
            <h6 className="footer-title">{t('footer.contacts')}</h6>
            <hr className="footer-hr" />
            {footerDataThree[i18n.language as keyof FooterDataSet].footerColumns[0].contactDetails.map((detail: FooterContactDetail, index: number) => (
              <p key={index}>
                <i className={detail.icon}></i> {detail.text}
              </p>
            ))}
          </div>
        </section>
        <div className="footer-copyright">
          © 2024 Copyright: <span> </span>
          <a className="footer-link" href="https://Adhoven.com/">Adhoven.com</a>
        </div>
      </footer>
      <Scroll />
    </div>
  );
};

export default Footer;
