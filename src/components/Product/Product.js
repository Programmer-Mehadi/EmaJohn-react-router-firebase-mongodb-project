import React from 'react';
import './Product.css';
const Product = ({ product,handleAddToCart }) => {
    const { id, img, name, price, seller, ratings } = product;
    return (
        <div className='product'>
            <div className="product-body">
                <img src={img} alt="" />
                <h2>{name}</h2>
                <h4>Price: {price}</h4>
                <p>Manufacture : {seller}</p>
                <p>Rating: {ratings} start</p>
            </div>
            <button className='addtocartbtn' onClick={()=>handleAddToCart(product)}>Add To Cart</button>
        </div>
    );
};

export default Product;