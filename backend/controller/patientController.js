const Patient = require("../models/Patient");

const createPatient = async (req, res) => {
    try {
        const patient = await Patient.create(req.body);
        res.status(201).json(patient)
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

const getAllPatients = async (req, res) => {
    try {
        const patients = await Patient.find;
        res.json(patients)
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

const getPatientById = async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);
        if (!patient) return res.status(404).json({message: "Not found"})
        res.status(201).json(patient)
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

