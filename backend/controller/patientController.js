const Patient = require("../models/Patient");

const createPatient = async (req, res) => {
    try {
        const patient = await Patient.create(req.body);
        res.status(201).json(patient)
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};