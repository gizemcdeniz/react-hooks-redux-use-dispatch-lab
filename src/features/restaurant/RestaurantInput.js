import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addRestaurant } from "./restaurantsSlice";

function RestaurantInput() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleLocationChange(event) {
    setLocation(event.target.value);
  }
const dispatch=useDispatch()
  function handleSubmit(event) {
    event.preventDefault();
 dispatch(addRestaurant({name,location}))


    // add missing code
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <input
          type="text"
          onChange={handleNameChange}
          id="name"
          placeholder="restaurant name"
        />
      </p>
      <p>
        <input
          type="text"
          onChange={handleLocationChange}
          id="location"
          placeholder="location"
        />
      </p>
      <button type="submit">Submit</button>
    </form>
  );
}

export default RestaurantInput;
