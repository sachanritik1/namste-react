import React from "react";

const Card = ({ name, avgRating, cloudinaryImageId, cuisines }) => {
  return (
    <div className="w-[300px] h-[300px]">
      <img
        className="w-full h-[200px] object-cover rounded-md"
        alt={"restaurant image"}
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h4>{name}</h4>
        <p>{avgRating} ★</p>
      </div>
      <p>{cuisines.join(", ")}</p>
    </div>
  );
};

export default Card;
