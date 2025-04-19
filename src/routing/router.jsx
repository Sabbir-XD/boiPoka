import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import BookDetails from "../pages/BookDetails/BookDetails";
import ListedBook from "../pages/ListedBook/ListedBook";
import PageToRead from "../pages/PageToRead/PageToRead";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>Page not found 404</div>,
    children: [
      {
        index: true,
        loader: () => fetch('/bookData.json').then(res => res.json()),
        element: <Home />
      },
      {
        path: "/listed-books",
        loader: () => fetch('/bookData.json').then(res => res.json()),
        element: <ListedBook />
      },
      {
        path: "/pages-to-read",
        element: <PageToRead />
      },
      {
        path: "/BookDetails/:id",
        loader: () => fetch('/bookData.json').then(res => res.json()),
        element: <BookDetails />
      }
    ],
  },
]);

