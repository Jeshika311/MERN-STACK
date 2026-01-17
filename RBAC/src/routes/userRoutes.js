const express = require('express');
const verifyToken = require('../middleware/authMiddleware');
const authorizedRoles = require('../middleware/roleMiddleware');
const router = express.Router();

// only admib can access this route
router.get("/admin", verifyToken, authorizedRoles("admin"), (req,res) => {
  res.json({message: "Welcome Admin"})
})

// only admin and manager can access this route
router.get("/manager", verifyToken, authorizedRoles("admin", "manager"), (req,res) => {
  res.json({message: "Welcome Manager"});
})

// admin, manager and user can access this route
router.get("/user", verifyToken, authorizedRoles("admin", "manager", "user"), (req,res) => {
  res.json({message: "Welcome User"});
})

module.exports = router;