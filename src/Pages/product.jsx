import ProductDescription from "../Components/ProductDescription"
import Gallery from "../Components/Gallery"
import Navigation from "../Components/Navigation";
import { useState } from "react";


function product(){
    const [cartCount, setCartCount] = useState(0);

    return(
        
<main className="App">

<Navigation cartCount={cartCount} setCartCount={setCartCount} />
<section className="hero">
  <Gallery />
  <ProductDescription setCartCount={setCartCount} />
</section>
</main>


    )
}
export default product