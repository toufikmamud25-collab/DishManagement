const mongoose = require("mongoose");
const Dish = require("../models/Dish");

mongoose.connect("mongodb://127.0.0.1:27017/dishes");

const dishes = [
  {
    dishId: 1,
    dishName: "Margherita Pizza",
    imageUrl:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400",
    isPublished: true,
  },
  {
    dishId: 2,
    dishName: "Spaghetti Carbonara",
    imageUrl:
      "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400",
    isPublished: true,
  },
  {
    dishId: 3,
    dishName: "Caesar Salad",
    imageUrl:
      "https://images.unsplash.com/photo-1512852939750-1305098529bf?w=400",
    isPublished: false,
  },
  {
    dishId: 4,
    dishName: "Beef Burger",
    imageUrl:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
    isPublished: true,
  },
  {
    dishId: 5,
    dishName: "Sushi Platter",
    imageUrl: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=400",
    isPublished: true,
  },
  {
    dishId: 6,
    dishName: "Chicken Tikka Masala",
    imageUrl:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400",
    isPublished: false,
  },
  {
    dishId: 7,
    dishName: "Fish & Chips",
    imageUrl: "https://images.unsplash.com/photo-1562802378-063ec186a863?w=400",
    isPublished: true,
  },
  {
    dishId: 8,
    dishName: "Pad Thai",
    imageUrl: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400",
    isPublished: true,
  },
  {
    dishId: 9,
    dishName: "French Onion Soup",
    imageUrl: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400",
    isPublished: false,
  },
  {
    dishId: 10,
    dishName: "Tacos Al Pastor",
    imageUrl:
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400",
    isPublished: true,
  },
  {
    dishId: 11,
    dishName: "Greek Salad",
    imageUrl:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400",
    isPublished: true,
  },
  {
    dishId: 12,
    dishName: "Chocolate Lava Cake",
    imageUrl:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400",
    isPublished: false,
  },
];

const seed = async () => {
  await Dish.deleteMany();
  await Dish.insertMany(dishes);

  console.log("Data Seeded");

  process.exit();
};

seed();
