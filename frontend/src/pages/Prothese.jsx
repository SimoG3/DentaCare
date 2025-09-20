//import React, { useState } from 'react';
import "./Soins.css"
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Prothese = () => {
    return(
        <>
        <Header />
        <Navbar />

        <div className="greyThing">Prothèse</div>

        <div className="description-container">
      <div className="description-text">
        <h2>Prothèse dentaire</h2>
        <p>
          La prothèse dentaire est une solution médicale et esthétique destinée à
          remplacer une ou plusieurs dents manquantes. Elle permet de restaurer la
          fonction masticatoire, d’améliorer l’élocution et de redonner un sourire
          harmonieux. Réalisée sur mesure par le chirurgien-dentiste en
          collaboration avec un prothésiste qualifié, elle s’adapte parfaitement à
          la morphologie buccale de chaque patient.
        </p>
        <p>
          Il existe différents types de prothèses selon les besoins : les
          prothèses fixes (couronnes, bridges, implants) qui offrent une stabilité
          optimale, et les prothèses amovibles (partielles ou complètes) qui
          constituent une alternative fiable et accessible. Le choix de la
          solution dépend de l’état bucco-dentaire, du nombre de dents à remplacer
          et des attentes du patient.
        </p>
        <p>
          Avant la pose, un examen clinique et radiologique complet est réalisé
          afin de déterminer la solution la plus adaptée. Une attention
          particulière est portée au confort, à l’esthétique et à la durabilité de
          la prothèse afin de garantir un résultat fonctionnel et naturel. Grâce
          aux techniques modernes et aux matériaux de haute qualité, les prothèses
          dentaires actuelles assurent une intégration discrète et un confort
          optimal au quotidien.
        </p>
      </div>
    </div>

        <Footer />
        </>
    )
}

export default Prothese;