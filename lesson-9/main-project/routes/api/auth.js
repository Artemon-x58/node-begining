const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/auth.js");

const { validateBody, authenticate, upload } = require("../../middlewares");

const { schemas } = require("../../models/user.js");

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logOut);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = router;
