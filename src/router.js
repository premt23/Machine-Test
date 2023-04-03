import {createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./authentication/Login";

import Home from "./authentication/Home";



const router = createBrowserRouter(
    [
     {path:"", element:<Login/>} ,
     
     {path:"/Home", element:<Home/>},
     
     
     

    ]);

  export default router;
