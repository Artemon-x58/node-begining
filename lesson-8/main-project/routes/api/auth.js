const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/auth.js");

const { validateBody, authenticate } = require("../../middlewares");

const { schemas } = require("../../models/user.js");

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logOut);

module.exports = router;
