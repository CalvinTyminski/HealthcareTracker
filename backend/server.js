require ('dotenv').config();

const connectDB = require('./config/db')
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const patientRoutes = require('./routes/patientRoutes');
const medicationRoutes = require('./routes/medicationRoutes');
const authMiddleware = require('./middleware/authMiddleware');

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/patients', patientRoutes);
app.use('/api/medications', medicationRoutes);


app.get('/', (req, res) => {
    res.send('API running...');
});

app.get('/api/test', authMiddleware, (req, res) =>{
    res.json({message: "Protected route working", user: req.user});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;