const express = require('express');
const cors = require('cors');
const appointmentRoutes = require('./routes/appointmentRoutes');
const calendarRoutes = require("./routes/calendarRoutes");

const app = express();

// Autoriser les requêtes venant du front-end (Vite)
app.use(cors({
  origin: 'http://localhost:5173', // ou '*' en dev
  credentials: true
}));

app.use(express.json());
app.get('/', (req, res) => {
  res.send('🚀 Serveur Express fonctionne !');
});


app.use("/api", calendarRoutes);
app.use('/api', appointmentRoutes);

module.exports = app;
