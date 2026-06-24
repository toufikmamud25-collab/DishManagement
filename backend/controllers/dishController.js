const Dish = require("../models/Dish");

const getAllDishes = async (req, res) => {
  try {
    const dishes = await Dish.find();

    res.status(200).json(dishes);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const toggleDishStatus = async (req, res) => {
  try {
    const dish = await Dish.findOne({
      dishId: req.params.dishId,
    });

    if (!dish) {
      return res.status(404).json({
        message: "Dish not found",
      });
    }

    dish.isPublished = !dish.isPublished;

    await dish.save();

    req.io.emit("dishUpdated", dish);

    res.status(200).json(dish);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getAllDishes,
  toggleDishStatus,
};
