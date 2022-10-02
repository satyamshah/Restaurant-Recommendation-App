import React from "react";
import "./styles.css";
import { useState } from "react";

const restruantDB = {
  Cafe: [
    { name: "PENT Cafe", rating: "4.5/5" },
    { name: "Raadium Cafe", rating: "4/5" },
    { name: "Chai Break", rating: "4/5" },
    { name: "BOCCA CAFE", rating: "3.5/5" }
  ],
  FastFood: [
    {
      name: "Burger King",
      rating: "4/5"
    },
    {
      name: "Biggies",
      rating: "3.5/5"
    },
    {
      name: "Hotel chilliz",
      rating: "3.5/5"
    }
  ],
  NorthIndian: [
    {
      name: "Tandooriwala",
      rating: "5/5"
    },
    {
      name: "Curry leaf",
      rating: "4.5/5"
    },
    {
      name: "Carbon",
      rating: "4/5"
    },
    {
      name: "99 North",
      rating: "3.5/5"
    }
  ],
  SouthIndian: [
    {
      name: "South Junction",
      rating: "4.5/5"
    },
    {
      name: "Idli Bhawan",
      rating: "3.5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Cafe");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 🍽️ Restaurants in Bhubaneshwar </h1>
      <p style={{ fontSize: "smaller" }}>
        Checkout my favorite places to eat in Bhubaneshwar . Select a genre to
        get started
      </p>

      <div>
        {Object.keys(restruantDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#d4d4d8",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {restruantDB[selectedGenre].map((restruant) => (
            <li
              key={restruant.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #d4d4d8",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {restruant.name} </div>
              <div style={{ fontSize: "smaller" }}> {restruant.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
