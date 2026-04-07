const Medication = require("../models/Medication");

createMedication = async (req, res) => {
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