// backend/routes/appointmentRoutes.js
const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');


router.post('/reservation', appointmentController.createAppointment);


router.get('/', (req, res) => {
    res.end("here u got ur apis ig");
})
module.exports = router;
