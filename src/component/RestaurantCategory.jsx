import ItemList from "./ItemList";

const RestaurantCategory = ({ data, show, setExapndIn }) => {
  const { title, itemCards } = data;
// console.log("reCategory",itemCards)
  return (
    <>
      <div className="w-8/12 m-auto">
        <div className="shadow bg-white mb-8 w-full px-4">
          {/* Category Title & Toggle Button */}
          <div
            className="flex justify-between py-4 cursor-pointer"
            onClick={setExapndIn}
          >
            <h2 className="text-start text-lg font-bold">
              {title} ({itemCards?.length})
            </h2>
            <i
              className={`${
                show ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"
              }`}
            ></i>
          </div>

          {/* Only show item list if expanded */}
          {show && (
            <div>
              {itemCards.map((li) => (
                <ItemList list={li?.card?.info} key={li?.card?.info?.id} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RestaurantCategory;
