import React from 'react'
import products from "./assets/product.json"
import {useNavigate} from 'react-router-dom';
 
function ProductPage() {
  const navigate = useNavigate();
 

  const Productdetail =(id)=>{ 
    navigate("/productdetail/" + id) 

    } 

  return (
    <> 
<section style={{backgroundColor: '#eee'}}>
        <div className="container py-5">
          <div className="row">
            {products.map((product, index)=>{
                return(<>
                    <div className="col-md-12 col-lg-4 mb-4 mb-lg-0" >
              <div className="card">
                <div className="d-flex justify-content-between p-3">
                  <p className="lead mb-0">Today's Combo Offer  </p>
                  {/* <div className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong" style={{width: '35px', height: '35px'}}>
                    <p className="text-white mb-0 small">x4</p>
                  </div> */}
                </div>
                <img src={product.imageUrl} className="card-img-top" alt="Laptop" />
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <p className="small"><a href="#!" className="text-muted">{product.description}</a></p>
                    {/* <p className="small text-danger"><s>$1099</s></p> */}
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">{product.name}</h5>
                    <h5 className="text-dark mb-0"> ₹ {product.price}  </h5>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <p className="text-muted mb-0">Available: <span className="fw-bold">6</span></p>
                    <a to="" onClick={() => Productdetail(product.id)}>   <button className='btn btn-primary'>Add to Cart</button> </a>
                  
                  </div>
                </div>
              </div>
            </div>
                </>)
            })}
        
          
          </div>
        </div>
      </section>
       </>
  )
}

export default ProductPage