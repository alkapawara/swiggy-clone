import React, { lazy, useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import "remixicon/fonts/remixicon.css";
const Banner = () => {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [filterlist, setFilterlist] = useState([]);

  const fechData = async () => {
    try {
      const list = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.69560&lng=74.23170&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const dt = await list.json();
      const restaurants =
        dt?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setData(restaurants);
      setFilterlist(restaurants);
      //  console.log("banner",dt)
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fechData();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.trim().toLowerCase();
    setSearchData(value);
    const searchList = data.filter((el) =>
      el.info.name.toLowerCase().find(value)
    );
    setFilterlist(searchList);
  };
  const online = useOnlineStatus();
  if (!online)
    return (
      <h1 className="bg-black py-2 px-4 text-white absolute bottom-3 left-2/4 -translate-x-2/4">
        your internet not working please check it
      </h1>
    );

  return data.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="container max-w-6xl mx-auto px-4 pt-16">
      <div className="rating p-1 md:p-8 mb-2">
        <div className="flex flex-col md:flex-row align-baseline justify-start md:justify-center gap-3 ">
          <div className="w-full md:w-2/4 h-fit rounded-sm border shadow-md">
            <input
              type="text"
              value={searchData}
              onChange={handleSearch}
              placeholder="Search..."
              className="p-2 w-full outline-none border-none focus:ring-2 focus:ring-gray-300 focus:border-gray-300 "
            />
          </div>
          <button
            className="bg-yellow-400 py-2 px-2 rounded-sm w-fit md:w-auto m-auto md:m-0 shadow-md"
            onClick={() => {
              let filtList = data.filter((ele) => ele?.info?.avgRating > 4);
              setData(filtList);
            }}
          >
            top rating food
          </button>
        </div>
      </div>
      <div className=" ">
        {searchData && filterlist.length === 0 ? (
          <p style={{ color: "red", marginTop: "10px" }}>No Data Found</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filterlist.map((ele) => (
              <Link to={`/restaurants/${ele?.info.id}`} key={ele.info.id}>
                <Card recipes={ele?.info} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
