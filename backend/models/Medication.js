const mongoose = require('mongoose');

const medicationSchema = new mongoose.Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    name: { type: String, required: true },
    dosage: String,
    scheduleTime: { type: Date, required: true },
    status: {
        type: String,
        enum: ["scheduled", "administered", "missed"],
        default: "scheduled"
    },
    administeredAt: Date,
    administeredBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Medication', medicationSchema);