import {lazy, Suspense } from "react";
import Header from "./component/Header";
import Banner from "./component/Banner";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import ErrorElement from "./component/ErrorElement";
import RestaurantMenu from "./component/RestaurantMenu";
// import Cart from "./component/Cart";
import React from "react";
import "./App.css"; 
const Cart=lazy(()=>import("./component/Cart"))
function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Header />,

      children: [
        { path: "/", element: <Banner /> }, // Home page
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/cart", 
          element: <Suspense fallback={<h1>Loading</h1>}><Cart /> </Suspense>},
        { path: "/restaurants/:resId", element: <RestaurantMenu /> },
      ],
      errorElement: <ErrorElement />,
    },
  ]);
  return <RouterProvider router={route} />;
}

export default App;
