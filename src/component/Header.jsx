import React, { useState } from 'react'
import { Outlet,NavLink ,Link} from 'react-router-dom'
// import useOnlineStatus from '../utils/useOnlineStatus';
import { useSelector } from 'react-redux';

const Header = () => {
  const[btn,setBtn]=useState("login");
  // const online=useOnlineStatus();
  const stored=useSelector((state)=>state.cart.items);
  console.log(stored.length);
  return (
    <>
        <div className='w-full header shadow-md mb-6 fixed top-0 left-0 z-50 bg-white'>
     <div className='max-w-6xl mx-auto flex justify-between items-center px-4 lg:px-0'>
     <div className='logo-container'>
      <Link to='/'>
      <img
        className='logo w-20' 
        src='https://png.pngtree.com/png-vector/20221218/ourmid/pngtree-simple-and-modern-food-logo-vector-design-png-image_6527848.png' />
      </Link>

        </div>
      <div className='nav-items  '>

        <ul className="hidden lg:flex gap-6 ">
          {/* <li>online:{online===false?"offline":"online"}</li> */}
          <li>
          <NavLink to='/' className={({isActive})=>isActive ? "text-yellow-400 font-bold text-md" : "text-gray-600 font-bold "}> home</NavLink></li>
        <li><NavLink to='/about' className={({isActive})=>isActive ? "text-yellow-400 font-bold" : "text-gray-600 font-bold"}> about</NavLink></li>
        <li> <NavLink to='/contact' className={({isActive})=>isActive ? "text-yellow-400 font-bold" : "text-gray-600 font-bold"}>contact</NavLink></li>
        <li><NavLink to='/cart' className={({isActive})=>isActive ? "text-yellow-400 font-bold" : "text-gray-600 font-bold"}>cart {stored.length} </NavLink></li>
        <button onClick={()=>{
          btn==="login"?setBtn("logut"):setBtn("login")
        }}>{btn}</button>
        </ul>
        <div className='mobileMenu block lg:hidden '>
        <i className="ri-menu-3-line text-lg font-bold"></i>
        </div>
      </div>
     
     </div>
    </div>
    <Outlet />
    </>

 
    
  )
}

export default Header