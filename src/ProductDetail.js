import React from 'react';
import { useParams } from "react-router-dom";
import products from "./assets/product.json"

import './App.css';
function ProductDetail() {
  const { id } = useParams();
  console.log(id);


  const alertBtn =()=>{
    alert("Order Placed")
  }
  return (
    < >

<div className="container mt-5 mb-5">
  {products.map((item ,i )=>{
   if(id ===  item.id){

  
    return(<>
    
    
 
        <div className="card">
          <div className="row g-0">
            <div className="col-md-6 border-end">
              <div className="d-flex flex-column justify-content-center">
                <div className="main_image">
                  <img src={item.imageUrl} id="main_product_image" width={350} />
                </div>
                {/* <div className="thumbnail_images">
                  <ul id="thumbnail">
                    <li>
                      <img onclick="changeImage(this)" src="https://i.imgur.com/TAzli1U.jpg" width={70} />
                    </li>
                    <li>
                      <img onclick="changeImage(this)" src="https://i.imgur.com/w6kEctd.jpg" width={70} />
                    </li>
                    <li>
                      <img onclick="changeImage(this)" src="https://i.imgur.com/L7hFD8X.jpg" width={70} />
                    </li>
                    <li>
                      <img onclick="changeImage(this)" src="https://i.imgur.com/6ZufmNS.jpg" width={70} />
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
            <div className="col-md-6">
              <div className="p-3 right-side">
                <div className="d-flex justify-content-between align-items-center">
                  <h3>{item.name}</h3>
                  <span className="heart">
                    <i className="bx bx-heart" />
                  </span>
                </div>
                <div className="mt-2 pr-3 content">
                  <p>{item.description}</p>
                </div>
                <span className="d-flex justify-content-between align-items-center">
                <h3>₹ {item.price}  </h3>
            <span className="justify-content-center" >
            {/* <h3>₹ {item.price}  </h3> */}
            {/* <h3>₹ {item.price}  </h3> */}
            {/* <h3>₹ {item.price}  </h3> */}
            {/* <h3>₹ {item.price}  </h3> */}
            </span>
                </span>
            
                <div className="ratings d-flex flex-row align-items-center">
                  <div className="d-flex flex-row">
                    <i className="bx bxs-star" />
                    <i className="bx bxs-star" />
                    <i className="bx bxs-star" />
                    <i className="bx bxs-star" />
                    <i className="bx bx-star" />
                  </div>
                  {/* <span>441 reviews</span> */}
                </div>
                <div className="mt-5  " >
                  <span className="fw-bold">Color</span>
                  <div className="colors">
                    <ul id="marker">
                      <li id="marker-1" />
                      <li id="marker-2" />
                      <li id="marker-3" />
                      <li id="marker-4" />
                      <li id="marker-5" />
                    </ul>
                  </div>
                   
                </div>
                <div className="buttons d-flex flex-row mt-5 gap-3">
                  <button className="btn btn-outline-dark " onClick={alertBtn}>Buy Now</button>
                  <button className="btn btn-dark">Add to Basket</button>
                </div>
                <div className="search-option">
                  <i className="bx bx-search-alt-2 first-search" />
                  <div className="inputs">
                    <input type="text" name />
                  </div>
                  <i className="bx bx-share-alt share" />
                </div>
              </div>
            </div>
          </div>
        </div>
        </>)
 }
  })}
      </div>

     </ >
  )
}

export default ProductDetail