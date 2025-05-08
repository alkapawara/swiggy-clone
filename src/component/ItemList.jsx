import React from "react";
import { IMG_URL } from "../utils/restaorantData";
 // Import correct actions
import CartButton from "./CartButton";
const ItemList = ({ list }) => {
  const { name, description, defaultPrice, ratings, itemAttribute, price, imageId, id } =
    list;


  return (
    <div className="py-2 pr-2 flex justify-between m-3 w-full border-b-2 gap-20 text-start">
      <div className="w-2/4 ">
        <i
          className={`ri-circle-fill border-2 bottom-2 p-[2px] text-[8px] rounded-sm ${
            itemAttribute?.vegClassifier === "VEG"
              ? "text-green-600 border-green-600"
              : "text-red-600 border-red-600"
          }`}
        ></i>

        <h2 className="text-lg font-bold">{name}</h2>
        <h3>₹ {Math.round((defaultPrice ?? price ?? 0) / 100)}</h3>
        <h2 className="mt-2">
          <i className="ri-star-s-fill"></i>
          {ratings?.aggregatedRating?.rating}
        </h2>
        <p className="line-clamp-2 text-base text-slate-500">{description}</p>
      </div>

      <div className="w-40 rounded-lg h-32 bg-slate-300 relative">
        <img src={IMG_URL + imageId} alt="" className="w-full h-full object-cover rounded-lg overflow-hidden" />
        
       {/* cartbutton */}
      <div className="absolute bottom-1 left-2/4 -translate-x-2/4">
      <CartButton list={list}/>
      </div>
      </div>
    </div>
  );
};

export default ItemList;
