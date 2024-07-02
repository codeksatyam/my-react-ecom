import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import Spinner from '../components/Spinner'; // Assuming Spinner component exists

const Home = () => {
    const API_URL = "https://fakestoreapi.com/products";

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null); // State to handle errors

    async function fetchProductData() {
        setLoading(true);
        try {
            const res = await fetch(API_URL);
            if (!res.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await res.json();
            setPosts(data);
        } catch (error) {
            console.error("Error fetching data:", error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProductData();
    }, []);

    if (loading) {
        return <Spinner />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {posts.length > 0 ? (
                <div className='grid  xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4  max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]'>
                    {posts.map((post) => (
                        <Product key={post.id} post={post} />
                    ))}
                </div>
            ) : (
                <div className='flex justify-center items-center'>
                    <p>No Data found</p>
                </div>
            )}
        </div>
    );
};

export default Home;
