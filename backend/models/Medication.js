const mongoose = require('mongoose'); 

const medicationSchema = new mongoose.Schema({
    patientId: {type: String, required: true},
    name: {type: String, required: true},
    dosage: String,
    scheduleTime: {type: Date, required: true},
    status: "scheduled" | "administered" | "missed", 
    amdministeredAt: {type: Date, required: true},
    amdinisteredBy: {type: ObjectId, requried: true}
});

module.exports = mongoose.model('Medication', medicationSchema);