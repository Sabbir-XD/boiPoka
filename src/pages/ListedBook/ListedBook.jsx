import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBooks, removeFromStoredDB } from "../../utility/addToDB";
import { toast } from "react-toastify";

const ListedBook = () => {
  const [readList, setReadList] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const data = useLoaderData();

  useEffect(() => {
    const storeBookData = getStoredBooks();
    const convertedStoredBook = storeBookData.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      convertedStoredBook.includes(book.bookId)
    );
    setReadList(myReadList);
  }, [data]);

  const handleDelete = (id) => {
    removeFromStoredDB(id);

    const updatedList = readList.filter((book) => book.bookId !== id);
    setReadList(updatedList);

    toast.error("❌ Book removed from Read List", { theme: "colored" });
  };

    const handleSort = (criteria) => {
       setSortBy(criteria);
       
       if (criteria === "pages") {
         const sortedByPage = [...readList].sort((a, b) => a.totalPages - b.totalPages);
         setReadList(sortedByPage);
       }else if (criteria === "ratings") {
         const sortedByRatings = [...readList].sort((a, b) => b.rating - a.rating);
         setReadList(sortedByRatings);
       }

         toast.success(`Sorted by ${criteria}`, { theme: "colored" });

    }
  return (
    <div>
      {/* sort by menu for read and wishlist */}
      <div className="text-center">
        <details className="dropdown">
          <summary className="btn bg-green-600 hover:bg-green-700 text-white m-1">
            Sort By
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li>
              <a onClick={()=>handleSort("pages")}>Pages</a>
            </li>
            <li>
              <a onClick={()=> handleSort("ratings")}>Ratings</a>
            </li>
          </ul>
        </details>
      </div>

      {/* tab list for read and wishlist */}
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          {readList.length > 0 ? (
            <div className="space-y-6">
              {readList.map((book) => (
                <div
                  key={book.bookId}
                  className="flex gap-4 items-start bg-white shadow-md rounded-lg p-4"
                >
                  {/* Book Image */}
                  <div className="w-32 min-w-32">
                    <img
                      src={book.image}
                      alt={book.bookName}
                      className="w-full h-44 object-cover rounded-md"
                    />
                  </div>

                  {/* Book Details */}
                  <div className="flex flex-col justify-between gap-2 w-full">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {book.bookName}
                    </h3>
                    <p className="text-sm text-gray-600">
                      By: <span className="font-medium">{book.author}</span>
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-2">
                      {book.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Extra Info */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-1">
                      <span>Publisher: {book.publisher || "Unknown"}</span>
                      <span>Page: {book.totalPages || "N/A"}</span>
                      <span>Year: {book.yearOfPublishing || "N/A"}</span>
                    </div>

                    {/* Footer Info */}
                    <div className="flex flex-wrap items-center gap-4 mt-2">
                      <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                        Category: {book.category || "General"}
                      </span>
                      <span className="text-sm bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full flex items-center gap-1">
                        ⭐ {book.rating || "4.5"}
                      </span>

                      <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm">
                        View Details
                      </button>

                      {/* 🗑️ Delete Button */}
                      <button
                        onClick={() => handleDelete(book.bookId)}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <h2 className="text-center text-lg text-gray-500 p-20">
              No books in your read list
            </h2>
          )}
        </TabPanel>

        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBook;
