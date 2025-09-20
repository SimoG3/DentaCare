//import React, { useState } from 'react';
import "./Soins.css"
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Orthodontie = () => {
    return(
        <>
        <Header />
        <Navbar />

        <div className="greyThing">Orthodontie</div>

        <div className="description-container">
  <div className="description-text">
    <h2>Orthodontie</h2>
    <p>
      L’orthodontie est une spécialité de la dentisterie qui se concentre sur la correction
      des malpositions dentaires et des anomalies des mâchoires. Elle vise à améliorer
      l’alignement des dents, l’occlusion (le contact entre les dents supérieures et
      inférieures) et l’harmonie du visage, tout en garantissant une fonction masticatoire
      optimale. Cette discipline ne se limite pas à des raisons esthétiques : un alignement
      correct des dents contribue à prévenir l’usure prématurée, les troubles articulaires,
      les difficultés de mastication et certaines pathologies des gencives.
    </p>
    <p>
      Les traitements orthodontiques utilisent différents dispositifs adaptés à l’âge, à la
      morphologie et aux besoins du patient. Parmi ceux-ci, on retrouve les bagues métalliques
      traditionnelles, les appareils céramiques moins visibles, et les aligneurs transparents
      modernes, qui permettent de corriger progressivement la position des dents de manière
      discrète et confortable. Le choix du dispositif est toujours précédé d’un examen clinique
      et radiologique complet pour déterminer la stratégie la plus adaptée et sécurisée.
    </p>
    <p>
      L’orthodontie concerne aussi bien les enfants, dont la croissance osseuse permet de
      corriger plus facilement certaines anomalies, que les adultes, grâce aux techniques
      modernes qui offrent des solutions efficaces et esthétiques. Le suivi régulier et
      la maintenance des appareils sont essentiels pour garantir des résultats durables
      et éviter toute complication.
    </p>
    <p>
      En complément du traitement, le dentiste ou l’orthodontiste prodigue des conseils
      d’hygiène bucco-dentaire et d’entretien des appareils afin de préserver la santé
      générale de la bouche. Grâce aux avancées technologiques, l’orthodontie moderne
      permet aujourd’hui d’allier efficacité, confort et esthétique, offrant ainsi aux
      patients un sourire harmonieux, fonctionnel et durable.
    </p>
  </div>
</div>


        <Footer />
        </>
    )
}

export default Orthodontie;