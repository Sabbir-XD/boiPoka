import React from "react";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Link } from "react-router";

const Books = ({ book }) => {
  const { bookId,image,bookName,tags,author,category,rating } = book;
  return (
    <Link to={`/BookDetails/${bookId}`}>
      <div className="card mt-10 mb-10 bg-base-400 w-12/12 shadow-md p-6 border-2 border-gray-200">
      <figure className="bg-gray-100 py-6 rounded-2xl">
        <img
          src={image}
          alt="Books"
          className="w-[134px] h-[166px] shadow-md shadow-gray-300 hover:shadow-lg hover:shadow-gray-400 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
        />
      </figure>
      <div className="card-body space-y-2">
        <div className="flex text-center gap-5">
            <p className="bg-green-50 text-md font-semibold text-green-800 p-1 rounded-3xl">{tags[0]}</p>
            <p className="bg-green-50 text-md font-semibold text-green-800 p-1 rounded-3xl">{tags[1]}</p>
        </div>
        <h2 className="card-title text-xl font-bold">{bookName}</h2>
        <p className="text-md font-medium">By: {author}</p>
        <div className="flex gap-5">
            <p className="text-md font-semibold p-1 rounded-3xl">{category}</p>
            <p className="text-md font-semibold p-1 rounded-3xl flex justify-end items-center gap-3">{rating} <FaRegStarHalfStroke/></p>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Books;
