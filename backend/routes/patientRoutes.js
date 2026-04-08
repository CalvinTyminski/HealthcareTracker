const express = require('express'); 
const router = express.Router(); 
const {createPatient, getAllPatients, getPatientById, updatePatient, deletePatient} = require('../controller/patientController');
const auth = require("../middleware/authMiddleware");

router.post("/", auth, createPatient);
router.get("/", auth, getPatients);
router.get("/:id", auth, getPatientById);
router.put("/:id", auth, updatePatient);
router.delete("/:id", auth, deletePatient);

module.exports = router;