import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartButton from "./CartButton";
import { EMPTY_CART_IMG, IMG_URL } from "../utils/restaorantData";
import { Link } from "react-router-dom";
import { removeFromCart } from "../utils/redux/cartSlice";
const Cart = () => {
  const stored = useSelector((state) => state.cart.items);

  // Calculate total price
  const totalPrice = stored.reduce((total, item) => {
    return total + ((item.defaultPrice ?? item.price ?? 0) * item.quantity) / 100;
  }, 0);
const dispacth=useDispatch();
  const removeCart=(itemId)=>{
   dispacth(removeFromCart(itemId))
  }
  return (
    <div className="mt-32 w-6/12 mx-auto">
      {stored.length === 0 ? (
        <div className="flex justify-center flex-col align-middle">
          <img src={EMPTY_CART_IMG} alt="" className="w-2/4 h-1/3 m-auto" />
          <h2 className="text-center text-gray-900 font-bold text-xl mt-2">Your cart is empty</h2>
          <p className="text-center text-md text-gray-700">
            You can go to the home page to view more restaurants
          </p>
          <Link to={"/"}>
            <h4 className="bg-orange-600 py-2 px-8 text-center text-white text-lg w-fit m-auto mt-4">
              See restaurants
            </h4>
          </Link>
        </div>
      ) : (
        <>
        <h2 className=" text-lg text-center font-bold mb-4">My Cart</h2>
          {stored.map((item) => (
            <div key={item.id} className="bg-slate-100 p-2 mb-3 flex justify-start items-center gap-6 px-4">
              <i class="ri-delete-bin-5-fill text-red-600 text-xl w-5 " 
              onClick={()=>removeCart(item.id)}
              ></i>
              <div className="w-14 h-14">
                <img src={IMG_URL + item.imageId} alt="" className="w-full h-full object-cover overflow-hidden" />
              </div>
              <h2 className="text-base text-gray-900 font-bold flex-1  ">
                {item.name} x {item.quantity}
              </h2>
              <div className="w-fit ">
                <CartButton list={item} />
              </div>
              <p className="text-end">₹ {Math.round(((item.defaultPrice ?? item.price ?? 0) * item.quantity) / 100)}</p>
            </div>
          ))}
          
          {/* Total Price Section */}
          <div className="mt-6 bg-white p-4 text-end shadow-md">
            <h3 className="text-xl font-bold text-gray-900">Total Price: ₹ {Math.round(totalPrice)}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
