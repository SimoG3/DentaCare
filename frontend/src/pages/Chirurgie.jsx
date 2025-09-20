//import React, { useState } from 'react';
import "./Soins.css"
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Chirurgie = () => {
    return(
        <>
        <Header />
        <Navbar />

        <div className="greyThing">Chirurgie</div>

        <div className="description-container">
      <div className="description-text">
        <h2>Chirurgie dentaire</h2>
        <p>
          La chirurgie dentaire regroupe l’ensemble des actes chirurgicaux réalisés
          dans le but de traiter, réparer ou améliorer la santé bucco-dentaire.
          Elle intervient lorsque les soins classiques ne suffisent plus et
          constitue une étape essentielle pour préserver la fonctionnalité et
          l’esthétique du sourire.
        </p>
        <p>
          Parmi les interventions les plus courantes figurent l’extraction des dents
          de sagesse, la chirurgie des gencives (gingivectomie, greffe), la pose
          d’implants dentaires ou encore le traitement chirurgical des kystes et
          lésions de la cavité buccale. Ces actes sont réalisés sous anesthésie
          locale ou générale, selon leur complexité et les besoins du patient.
        </p>
        <p>
          Avant toute intervention, un bilan clinique et radiologique complet est
          effectué afin d’évaluer la situation et de proposer la technique la plus
          adaptée. L’objectif est d’assurer une prise en charge sécurisée, efficace
          et respectueuse du confort du patient.
        </p>
        <p>
          Grâce aux avancées technologiques et à l’utilisation de matériaux modernes,
          la chirurgie dentaire permet aujourd’hui d’obtenir des résultats fiables,
          durables et esthétiques, tout en minimisant la douleur post-opératoire et
          en favorisant une récupération rapide.
        </p>
      </div>
    </div>

        <Footer />
        </>
    )
}

export default Chirurgie;