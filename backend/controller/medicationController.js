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

const administerMedications = async (req, res) => {
    try {
        const medication = await Medication.findById(req.params.patientId);
        if (!medication) {
            return res.status(404).json({message: "Not found"});
        }

        medication.status = "administered";
        medication.administeredAt = new Date();
        medication.administeredBy = req.user.id;

        await medication.save();

        res.status(201).json(medication);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

module.exports = {createMedication, getMedicationsByPatient, administerMedications};