// backend/controllers/appointmentController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createAppointment = async (req, res) => {
  const { nom, prenom, telephone, date, heure, motifConsultation, mutuelle, description } = req.body;

  try {
    // Vérifier si le téléphone existe déjà
    const existing = await prisma.client.findUnique({
      where: { telephone },
    });

    if (existing) {
      return res.status(400).json({ error: "Numéro déjà utilisé." });
    }

    const dateRdv = new Date(`${date}T${heure}`); 

    if (isNaN(dateRdv.getTime())) {
      return res.status(400).json({ error: "Date ou heure invalide." });
    }

    // Créer un nouveau client avec rendez-vous
    const client = await prisma.client.create({
      data: {
        nom,
        prenom,
        telephone,
        motifConsultation,
        mutuelle,
        description,
        dateRdv,
      },
    });

    res.status(201).json(client);
  } catch (err) {
    console.error("Erreur serveur dans createAppointment:", err);
    res.status(500).json({ error: "Erreur serveur." });
  }
};

// Récupère tous les RDV dans un intervalle donné
exports.getAppointmentsInRange = async (req, res) => {
  const { start, end } = req.query;

  if (!start || !end) {
    return res.status(400).json({ error: "start and end dates required" });
  }

  try {
    const appointments = await prisma.client.findMany({
      where: {
        dateRdv: {
          gte: new Date(start),
          lte: new Date(end)
        }
      },
      orderBy: {
        dateRdv: 'asc'
      }
    });

    // Format for FullCalendar
    const events = appointments.map(client => ({
      id: client.id,
      title: `${client.nom} ${client.prenom}`,
      start: client.dateRdv,
      extendedProps: {
        telephone: client.telephone,
        motifConsultation: client.motifConsultation,
        mutuelle: client.mutuelle,
        description: client.description
      }
    }));

    res.status(200).json(events);
  } catch (error) {
    console.error("Erreur récupération RDV calendrier", error);
    res.status(500).json({ error: "Erreur serveur." });
  }
};
