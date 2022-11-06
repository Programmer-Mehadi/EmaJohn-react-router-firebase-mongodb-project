import React from 'react';
import './Product.css';
const Product = ({ product }) => {
    const { id, img, name, price, seller, rating } = product;
    return (
        <div className='product'>
            <div className="product-body">
                <img src={img} alt="" />
                <h2>{name}</h2>
                <h4>Price: {price}</h4>
                <p>Manufacture : {seller}</p>
                <p>Rating: {rating} start</p>
            </div>
            <button className='addtocartbtn'>Add To Cart</button>
        </div>
    );
};

export default Product;