const express = require('express'); 
const router = express.Router(); 
const {createMedication, getMedicationsByPatient, administerMedications} = require('../controller/medicationController');
const auth = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");


router.post("/", auth, authorize("admin"), createMedication);
router.get("/patient/:patientId", auth, authorize("nurse", "admin"), getMedicationsByPatient);
router.patch("/:id/administer", auth, authorize("nurse", "admin"), administerMedication);

module.exports = router;