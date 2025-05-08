import { useDispatch, useSelector } from "react-redux";
import { addItem, removeFromCart,removeItem } from "../utils/redux/cartSlice";
import { useState } from "react";

const CartButton = ({list}) => {
  const dispatch = useDispatch();
  const stored = useSelector((state) => state.cart.items);
  const existItem=stored.find((item)=>item.id===list.id);
  const quantity=existItem? existItem.quantity:0;
  const [showCounter, setShowCounter] = useState(quantity > 0);
  console.log("list",list.imageId)
  const handleAdd = () => {
    dispatch(addItem(list));
    setShowCounter(true);
 
  };
  const handleIncrease = () => dispatch(addItem({ id: list.id, name: list.name, price: list.price,  }));
  const handleDecrease = () => {
    if (quantity > 1) {
      dispatch(removeItem(list.id));
    } else {
      dispatch(removeItem(list.id));
      setShowCounter(false);
    }
  };
  return (
    <div>
      {!showCounter ? (
        <button
          className="font-bold bg-white py-2 rounded-lg px-6"
          onClick={handleAdd}
        >
          ADD
        </button>
      ) : (
        <div className="font-bold  bg-white py-2 rounded-lg px-1">
          <button className="px-1 rounded-md" onClick={handleDecrease}>
            -
          </button>
          <span className="mx-2">{quantity}</span>
          <button className="px-1  rounded-md" onClick={handleIncrease}>
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default CartButton;
