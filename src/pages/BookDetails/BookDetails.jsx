import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../utility/addToDB";

const BookDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();

    const singleBook = data.find((book) => book.bookId === parseInt(id));
    const {
        image,
        bookName,
        tags,
        author,
        category,
        rating,
        review,
        totalPages,
        publisher,
        yearOfPublishing,
    } = singleBook;


  const handleReadList = (id) => {
    addToStoredDB(id);
  }

  const handleWishList = (id) => {
    addToStoredDB(id);
  }

    return (
        <div className="lg:flex justify-between items-start mt-10 mb-10">
            {/* Book Cover */}
            <div className="lg:w-1/2 w-full flex justify-center">
                <img
                    src={image}
                    alt={bookName}
                    className="w-[300px] md:w-[350px] lg:w-[425px] h-[525px] p-16 bg-gray-100 rounded-2xl"
                />
            </div>

            {/* Book Info */}
            <div className="lg:w-1/2 w-full text-gray-800 space-y-4 mt-4">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold text-black">{bookName}</h2>
                    <p className="text-lg text-gray-600">By: {author}</p>
                    <p className="text-lg font-semibold text-gray-700">{category}</p>

                    <p className="text-md mt-3">
                        <span className="font-bold">Review:</span> {review}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-2">
                        {tags.map((tag, idx) => (
                            <span
                                key={idx}
                                className="bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Meta Info */}
                <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                    <div>
                        <span className="font-semibold">Number of Pages:</span> {totalPages}
                    </div>
                    <div>
                        <span className="font-semibold">Publisher:</span>
                        {publisher}
                    </div>
                    <div>
                        <span className="font-semibold">Year of Publishing:</span>
                        {yearOfPublishing}
                    </div>
                    <div>
                        <span className="font-semibold">Rating:</span>
                        {rating}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 mt-4">
                    <button onClick={()=>handleReadList(id)} className="btn bg-black text-white hover:bg-gray-800">
                        Read List
                    </button>
                    <button className="btn bg-teal-400 text-white hover:bg-teal-500">
                        Wish List
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
