const express = require("express");

const {
  condition1,
  condition2,
  condition3,
  condition4,
  condition5,
} = require("../controllers/userControllers");

const router = express.Router();

router.route("/condition1").get(condition1);
router.route("/condition2").get(condition2);
router.route("/condition3").get(condition3);
router.route("/condition4").get(condition4);
router.route("/condition5").get(condition5);

module.exports = router;
