//import * as React from "react";

import {  useState } from "react"
import {Lightbox} from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import productthumbnail1 from "../assets/images/image-product-1-thumbnail.jpg"
import productthumbnail2 from "../assets/images/image-product-2-thumbnail.jpg"
import productthumbnail3 from "../assets/images/image-product-3-thumbnail.jpg"
import productthumbnail4 from "../assets/images/image-product-4-thumbnail.jpg"
import product1 from "../assets/images/image-product-1.jpg"
import product2 from "../assets/images/image-product-2.jpg"
import product3 from "../assets/images/image-product-3.jpg"
import product4 from "../assets/images/image-product-4.jpg"
const Gallery = (props)=>{
    const [open,setOpen]= useState(false)
    const[mainImage,setMainImage]=useState(product1)

// ENSURES THAT IMAGE IN FOCUS WILL BE FIRST SHOWN IN LIGHTBOX
 const [imageIndex, setImageIndex]=useState(0)

const handleThumbnailClick = (e) =>{
    setMainImage(() => e.target.dataset.url)
    setImageIndex(() => Number(e.target.dataset.index))
}   

return(
    
    <div className="gallery">
        <div className="img-wrapper">
            <div className="main-img">
<img src={mainImage} onClick={()=>setOpen(true)}></img>

            </div>
            <div className="thumbnails">
                <img
                onClick={handleThumbnailClick}
                src={productthumbnail1} data-url={product1} data-index="0"
                className={mainImage===product1 ? "active-thumb":""}
                ></img>


<img onClick={handleThumbnailClick}
src={productthumbnail2} data-url={product2} data-index="1"
className={mainImage=== product2 ? "active-thumb":""}
>
</img>

<img onClick={handleThumbnailClick}
src={productthumbnail3} data-url={product3} data-index="2"
className={mainImage=== product3 ? "active-thumb":""}
>
</img>


<img onClick={handleThumbnailClick}
src={productthumbnail4} data-url={product4} data-index="3"
className={mainImage=== product4 ? "active-thumb":""}
>
</img>
            </div>

        </div>

        <Lightbox 
        open ={open}

        close= {() => setOpen(false)}

        index={imageIndex}

        slides={[
            {
                src:product1 ,
                with:500,
                height:"auto"
            },
            {
                src:product2,
                with:500,
                height:"auto" ,
            },
            {
                src:product3,
                with:500,
                height:"auto"
            },
            {
                src:product4,
                with:500,
                height:"auto"
            }
        ]}
       />

    </div>
      
)


}
export default Gallery