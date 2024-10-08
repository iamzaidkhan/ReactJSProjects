import React, { useState } from "react";
import "./App.css";
import Block from "./components/Block";
import { stat } from "fs";

function App() {
  const [state, setState] = useState(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState("X");

  const checkWinner = (state: any[]) => {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for(let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i];
      if(state[a] !== null && state[a] === state[b] && state[a] === state[b]) return true;
    }
    return false;
  } 
  
  const handleBlogClick = (index: number) => {

    const stateCopy = Array.from(state);

    if (stateCopy[index] !== null) return
    stateCopy[index] = currentTurn;

    // Check if someone won
    const win = checkWinner(stateCopy);

    if(win) {
      alert(`${currentTurn} won the game`);
    }

    setCurrentTurn(currentTurn === "X" ? "O" : "X");
    setState(stateCopy);
  }

  console.log(state);

  return (
    <div className="board">
      <div className="row">
        <Block onClick={() => handleBlogClick(0)} value={state[0]} />
        <Block onClick={() => handleBlogClick(1)} value={state[1]} />
        <Block onClick={() => handleBlogClick(2)} value={state[2]} />
      </div>
      <div className="row">
        <Block onClick={() => handleBlogClick(3)} value={state[3]} />
        <Block onClick={() => handleBlogClick(4)} value={state[4]} />
        <Block onClick={() => handleBlogClick(5)} value={state[5]} />
      </div>
      <div className="row">
        <Block onClick={() => handleBlogClick(6)} value={state[6]} />
        <Block onClick={() => handleBlogClick(7)} value={state[7]} />
        <Block onClick={() => handleBlogClick(8)} value={state[8]} />
      </div>
    </div>
  );
}

export default App;
