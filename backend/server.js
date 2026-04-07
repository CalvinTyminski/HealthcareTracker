require ('dotenv').config();

const connectDB = require('./config/db')
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const authMiddleware = require('./middleware/authMiddleware');

const app = express();

connectDB();

app.use('/api/auth', authRoutes);
app.use(cors());
app.use(express.json());

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