/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import '../Css/product.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Product({items,cart,setcart}){

    const AddToCart=(id,price,title,description,imgSrc)=>{
        const obj={
            id,price,title,description,imgSrc
        }
       setcart([...cart,obj])
       toast.success('🦄 Wow so easy!');
        
    }

    return(
        <>
 <ToastContainer/>


        <div className="product_page">

            {items.map((product)=>(
              
                <div  key={product.id} className="product">

                <div className="cardimg">
                    <Link to={`/detailspage/${product.id}`}>
                    <img src={product.imgSrc} alt="" />
                    </Link>
                    </div>
                <div className="tittle">{product.title}</div>
                <div className="description">{product.description}</div>
                <div className="btn">
                <div className='btn_1'>Rs {product.price}</div>
                <button onClick={()=>AddToCart(product.id,product.price,product.title,product.description,product.imgSrc)} className='btn_2'>AddToCart</button>
                </div>
                
            </div>
            ))}
    </div>
    </>
    )
}