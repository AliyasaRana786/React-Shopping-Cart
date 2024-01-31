/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { Link, useNavigate,useLocation } from 'react-router-dom';
import '../Css/Navbar.css'
import { PiShoppingCartLight } from "react-icons/pi";

import { useState } from 'react';
// eslint-disable-next-line react/prop-types
export default function Navbar({setData,cart}) {
    const nagivate=useNavigate();
    const[inputdata,setinputdata]=useState("")

    const handlechange=(e)=>{
       setinputdata(e.target.value)
    }

    const handlesubmit=(e)=>{
        e.preventDefault()
        nagivate(`/search/${inputdata}`)
        setinputdata(" ")
    }

    const handleclick=(category)=>{
        const filtercategory=items.filter((product)=>product.category==category)
        setData(filtercategory);
    }

    const filterprice=(price)=>{
        const costprice=items.filter((product)=>product.price>=price)
        setData(costprice);
    }
  


    return (
        
        <header className='sticky-top'>
 <div className='Navbar_page'>
            <div className="Navbar">
                <Link to="/" className="brandname">E_Commerce</Link>
                <div className="Search_bar">
                    <form onSubmit={handlesubmit}>
                    <input value={inputdata} onChange={handlechange} placeholder='Search Product....' />
                    </form>
                    </div>
                <Link to="/cart" className="Cart">
                    <button type="button" className="btn btn-primary position-relative">
                    <PiShoppingCartLight />
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {cart.length}
                            <span className="visually-hidden">unread messages</span>
                        </span>
                    </button>
                </Link>
            </div>

            {location.pathname=='/' &&(

<div className="Navbar_wrapper">
<div className="items">Filter_By</div>
<div onClick={()=>setData(items)} className="items">No_Filter</div>
<div onClick={()=>handleclick('mobiles')} className="items">Mobiles</div>
<div onClick={()=>handleclick('laptops')} className="items">Laptop</div>
<div onClick={()=>handleclick('tablets')} className="items">Tablets</div>
<div onClick={()=>filterprice(29999)} className="items">{">="}29999</div>
<div onClick={()=>filterprice(49999)} className="items">{">="}49999</div>
<div onClick={()=>filterprice(69999)} className="items">{">="}69999</div>
<div onClick={()=>filterprice(89999)} className="items">{">="}89999</div>
</div>
            )}



        </div>
        </header>

       

       
    )
}