import Logo from "../../assets/logo.png";
import { FiUser } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import "./navbar.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [isOn, setIsOn] = useState(false);
  const navigateTo = useNavigate();

  const handleMenu = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <header>
      <nav>
        <div className="container nav__lists">
          <a href="#hero" className="logo">
            <img src={Logo} alt="" />
          </a>

          <ul className={`nav__menu ${isOn ? "show_nav" : ""}`}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="#listing">Rentals</Link>
            </li>
            <li>
              <Link to="#categories">Categories</Link>
            </li>
            <li>
              <Link to="#performance">About Us</Link>
            </li>
            <li>
              <Link to="#footer">Contact</Link>
            </li>
            <li>
              <Link to="#article">Blog</Link>
            </li>
          </ul>

          <div className="right__nav">
            <div className="sigin__cont" onClick={() => navigateTo("/signin")}>
              <span id="sigin__icon">
                <FiUser />
              </span>
              <h6>Sign in</h6>
            </div>
          </div>

          <div className="last__nav">
            <div className="menu__option">
              <span onClick={handleMenu} id="menu">
                <IoMenu />
              </span>
              {/* <span onClick={handleExit}
                  id="exit"><MdOutlineCancel /></span> */}
            </div>

            <div className="post__listening">
              <span id="FiPlus">
                <FiPlus />
              </span>
              <h6>Post Listening</h6>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
