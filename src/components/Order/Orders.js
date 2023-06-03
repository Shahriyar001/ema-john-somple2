import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import './Order.css'
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const { initialCart } = useLoaderData();
    const [cart, setCart] = useState(initialCart)

    const handleRemoveItem = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div className='orders-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveItem={handleRemoveItem}
                    ></ReviewItem>)
                }
                {
                    cart.length === 0 && <h2>No Items for Review. Please <Link to="/">Shop more</Link></h2>
                }
            </div>
            <div className='cart-container'>
                <Cart clearCart={clearCart} cart={cart}></Cart>
                <Link to='/shipping'>
                    <button className='btn-shipping'>Proceed Shipping</button>
                </Link>
            </div>

        </div>
    );
};

export default Orders;