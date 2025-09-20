import React, { useState } from 'react';
import { bookAppointment } from "../services/appointmentService";
import "./Appointment.css"
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Appointment = () => {
  const [form, setForm] = useState({
    nom: '',
    prenom: '',
    telephone: '',
    dateRdv: '',
    heureRdv: '',
    motifConsultation: '',
    mutuelle: '',
    description: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

   const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await bookAppointment(form);
      alert("✅ Rendez-vous réservé !");
    } catch (error) {
        const message =
        typeof error === "string"
        ? error
        : error?.error || "Erreur inconnue";

      alert("❌ Erreur : " + message);
    }

  };

  return (
    <>
    <Header />
    <Navbar/>

     <div className="greyThing">Rendez-vous</div>

     <form onSubmit={handleSubmit} className="reservation-form">

       <input name="nom" placeholder="Nom" onChange={handleChange} required />
       <input name="prenom" placeholder="Prénom" onChange={handleChange} required />
       <input name="telephone" placeholder="Téléphone" onChange={handleChange} required />
       <input name="date" type="date" onChange={handleChange} required />
       <input name="heure" type="time" onChange={handleChange} required />
       <input name="motifConsultation" placeholder="Motif de Consultation"  onChange={handleChange} required />
       <input name="mutuelle" placeholder="Mutuelle (optionnel)" onChange={handleChange} />
       <textarea name="description" placeholder="Description (optionnelle)" onChange={handleChange}></textarea>
       <button type="submit" className="reservation-button">Réserver</button>

     </form>

     <Footer />
    </>
  );
};

export default Appointment;
