import { useEffect, useState } from "react";
import axios from "axios";
import DishCard from "../components/DishCard";

function Dashboard() {
  const [dishes, setDishes] = useState([]);

  const fetchDishes = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/dishes");

      setDishes(res.data);
    } catch (error) {
      console.error("Error fetching dishes:", error);
    }
  };

  const toggleDish = async (dishId) => {
    try {
      await axios.patch(`http://localhost:5000/api/dishes/${dishId}/toggle`);

      // Optional immediate refresh
      fetchDishes();
    } catch (error) {
      console.error("Error updating dish:", error);
    }
  };

  useEffect(() => {
    // Initial fetch
    fetchDishes();

    // Poll every 3 seconds
    const interval = setInterval(() => {
      fetchDishes();
    }, 3000);

    // Cleanup
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <h1>Dish Dashboard</h1>

      <div className="grid">
        {dishes.map((dish) => (
          <DishCard key={dish.dishId} dish={dish} onToggle={toggleDish} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
