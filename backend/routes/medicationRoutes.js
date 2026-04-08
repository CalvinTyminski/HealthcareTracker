const express = require('express'); 
const router = express.Router(); 
const {createMedication, getMedicationsByPatient, administerMedication} = require('../controller/medicationController');
const auth = require("../middleware/authMiddleware");

router.post("/", auth, createMedication);
router.get("/patient/:patientId", auth, getMedicationsByPatient);
router.patch("/:id/administer", auth, administerMedication);

module.exports = router;