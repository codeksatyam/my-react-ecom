// src/pages/Cart.jsx
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
    }, [cart]);

    return (
        <div className="flex flex-col items-center">
            {cart.length > 0 ? (
                <div className="w-full max-w-6xl flex flex-col md:flex-row md:justify-between">
                    <div className="w-full md:w-2/3 pr-4">
                        {cart.map((item, index) => (
                            <CartItem key={item.id} item={item} itemIndex={index} />
                        ))}
                    </div>
                    <div className="w-full h-full md:w-1/3 md:fixed md:right-10 flex flex-col items-center gap-8 bg-gray-100 p-20  rounded-lg shadow-lg">
                        <h2 className="text-3xl font-bold mb-4 text-center">Your Cart</h2>
                        <p className="text-xl mb-2">Total Items: {cart.length}</p>
                        <p className="text-xl mb-2 text-green-600">Total Amount: ${totalAmount.toFixed(2)}</p>
                        <button className="mt-4 bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600">Pay Now</button>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center mt-40">
                    <h1 className="text-2xl font-bold mb-4">Cart Empty</h1>
                    <Link to="/">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Shop Now</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Cart;
