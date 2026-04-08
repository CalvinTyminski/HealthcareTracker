const express = require('express'); 
const router = express.Router(); 
const {createPatient, getAllPatients, getPatientById, updatePatient, deletePatient} = require('../controller/patientController');
const auth = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

router.post("/", auth, authorize("admin"), createPatient);
router.get("/", auth, getAllPatients);
router.get("/:id", auth, getPatientById);
router.put("/:id", auth, authorize("admin"), updatePatient);
router.delete("/:id", auth, authorize("admin"), deletePatient);

module.exports = router;