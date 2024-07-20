import React from 'react';
import './Footer.css';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import video from '../../assets/adhovenvideogif.mp4'

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer">
        <section className="social-media">
          <div className="social-media-text">
            <span>Get connected with us on social networks:</span>
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
            <h6 className="footer-title">Company name</h6>
            <hr className="footer-hr" />
            <p style={{
              maxWidth: "300px"
            }}>
              <iframe src={video} frameborder="2"
                title="Looping Video"
                allow="autoplay"
                allowFullScreen
                className="iframe"
              ></iframe>
              Here you can use rows and columns to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </div>
          <div className="footer-column">
            <h6 className="footer-title">Products</h6>
            <hr className="footer-hr" />
            <p>
              <a href="#!" className="footer-link">MDBootstrap</a>
            </p>
            <p>
              <a href="#!" className="footer-link">MDWordPress</a>
            </p>
            <p>
              <a href="#!" className="footer-link">BrandFlow</a>
            </p>
            <p>
              <a href="#!" className="footer-link">Bootstrap Angular</a>
            </p>
          </div>
          <div className="footer-column">
            <h6 className="footer-title">Useful links</h6>
            <hr className="footer-hr" />
            <p>
              <a href="#!" className="footer-link">Your Account</a>
            </p>
            <p>
              <a href="#!" className="footer-link">Become an Affiliate</a>
            </p>
            <p>
              <a href="#!" className="footer-link">Shipping Rates</a>
            </p>
            <p>
              <a href="#!" className="footer-link">Help</a>
            </p>
          </div>
          <div className="footer-column">
            <h6 className="footer-title">Contact</h6>
            <hr className="footer-hr" />
            <p><i className="fas fa-home"></i> New York, NY 10012, US</p>
            <p><i className="fas fa-envelope"></i> info@example.com</p>
            <p><i className="fas fa-phone"></i> + 01 234 567 88</p>
            <p><i className="fas fa-print"></i> + 01 234 567 89</p>
          </div>
        </section>
        <div className="footer-copyright">
          © 2020 Copyright:
          <a className="footer-link" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
