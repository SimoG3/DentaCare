import { Link } from "react-router-dom";

import "./Header.css";
import phoneSvg from '../assets/icones/telephone-svgrepo-com.svg'
import clockSvg from '../assets/icones/clock-svgrepo-com.svg'

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Cabinet on the left */}
        <div className="header-text">
          <Link to="/">Centre Dentaire Dr. SimoG</Link>
        </div>

        {/* Contact info on the right */}
        <div className="header-contact">
          <div className="header-phone">
            <img src={phoneSvg} alt="phone icon" />
            <a href="tel:+212520059494">+212 5 20 05 94 94</a>
          </div>
          
          <img src={clockSvg} alt="clock icon" /> 
          <div className="header-hours">Lundi - Vendredi :<strong> 09h00 - 19h30</strong></div> 
          <div className="header-hours">Samedi : <strong> 09h00 - 13h00</strong> </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
