import React from "react";
import "remixicon/fonts/remixicon.css";
import { IMG_URL } from "../utils/restaorantData";
const Card = ({ recipes }) => {
  const {
    name,
    cloudinaryImageId,
    avgRating,
    sla,
    cuisines,
    aggregatedDiscountInfoV3,
  } = recipes;


  return (
    <>
      <div className="relative shadow-[0_4px_8px_rgba(0,0,0,0.2)]  rounded-md overflow-hidden pb-4 md:pb-6 hover:scale-95 transition-all">
        {/* Image Container */}
        <div className="w-full h-44 md:h-44 lg:h-40 relative">
          <img
            className="w-full h-full object-cover "
            src={IMG_URL+cloudinaryImageId}
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-white/20"></div>
          <h5 className="absolute bottom-2 font-bold text-md pl-4 text-white">
            {aggregatedDiscountInfoV3?.header}
            {aggregatedDiscountInfoV3?.subHeader}
          </h5>
        </div>

        {/* Card Content */}
        <div className="p-3 md:p-4">
          <h4 className="text-sm md:text-base lg:text-lg font-semibold line-clamp-1">
            {name}
          </h4>
          <h5 className="flex items-center gap-2 text-green-700 text-xs md:text-sm">
            <span className="circle-icon text-white text-xs bg-green-600 flex items-center justify-center h-5 w-5 rounded-full">
              <i className="ri-star-fill"></i>
            </span>
            <span className="text-gray-800 font-bold">
              {avgRating} · {sla.slaString}
            </span>
          </h5>

          {/* Cuisines */}
          <h6 className="text-gray-700 text-md line-clamp-1 leading-8">
            {cuisines.join(", ")}
          </h6>
        </div>
      </div>
    </>
  );
};

export default Card;
