const express = require("express");
const router = express.Router();
const {
    registerUser,
    loginUser,
    allUsers,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.route("/").get(protect, allUsers);

module.exports = router;
