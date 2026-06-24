const express = require("express");

const router = express.Router();

const {
  getAllDishes,
  toggleDishStatus,
} = require("../controllers/dishController");

router.get("/", getAllDishes);

router.patch("/:dishId/toggle", toggleDishStatus);

module.exports = router;
