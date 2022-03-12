import React from "react";
import { useSelector } from "react-redux";

function Restaurants() {
  const restaurants = useSelector((state) => state.restaurants);
console.log(restaurants,"who");
  return (
    <div>
      <ul>
        {restaurants.map((restaurant,i) => (
          <li key={i}>{restaurant.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Restaurants;
