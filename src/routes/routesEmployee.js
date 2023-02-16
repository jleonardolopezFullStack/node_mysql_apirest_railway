const { Router } = require("express");
const {
  getEmployeeController,
  postEmployeeController,
  putEmployeeController,
  deleteEmployeeController,
  getEmployeeOnlyController,
} = require("../controllers/controllerEmployee");
const routerEmployee = Router();

routerEmployee.get("/employees/:id", [], getEmployeeOnlyController);

routerEmployee.get("/employees", [], getEmployeeController);

routerEmployee.post("/employees", [], postEmployeeController);

routerEmployee.patch("/employees/:id", [], putEmployeeController);

routerEmployee.delete("/employees/:id", [], deleteEmployeeController);

//routerEmployee.patch("/employees/:id", [], patchEmployeeController);

module.exports = { routerEmployee };
