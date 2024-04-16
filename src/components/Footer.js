import { Link } from "react-router-dom";
import Logo from "../logo.png";
import fb from "../assets/facebook.png";
import insta from "../assets/instagram.png";
import x from "../assets/twitter.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="logo-footer">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>

        <div className="footer-links">
          <div className="footer-blogs">
            <h2>Our Blogs</h2>
            <ul>
              <li title="Blog 1">Blog 1</li>
              <li title="Blog 2">Blog 2</li>
              <li title="Blog 3">Blog 3</li>
            </ul>
          </div>
          <div className="footer-blogs ">
            <h2>About Us</h2>
            <ul>
              <li title="Client Reviews">Client Reviews</li>
              <li title="Team Members">Team Members</li>
              <li title="Our Portfolio">Our Portfolio</li>
            </ul>
          </div>
          <div className="footer-blogs">
            <h2>Contact Us</h2>
            <div className="footer-blogs-links">
              <img src={fb} alt="logo" />
              <img src={insta} alt="logo" />
              <img src={x} alt="logo" />
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">© Book My Hotel | All rights reserved</div>
    </div>
  );
};
export default Footer;
