import React from 'react';
import '../styles/Footer.css'; // Link to the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section subscribe">
          <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
          <p>Lorem Ipsum Dolor Sit Amet. Aut Ipsum Illum Et Nostrum Quidem Aut Necesbus Enim</p>
          <div className="subscribe-input">
            <input type="email" placeholder="Enter Your Email Address" />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className="footer-section about">
          <h3>ABOUT US</h3>
          <ul>
            <li>Our Story</li>
            <li>Blogs</li>
            <li>Careers</li>
            <li>Contact Us</li>
            <li>Help & Support</li>
          </ul>
        </div>

        <div className="footer-section services">
          <h3>OUR SERVICES</h3>
          <ul>
            <li>Book Maali</li>
            <li>Plant Day Care</li>
            <li>Rent Plants</li>
            <li>Plants & Pots</li>
            <li>Gardening Tools</li>
          </ul>
        </div>

        <div className="footer-section links">
          <h3>USEFUL LINKS</h3>
          <ul>
            <li>My Account</li>
            <li>Orders & Returns</li>
            <li>Track Order</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>GET IN TOUCH</h3>
          <p>Address: F-262, First Floor, Sushant Lok Phase-III, Sector-57, Gurgaon, Haryana, India 122003</p>
          <p>Call: +919958287272</p>
          <p>Email: care@chaperoneplants.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-info">
          <h3>CHAPERONE</h3>
          <p>Lorem ipsum dolor sit amet, aut ipsum illum et nostrum quidem aut necessitatibus.</p>
        </div>

        <div className="social-icons">
          <p>Follow us on</p>
          <div className="icons">
            <i class="bi bi-instagram"></i>
            <i class="bi bi-facebook"></i>
            <i class="bi bi-threads-fill"></i>
            <i class="bi bi-youtube"></i>
            <i class="bi bi-linkedin"></i>
          </div>
        </div>

        <div className="footer-copyright">
          <p>© 2023, chaperone.com All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
