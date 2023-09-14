/* eslint-disable react/prop-types */

import Checkout from "../pages/checkout";
import Home from "../pages/home";
// import Login from "../pages/login";
// import Register from "../pages/register";
// import Footer from "./Footer";
import Header from "./Header";

function MainLayout({Children}) {
    return(
        <>
        <Header/>
        <Home/>
        <Checkout/>
        {Children}
        
        </>
    ) 
}
export default MainLayout;