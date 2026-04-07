const Medication = require("../models/Medication");

const createMedication = async (req, res) => {
    try {
        const medication = await Medication.create({
            ...req.body,
            status: "scheduled"
        });

        res.status(201).json(medication);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

const getMedicationsByPatient = async (req, res) => {
    try {
        const meds = await Medication.find({
            patientId: req.params.patientId
        });

        res.status(201).json(meds);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};