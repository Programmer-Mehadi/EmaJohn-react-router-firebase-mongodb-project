import React from 'react';
import { useLoaderData } from 'react-router-dom';
import OrderSummary from '../OrderSummary/OrderSummary';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const products = useLoaderData();
    console.log(products);
    return (
        <div className='shop-container'>
            <div className='shop-list'>
                {
                    products.map(product => <Product product={product}F></Product>)
                 }
            </div>
            <div >
                <OrderSummary></OrderSummary>
            </div>
        </div>
    );
};

export default Shop;