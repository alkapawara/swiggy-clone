import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [exapndIn, setExapndIn] = useState(null);
  if (!resInfo) {
    return <Shimmer />;
  }
  const { name, city, costForTwo, totalRatingsString, avgRating } =
    resInfo?.cards[2]?.card?.card?.info || {};
  const datacard = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards;
  const category = datacard.filter(
    (li) =>
      li?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <>
      <div className="pt-28 max-w-7xl m-auto pb-3">
        <h1 className="text-3xl text-gray-900 font-extrabold text-center">
          {name}
        </h1>
        <h2 className="text-center">{city}</h2>
        <div className="flex gap-1 text-center text-gray-950 font-semibold justify-center">
          <span className="circle-icon text-white text-xs bg-green-600 flex items-center justify-center h-5 w-5 rounded-full">
            <i className="ri-star-fill"></i>
          </span>
          {avgRating} ({totalRatingsString}) .<span> {costForTwo / 100}rs</span>
        </div>

        <div className="text-center">
          {" "}
          {category.map((category, index) => (
            <RestaurantCategory
              key={category?.card?.card?.categoryId}
              data={category?.card?.card}
              show={index === exapndIn ? true : false}
              setExapndIn={() =>
                setExapndIn((prevIndex) => (prevIndex === index ? null : index))
              }
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default RestaurantMenu;
