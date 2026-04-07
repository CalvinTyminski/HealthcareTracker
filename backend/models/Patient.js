const mongoose = require('mongoose'); 

const patientSchema = new mongoose.Schema({
    _id: Objectid,
    patientId: {type: String, required: true},
    name: {type: String, required: true},
    dateofBirth: {type: Date, required: true}
});

module.exports = mongoose.model('Patient', patientSchema);