function DishCard({ dish, onToggle }) {
  return (
    <div className="card">
      <img src={dish.imageUrl} alt={dish.dishName} />

      <h2>{dish.dishName}</h2>

      <p>Status: {dish.isPublished ? "Published" : "Unpublished"}</p>

      <button onClick={() => onToggle(dish.dishId)}>Toggle Status</button>
    </div>
  );
}

export default DishCard;
