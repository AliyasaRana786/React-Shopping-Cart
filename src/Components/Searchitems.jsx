/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { items } from "./Data";
import Product from "./Product";

export default function SearchItems({cart,setcart}){

    const {term}=useParams();
    const[filterdata,setfilterdata]=useState([])


    useEffect(()=>{
        const searchfilter=()=>{
            const data=items.filter((pro)=>pro.title.toLowerCase().includes(term.toLowerCase()))
            setfilterdata(data);
        }
        searchfilter()
    },[term])

    return(
        <div>
        <Product cart={cart} setcart={setcart} items={filterdata}/>
        </div>
    )
}