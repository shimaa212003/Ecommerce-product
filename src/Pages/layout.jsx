import {Outlet} from "react-router-dom"
import Navigation from "../Components/Navigation"
import { useState } from "react";
function Layout(){
    const [cartCount, setCartCount] = useState(0);

return(
    <>
    
    <Navigation cartCount={cartCount} setCartCount={setCartCount}  ></Navigation>
    <Outlet></Outlet>
    </>
)
}
export default Layout