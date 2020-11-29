import { gql, useQuery } from "@apollo/client";
import React from "react";
import "../styles/Books.css";

const GET_BOOKS = gql`
  {
    books {
      name
      id
      author {
        name
      }
    }
  }
`;

const Books = () => {
  const { data, loading } = useQuery(GET_BOOKS);

  return (
    <section className="books">
      <h1 className="books__title">GraphQL Books List</h1>
      {loading ? (
        <p>Loading....</p>
      ) : (
        <ul className="books__list">
          {data.books.map((book) => (
            <li className="books__book book" key={book.id}>
              <span className="book__name">Name: {book.name}</span>
              <span className="book__author">Author : {book.author.name}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Books;
