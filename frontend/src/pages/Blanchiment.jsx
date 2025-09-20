//import React, { useState } from 'react';
import "./Soins.css"
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Blanchiment = () => {
    return(
        <>
        <Header />
        <Navbar />

        <div className="greyThing">Blanchiment</div>

        <div className="description-container">
      <div className="description-text">
        <h2>Blanchiment dentaire professionnel</h2>
        <p>
          Le blanchiment dentaire professionnel est un traitement esthétique visant
          à éclaircir la teinte naturelle des dents et à réduire les colorations
          dues au temps, à l’alimentation ou au tabac. Réalisé sous la supervision
          d’un chirurgien-dentiste, il permet d’obtenir un sourire plus lumineux de
          manière sûre et efficace.
        </p>
        <p>
          Contrairement aux produits disponibles en libre-service, le blanchiment
          pratiqué en cabinet utilise des agents actifs concentrés, appliqués dans
          des conditions contrôlées et adaptées à chaque patient. Avant toute
          intervention, un examen complet est effectué afin d’évaluer la santé
          bucco-dentaire et de définir la teinte cible.
        </p>
        <p>
          Le traitement inclut une protection des gencives suivie de l’application
          d’un gel blanchissant activé par une lampe. Les résultats sont visibles
          immédiatement après la séance et peuvent être renforcés par un suivi à
          domicile grâce à des gouttières personnalisées.
        </p>
      </div>
    </div>

        <Footer />
        </>
    )
}

export default Blanchiment;