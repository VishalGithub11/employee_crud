const {
  getAllEmployee,
  createEmp,
  updateEmpl,
  deleteEmp,
} = require("../controller/employee");
const router = require("./user");

router.get("/getallemp", getAllEmployee);

router.post("/createemp", createEmp);

router.patch("/updateemp/:id", updateEmpl);

router.delete("/deleteemp/:id", deleteEmp);

module.exports = router;
