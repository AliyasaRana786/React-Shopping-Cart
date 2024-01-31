import { useParams } from 'react-router-dom'
import Product from './Product';
import '../Css/DetailsItems.css'
import { useEffect, useState } from 'react';
import { items } from './Data';
export default function DetailsItems({cart,setcart}){

  
        const[product,setproduct]=useState({})
        const[category,setcategory]=useState([])

       const {id}= useParams();

       useEffect(()=>{
        const filterProduct=items.filter((product)=>product.id==id)
        setproduct(filterProduct[0])
        const filtercategory=items.filter((cate)=>cate.category===product.category)
        setcategory(filtercategory);
        },[id,product.category])
    
  
    
    return(
        <div className='productdetails'>
            <div className="details">
                <div className="img">
                    <img src={product.imgSrc} alt="" />
                    </div>
                <div className="card">
                    <div className="tittle">{product.title}</div>
                    <div className="description">{product.description}</div>
                    <div className="btn">
                    <div className="price">Rs {product.price}</div>
                    <button>AddToCart</button>
                    </div>
                 
                </div>
               
            </div>
            <Product cart={cart} setcart={setcart} items={category}/>
        </div>
    )
 
}