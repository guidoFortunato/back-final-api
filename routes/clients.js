const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const { getClients, getPartidos } = require("../controllers/clients");
const { validateFields } = require("../middlewares/validate-fields");

router.get(
  "/",
  getClients
);

router.post(
  "/partido",
  [
    check("name", "El nombre es obligatorio").not().isEmpty(), 
    validateFields
  ],
  getPartidos
);

module.exports = router;
