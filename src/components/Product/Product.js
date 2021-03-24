import React from 'react';
import './Product.css'
const Product = () => {
    return (
        <div classNam="product">
            <div className="container my-5">
                <h4 className="text">Product and Service</h4>
                <div className="card-deck pt-3">
  <div className="card">
    <img className="card-img-top ml-2" src="https://i.ibb.co/V37G7yY/product-description-1.png" alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Our Product</h5>
      <p className="card-text">Our product is made on the base of our team’s careful research and analyses, ranging from internet based application.</p>
      <button className="btn productBtn">Read More</button>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top ml-2" src="https://i.ibb.co/gZzjv1f/verified-1.png" alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Our Product</h5>
      <p className="card-text">DSI’s shared service solutions focus on the front-end based software development, designed specifically for the banking and financial sectors.
.</p>
<button className="btn productBtn">Read More</button>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top ml-2" src="https://i.ibb.co/fCx5pJP/cogwheel-1.png" alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Our Product</h5>
      <p className="card-text">First JAVA, runs on more than 850 million personal computers worldwide, and on billions of devices worldwide, including mobile and TV devices.</p>
      <button className="btn productBtn">Read More</button>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default Product;