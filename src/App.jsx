import Navbar from "./Components/Navbar"
import Product from "./Components/Product"
import Cartitems from "./Components/CartItems"
import DetailsItems from "./Components/DetailsItems"
import SearchItems from "./Components/Searchitems"
import { items } from "./Components/Data"
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { useState } from "react"

export default function App(){
  const [data,setData]=useState([...items])
  const [cart,setcart]=useState([])
  return(
    <div>
      <Router>
      <Navbar cart={cart} setData={setData}/>
        <Routes>
     <Route path="/" element={<Product cart={cart} setcart={setcart} items={data}/>}/>
     <Route path="/cart" element={<Cartitems cart={cart} setcart={setcart}/>}/>
     <Route path="/detailspage/:id" element={<DetailsItems cart={cart} setcart={setcart}/>}/>
     <Route path="/search/:term" element={<SearchItems cart={cart} setcart={setcart}/>}/>
        </Routes>
      </Router>
     
     
    </div>
  )
}
