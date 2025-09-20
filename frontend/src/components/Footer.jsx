import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">

        {/* Logo */}
        <div className="footer-logo">
          <img className="logo-cabinet" src="/src/assets/tooth.png" alt="Logo Cabinet"/>
          <p className="footer-text">Centre Dentaire Dr. SimoG</p>
        </div>

        {/* Coordonnées */}
        <div className="coordonnees">
          <h3 className="footer-title">Coordonnées</h3>
          <p className="footer-text">Tél : <a href="tel:+212612345678" className="footer-link"><div className="details">+212 6 12 34 56 78</div></a></p>
          <p className="footer-text">Email : <a href="mailto:contact@dentiste.ma" className="footer-link"><div className="details">contact@dentiste.ma</div></a></p>
          
          <p className="footer-text">Réseau social :</p>
          <div className="footer-social">
              <img className="instagram-icon" src="/src/assets/icones/instagram.png" alt="instagram logo" />
              <span><div className="footer-details">@centredentairesimog</div></span>
          </div>
        </div>

        {/* Localisation */}
        <div className="localisation">
          <h3 className="footer-title">Localité</h3>
          <p className="footer-text">Maarif, Oulfa</p>
          <p className="footer-text">Casablanca, Maroc</p>
        </div>

        {/* Horaires */}
        <div className="horaire">
          <h3 className="footer-title">Horaires</h3>
          <p className="footer-text">Lundi - Vendredi : <div className="details">09h00 - 19h30</div></p>
          <p className="footer-text">Samedi : <div className="details">9h00 - 13h00</div></p>
          <p className="footer-text">Dimanche : <div className="details">Fermé</div></p>
        </div>
      </div>

      <div className="footer-bottom">
        <div> Icons made by <a href="https://www.flaticon.com/authors/maan-icons" title="Maan Icons"> Maan Icons </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>
        &copy; {new Date().getFullYear()} Cabinet Dentiste. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
