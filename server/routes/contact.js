const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const {validateContact} = require("../middleware.js");

const contactController = require("../controllers/contacts.js");

router.post("/", validateContact, wrapAsync(contactController.createContact));

module.exports = router;