import React from 'react';
import Banner from '../../components/Banner/Banner';
import Books from '../../components/Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    
    return (
        <div>
            <Banner />
            <h1 className='text-5xl text-center font-bold'>Books</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    data.map((book)=>(<Books key={book.bookId} book={book} />))
                }
            </div>
        </div>
    );
};

export default Home;