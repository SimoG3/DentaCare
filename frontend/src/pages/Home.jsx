//import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Home.css"
import imageHome from "../assets/pexels-fr3nks-305568.jpg";

import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const services = [
  { icon: `/src/assets/icones/tooth.png`, title: "Blanchiment dentaire", url: `/blanchiment` },
  { icon: `/src/assets/icones/tooth.png`, title: "Prothèse", url: `/prothese` },
  { icon: `/src/assets/icones/tooth.png`, title: "Soins généraux", url: `/soins` },
  { icon: `/src/assets/icones/tooth.png`, title: "Chirurgie", url: `/chirurgie` },
  { icon: `/src/assets/icones/tooth.png`, title: "Orthodontie", url: `orthodontie` },
];

const points = [
  "Hygiène & sécurité optimales",
  "Équipements de dernière génération",
  "Prise en charge douce & sans douleur",
  "Suivi personnalisé",
  "Facilité de prise de rendez-vous"
];


const Home = () => {
    return(
        <>
        <Header />
        <Navbar />

        <section
         className="hero-section"
         style={{
         backgroundImage: `url(${imageHome})`,
         }}
        >
         <div className="hero-overlay">
         <div className="hero-content">
             <h1 className="hero-title">Un sourire sain commence ici.</h1>
              <p className="hero-text">
              Bienvenue au Centre Dentaire du Dr. SimoG à Casablanca. Nous vous
             offrons des soins personnalisés, modernes et adaptés à tous les âges.
             </p>
             <Link to="/reservation" className="hero-button">
               Prendre Rendez-vous
             </Link>
         </div>
         </div>
        </section>

         <section className="services-section">
            <div className="services-container">
              <h2 className="services-title">Nos soins & spécialités</h2>
               <div className="services-grid">
                   {services.map((service, index) => (
                     <div key={index} className="service-card">
                       <Link to={service.url} className="service-link">
                         <div className="service-icon-container"><img src={service.icon} alt="icon" className="service-icon"/></div>
                         <h3 className="service-title">{service.title}</h3>
                       </Link>
                     </div>
                    ))}
               </div>
            </div>
         </section>

         <section className="choisir-section">
             <div className="choisir-container">
             <h2 className="choisir-title">🛋️ Pourquoi nous choisir ?</h2>
             <ul className="choisir-list">
                 {points.map((point, index) => (
                 <li key={index} className="choisir-item">
                     <span className="bullet">✓</span> {point}
                 </li>
                 ))}
             </ul>
             </div>
         </section>

         <section>
            <div className="card-container">
             <div className="hours-card1">
                <img src="/src/assets/icones/dentist-svgrepo-com.png" alt="time" className="hours-icon" />
                <h2 className="card-h2-1">Centre dentaire SimoG</h2>
      
                 <span className="card-text">
                    Nous mettons notre expertise au service de votre santé bucco-dentaire,
                    avec une approche rigoureuse et personnalisée pour diagnostiquer et traiter
                    efficacement chacun de vos problèmes dentaires.
                 </span>
             </div>
             <div className="hours-card2">
                <img src="/src/assets/icones/calendar.png" alt="time" className="hours-icon" />
                <h2>Horaires d'ouvertures</h2>
      
                 <div className="hours-row">
                    <span className="days">Lundi - Vendredi</span>
                    <span className="hours">9:00am - 19:00pm</span>
                 </div>
      
                 <div className="separator"></div>
      
                 <div className="hours-row">
                   <span className="days">Samedi</span>
                   <span className="hours">9:00am - 13:00pm</span>
                 </div>
             </div>
             <div className="hours-card3">
                <img src="/src/assets/icones/clinic-svgrepo-com.png" alt="time" className="hours-icon" />
                <h2 className="card-h2-1">Horaires d'ouvertures</h2>
      
                 <span className="card-text">
                    Dans un cadre moderne et apaisant, le Centre Dentaire du Dr. SimoG à Casablanca
                    offre des soins de qualité, fondés sur la confiance, l’écoute et une expertise reconnue.
                 </span>
             </div>
            </div>
         </section>


        <div id="footer"></div>
        <Footer />
        </>
    )
}

export default Home;