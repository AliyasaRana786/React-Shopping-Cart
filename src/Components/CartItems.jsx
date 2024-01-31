import {Link} from 'react-router-dom'
export default function Cartitems({cart,setcart}){
   
    return(
        <>
        <div  className="container mt-5 gap-2" style={{width:"38%"}}>

            {
            cart.length==0 ?(
              <>
              <div className="text-center">
                <h1>your card is empty</h1>
                <Link to={"/"} className='btn btn-warning'>continue shopping...</Link>
              </div>
              </>

            ):

            cart.map((pro)=>{

                return(
                  <>
                    <div className="card mb-3 bg-light" style={{width: "540px"}}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={pro.imgSrc} className="img-fluid rounded-start" alt="..."/>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body text-center">
                          <h5 className="card-title">{pro.title}</h5>
                          <p className="card-text">{pro.description}</p>
                          <div className="btn">
                <div className='btn_1'>Rs {pro.price}</div>
                <button  className='btn_2'>BuyNow</button>
                </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </>
                )
            })}
       
        </div>
        {cart.length!=0 &&(

<div className="container text-center my-5" style={{
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  
}}>
  <button className='btn btn-warning max-5'>checkout</button>
  <button onClick={()=>setcart("")} className='btn btn-danger'>clear out</button>
</div>
        )}

      
        </>
       
    )
}