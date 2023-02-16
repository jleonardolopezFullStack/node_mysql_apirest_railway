const { Router } = require("express");
const { getIndexController } = require("../controllers/controllerIndex");

const routerIndex = Router();

routerIndex.get("/ping", getIndexController);

module.exports = { routerIndex };
