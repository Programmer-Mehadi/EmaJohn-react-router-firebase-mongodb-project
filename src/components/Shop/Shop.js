import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import OrderSummary from '../OrderSummary/OrderSummary';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const products = useLoaderData();
    const [pageProducts, setpageProducts] = useState(products.slice(0, 6))
    const [orders, setOrders] = useState([]);
    const [perPageProduct, setPerPageProduct] = useState(6);
    const [pageNeed, setPageNeed] = useState([...Array(Math.ceil(products.length / perPageProduct)).keys()]);
    const [presentPage, setPresentPage] = useState(1);
   
    useEffect(() => {
        const newPageNeed = [...Array(Math.ceil(products.length / perPageProduct)).keys()]
        setPageNeed(newPageNeed);
        if (presentPage > newPageNeed.length) {
            setPresentPage(newPageNeed.length)
        }
        const start = perPageProduct * (presentPage - 1);
        const end = start + perPageProduct;
        const newProductsList = products.slice(start, end);
        setpageProducts(newProductsList)
    }, [perPageProduct, presentPage])

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
            <div>
                <div className='shop-list'>
                    {
                        pageProducts.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                    }

                </div>
                <div className='pagination'>
                    <div>
                        {
                            pageNeed.map((data, index) => <button className={presentPage == index + 1 ? 'selected' : ''} onClick={() => setPresentPage(index + 1)} key={index}>{index + 1}</button>)
                        }
                    </div>
                    <div className='select-option'>
                        <select onChange={(e) => setPerPageProduct(parseInt(e.target.value))}>
                            <option value='6' >6</option>
                            <option value='12'>12</option>
                            <option value='18'>18</option>
                            <option value='24'>24</option>
                            <option value='30'>30</option>
                        </select>
                    </div>

                </div>
            </div>
            <div >
                <OrderSummary orders={orders}></OrderSummary>
            </div>
        </div>
    );
};

export default Shop;