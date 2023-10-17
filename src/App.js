import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";

import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";




let routers = createBrowserRouter(    [
  {path:"",element:<Layout/>,children:[
    {index:true,element:<About/>},
    {path:"Portfolio",element:<Portfolio/>},
    {path:"contact",element:<Contact/>},
  ]}
    
])


export default function App() {
  return <RouterProvider router={routers}></RouterProvider>

  
}
  