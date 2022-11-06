import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import OrderSummary from '../OrderSummary/OrderSummary';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const products = useLoaderData();
    const [orders, setOrders] = useState([]);
    const handleAddToCart = (product) => {
        const productId = product;
        const localData = localStorage.getItem("emaJohnOrderData");
        if (localData === null) {
            let orders = []
            let order = {};
            order['id'] = productId;
            order['quantity'] = 1;
            orders.push(order);
            localStorage.setItem('emaJohnOrderData', JSON.stringify(orders))
        }
        else {
            const mainData = JSON.parse(localData);
            const status = mainData.find(order => order.id === productId)
            if (status) {
                const updateData = mainData.map(order => {
                    if (order.id == productId) {
                        order['quantity'] = order.quantity + 1;
                    }
                    return order;
                })
                localStorage.setItem('emaJohnOrderData', JSON.stringify(updateData));
            }
            else {
                let order = {};
                order['id'] = productId;
                order['quantity'] = 1;
                mainData.push(order);
                localStorage.setItem('emaJohnOrderData', JSON.stringify(mainData));
            }
        }
    }
    return (
        <div className='shop-container'>
            <div className='shop-list'>
                {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div >
                <OrderSummary orders={orders}></OrderSummary>
            </div>
        </div>
    );
};

export default Shop;