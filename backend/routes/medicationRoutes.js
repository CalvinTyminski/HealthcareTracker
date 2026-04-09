const express = require('express'); 
const router = express.Router(); 
const {createMedication, getMedicationsByPatient, administerMedications} = require('../controller/medicationController');
const auth = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");
const Medication = require('../models/Medication');


router.post("/", auth, authorize("admin"), createMedication);
router.get("/", auth, authorize("nurse", "admin"), async (req, res) => {
  const meds = await Medication.find();
  res.json(meds);
});
router.get("/patient/:patientId", auth, authorize("nurse", "admin"), getMedicationsByPatient);
router.patch("/:id/administer", auth, authorize("nurse", "admin"), administerMedications);


module.exports = router;