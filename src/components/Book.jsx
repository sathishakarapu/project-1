import React from "react";
const Book = ({ title, img, author, onClick }) => {
  return (
    <div
      className="book"
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        width: "500px",
        background: "white",
      }}
    >
      <img
        src={img}
        alt={title}
        style={{
          width: "100px",
          height: "150px",
          marginRight: "10px",
          padding: "15px",
        }}
      />
      <div className="book-info">
        <h2>{title}</h2>
        <p>By: {author}</p>
        <button
          onClick={onClick}
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            padding: "5px 10px",
            borderRadius: "3px",
            cursor: "pointer",
            transition: "background-color 0.3s",
            ":hover": {
              backgroundColor: "#032c57",
            },
          }}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default Book;
