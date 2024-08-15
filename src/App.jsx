//import {  useState } from 'react';
//import data from '../data';
import './App.css'
//import ProductDescription from "./Components/ProductDescription"
//import Gallery from "./Components/Gallery"
 //import Navigation from "./Components/Navigation"
import Layout from "./Pages/layout"
import Product from "./Pages/product"
import Page2 from './Pages/page2'
import Woman from "./Pages/woman"
import Men from "./Pages/men"
import About from "./Pages/about"
import Collections from "./Pages/collections"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Contact from './Pages/contact'

 function App() {
 

  return (
    <BrowserRouter>
    <Routes className='App' >
      
    <Route 
                path='/' element={<Layout />}> 

      <Route index element = {<Product/> } ></Route>
      <Route path='/product' element={<Product/>}></Route>
     
     <Route path='/page2' element={<Page2/>}></Route>
     <Route path='/woman' element={<Woman/>}></Route>
     <Route path='/men' element={<Men />}></Route>
     <Route path='/about' element={<About/>}></Route>
     <Route path='/collections' element={<Collections/>}></Route>
     <Route path='/contact' element={<Contact/>}></Route>

     </Route>
    
 </Routes>
 </BrowserRouter>



  )
}

export default App
