const express = require("express");
// Stands for "contraindications" tabel in DB
const pControllers = require("../controllers/procedureControllers");
const router = express.Router();

// @ routes GET /procedures/ For Users -----------------------

//   http://localhost:4000/procedures/procedures-diseases

// Here Added On in name to show Only Procedures that Depends On Definite procedures

// router.route("/proc_all_filters").get(pControllers.getProceduresAnyFilters);

// router.route("/procedures_diseases").get(pControllers.getProceduresDiseases);

// router.route("/procedures_targets").get(pControllers.getProceduresTargets);

// router.route("/procedures_symptoms").get(pControllers.getProceduresSymptoms);

// router.route("/procedures_prices").get(pControllers.getProceduresPrices);

router.route("/procTarSymp").get(pControllers.getProceduresTargetsSymptoms);

// !!  .get(pControllers.getProceduresTargetsSymptoms)
// !!  .get(pControllers.getProceduresTargetsDiseases)
// !! .get(pControllers.getProceduresSymptomsDiseases)

//   .get(pControllers.getProceduresTargetsPrice)
//   .get(pControllers.getProceduresSymptomsPrice)
//   .get(pControllers.getProceduresDiseasesPrice)

// !!  .get(pControllers.getProceduresTargetsSymptomsDiseases);
//   .get(pControllers.getProceduresTargetsSymptomsPrice);
//   .get(pControllers.getProceduresSymptomsDiseasesPrice);
//   .get(pControllers.getProceduresTargetsDiseasesPrice);

/** ------------------------------------------------------------------
 * Routses GET && POST && PUT && DELETE /procedures/ for Admin-panel
 */
router.route("/").get(pControllers.getAllProcedures);

//http://localhost:4000/procedures/newprocedure/
router.route("/newprocedure").post(pControllers.postNewProcedure);

// GET procedure by Id
router.route("/:id").get(pControllers.getProcedureById);

// PUT & DELETE router by Id
router
  .route("/:id")
  .put(pControllers.updateProcedureById)
  .delete(pControllers.deleteProcedureById);

module.exports = router;
