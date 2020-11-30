import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { ADD_AUTHOR } from "../graphql/mutations";

const AddAuthor = () => {
  const [authorInfo, setAuthorInfo] = useState({ name: "", age: "" });

  const [addAuthor] = useMutation(ADD_AUTHOR);
  const onSubmit = (evt) => {
    evt.preventDefault();
    addAuthor({ variables: { name: authorInfo.name, age: +authorInfo.age } });
    setAuthorInfo({ name: "", age: "" });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Add author</h2>
      <div style={{ marginBottom: 5 }}>
        <label>Name: </label>
        <input
          type="text"
          placeholder="name"
          value={authorInfo.name}
          onChange={(evt) => setAuthorInfo({ ...authorInfo, name: evt.target.value })}
        />
      </div>
      <div style={{ marginBottom: 5 }}>
        <label>Age: </label>
        <input
          type="number"
          placeholder="age"
          value={authorInfo.age}
          onChange={(evt) => setAuthorInfo({ ...authorInfo, age: evt.target.value })}
        />
      </div>
      <button
        style={{
          padding: "5px 15px",
          backgroundColor: "green",
          color: "#fff",
          fontSize: 18,
        }}
      >
        ADD
      </button>
    </form>
  );
};
export default AddAuthor;
