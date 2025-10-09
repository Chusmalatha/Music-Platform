const express = require("express");
const { registerUser, loginUser, logoutUser, authMiddleware } = require ("../controllers/auth-controller.js");

const router = express.Router();


router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/check-auth", authMiddleware, (req, res) => {
  res.json({
    success: true,
    user: req.user,
  });
});

module.exports = router;
