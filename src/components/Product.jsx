import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import {add,remove} from "../redux/slices/cartSlice";
import { toast } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
// Added useDispatch import

const Product = ({ post }) => { // Assuming 'post' is passed as a prop
    const { cart } = useSelector((state) => state);
    const dispatch = useDispatch(); // Initialize dispatch

    // Dummy functions for addToCart and removeFromCart
    const addToCart = () => {
        dispatch(add(post));
        toast.success("Item added to cart");
    };

    const removeFromCart = () => {
        dispatch(remove(post.id));
        toast.success("Item removed from cart")
    };

    return (
        <div className='flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]'>
            <div>
                <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>{post.title}</p>
            </div>
            <div>
                <p className='w-30 text-gray-600 font-normal text-[10px] text-left'>{post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
            </div>
            <div  className='h-[180px]'>
                <img src={post.image} className='h-full w-full' alt="" />
            </div>
            <div className='flex justify-between gap-12 items-center w-full'>
                <div>
                    <p className='text-green-600 font-semibold'>${post.price}</p>
                </div>
                <div>
                    {cart.some((p) => p.id === post.id) ? (
                        <button className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in' onClick={removeFromCart}>Remove Item</button>
                    ) : (
                        <button className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in' onClick={addToCart}>Add to Cart</button>
                    )}
                </div>

            </div>
           
        </div>
    );
};

export default Product;
