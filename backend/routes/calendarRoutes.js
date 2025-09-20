// backend/routes/calendarRoutes.js
const express = require("express");
const router = express.Router();
const { getAppointmentsInRange } = require("../controllers/appointmentController");

// Route pour récupérer les RDV dans un intervalle de dates
router.get("/calendar", getAppointmentsInRange);

module.exports = router;
