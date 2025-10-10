const express = require("express");
const { registerUser, loginUser, logoutUser, authMiddleware } = require ("../controllers/auth-controller.js");

const router = express.Router();


router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
// Server-side pseudocode for the Check Auth route
router.get('/check-auth', authMiddleware, (req, res) => {
    // If we reach here, the token was valid. req.user has been populated.
    res.status(200).json({
        success: true,
        message: 'Authenticated',
        user: { 
            email: req.user.email,
            role: req.user.role,
            id: req.user.id,
            userName: req.user.userName,
        },
    });
});

module.exports = router;
