import footer from "../styles/footer.css";
import footerLogo from "../images/little-lemon-footer-logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section id="footer-section">
      <div className="footer-container">
        <img src={footerLogo} />
        <div className="footer-wrapper">
          <div id="about">
            <h4>About us</h4>
            <ul>
              <Link to="/">
                <li>Out Company</li>
              </Link>
              <Link to="/">
                <li>Suppliers</li>
              </Link>
              <Link to="/">
                <li>Careers</li>
              </Link>
              <Link to="/">
                <li>Newsletter</li>
              </Link>
              <Link to="/">
                <li>Customer Service</li>
              </Link>
              <Link to="/">
                <li>Contact Us</li>
              </Link>
            </ul>
          </div>
          <div id="contact-info">
            <h4>Contacts</h4>
            <ul>
              <li>+1(123)456-7890</li>
              <li>info@littlelemon.com</li>
              <li>123 Ford Blvd, Chicago, IL, 60618</li>
            </ul>
          </div>
          <div id="availability">
            <h4>Availability</h4>
            <ul>
              <li>Tues-Sun: 12pm-10pm</li>
              <li>Mon: Closed</li>
            </ul>
          </div>
          <div id="social-media">
            <h4>Socials</h4>
            <ul>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Pinterest</li>
              <li>Twitter/X</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
