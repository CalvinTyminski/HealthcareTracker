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
        }).populate("administeredBy", "username");

        res.status(200).json(meds);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

const administerMedications = async (req, res) => {
    try {
        const updated = await Medication.findByIdAndUpdate(
            req.params.id,
            {
                status: "administered",
                administeredAt: new Date(),
                administeredBy: req.user.id
            },
            { new: true }
        ).populate("administeredBy", "username");

        console.log("UPDATED WITH POPULATE:", updated); // ✅ debug

        res.status(200).json(updated);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {createMedication, getMedicationsByPatient, administerMedications};