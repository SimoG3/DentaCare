//import React, { useState } from 'react';
import "./Soins.css"
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Soins = () => {
    return(
        <>
        <Header />
        <Navbar />

        <div className="greyThing">Soins</div>

         <div className="description-container">
      <div className="description-text">
        <h2>Soins dentaires</h2>
        <p>
          Les soins dentaires regroupent l’ensemble des traitements réalisés par le
          chirurgien-dentiste afin de préserver la santé bucco-dentaire, soulager
          la douleur et maintenir la fonctionnalité des dents. Ils constituent la
          base de la pratique odontologique et concernent aussi bien la prévention
          que le traitement des affections courantes.
        </p>
        <p>
          Parmi les soins les plus fréquents, on retrouve le traitement des caries
          par obturation (plombage ou composite), le détartrage et le polissage pour
          l’entretien des gencives, ainsi que le traitement des infections
          nécessitant une prise en charge plus approfondie comme la dévitalisation.
          Ces interventions visent à stopper l’évolution des pathologies et à
          protéger les dents de complications futures.
        </p>
        <p>
          Les soins dentaires incluent également des actes de prévention comme les
          bilans réguliers, les conseils d’hygiène bucco-dentaire ou l’application
          de vernis fluorés afin de renforcer l’émail. Grâce aux techniques modernes
          et aux matériaux de haute qualité, ils allient efficacité, confort et
          esthétique pour garantir des résultats durables.
        </p>
        <p>
          Consulter régulièrement son dentiste pour des soins adaptés est essentiel
          afin de conserver une bouche saine, prévenir les maladies gingivales et
          maintenir un sourire en pleine santé tout au long de la vie.
        </p>
      </div>
    </div>

        <Footer />
        </>
    )
}

export default Soins;