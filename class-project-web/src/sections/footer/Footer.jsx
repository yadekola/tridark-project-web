import Logo from '../../assets/logo.png'
import { PiInstagramLogoFill } from "react-icons/pi";
import { IoLogoYoutube } from "react-icons/io";
import { MdOutlineFacebook } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import './footer.css'

function Footer() {
  return (
    <section id="footer">
        <div className="container footer__container">
                <div className="first__footer">
                <a href="index.html" >
                      <img className="footer__logo" src={Logo} alt="" />
                    </a>
                    <h6>Sri Lanka's first & largest platform designed to create an online marketplace exclusively for RENT</h6>
                    

                    <span className="footer__icon">
                          <span className="footer__iconn"><PiInstagramLogoFill /></span>
                          <span className="footer__iconn"><FaTwitter /></span>
                          <span className="footer__iconn"><IoLogoYoutube /></span>
                          <span className="footer__iconn"><MdOutlineFacebook /></span>
                          <span className="footer__iconn"><FaLinkedin /></span>

                    </span>
                </div>

                <div className="second__footer">
                    <h3>Navigation</h3>

                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>

                <div className="third__footer">
                    <h3>Featured Locations</h3>

                    <ul>
                        <li><a href="#">Kandy</a></li>
                        <li><a href="#">Anuradhapura</a></li>
                        <li><a href="#">Badulla</a></li>
                        <li><a href="#">Colombo</a></li>
                        <li><a href="#">Kaluthara</a></li>
                    </ul>
                </div>

                <div className="fourth__footer">
                    <h3>Help</h3>

                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>

                <div className="fifth__footer">
                    <h3>Subscribe to Our Newsletter</h3>
                    <h6>Stay updated with the latest listings and rental tips.</h6>

                    <form>
                        <input type="text" className="footer__input" placeholder='Email Address'/>
                        <button className="btn__subscribe">Subscribe</button>
                    </form>
                </div>
        </div>
    </section>
  )
}

export default Footer