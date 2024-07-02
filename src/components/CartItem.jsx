// src/components/CartItem.jsx
import React from 'react';
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/cartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.success("Item removed");
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] mb-4 flex flex-col items-center">
            <h1 className="text-lg font-semibold mb-2">{item.title}</h1>
            <img src={item.image} alt={item.title} className="w-32 h-42 object-cover  shadow-sm mb-2" />
            <p className="text-gray-600 mb-2 ml-20 mr-20 text-center">{item.description}</p>
            <div className="flex justify-between w-full">
                <p className="text-green-600 ml-10  text-lg font-semibold">${item.price.toFixed(2)}</p>
                <div onClick={removeFromCart} className="cursor-pointer mr-10 text-red-500 hover:text-red-700">
                    <MdDeleteForever size={24} />
                </div>
            </div>
        </div>
    );
};

export default CartItem;
