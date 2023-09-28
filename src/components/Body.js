import React, { useEffect, useState } from "react";
import Card from "./Card";

const Body = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5160459&lng=77.39686770000002"
      );
      const data = await response.json();
      console.log(data);
      setData(
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
          ? data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants
          : []
      );
    } catch (err) {
      console.log(err);
    }
  }

  const applySearch = () => {
    const filteredData = data.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(search.toLowerCase())
    );
    setData(filteredData);
  };
  return (
    <div className="m-4">
      <input
        type="text"
        placeholder="Search.."
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="py-2 "
      />
      <button onClick={() => applySearch()}>Search</button>

      <div className="flex flex-wrap gap-10">
        {data.map((restaurant) => (
          <Card {...restaurant.info} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
