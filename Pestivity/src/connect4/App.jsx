import React, { useState, useEffect } from 'react';
import  Axios  from 'axios';
import { GameSc } from "../GameScore";

const INITIAL_STATE = {
  rows: 6,
  columns: 7,
  player1: 'Player 1',
  player2: 'Player 2',
};

export const ConnectFour = (props) => {
  const [board, setBoard] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [winner, setWinner] = useState(null);
  const [score, setScore] = useState({ player1: 0, player2: 0 });


  let submit = async() => {
    let obj = { name : "c4", score : score.player1 + 1}

    try {
      await Axios.post('http://localhost:3000/',{
      obj
      })
    }
    catch(e) {
      console.log(e)
    }
  }

  useEffect(() => {
    initializeBoard();
  }, []);

  const initializeBoard = () => {
    const initialBoard = Array.from({ length: INITIAL_STATE.rows }, () =>
      Array(INITIAL_STATE.columns).fill(null)
    );
    setBoard(initialBoard);
    setCurrentPlayer(1);
    setWinner(null);
  };

  const resetGame = () => {
    initializeBoard();
  };

  const handleClick = (colIndex) => {
    if (winner || board[0][colIndex]) {
      return;
    }

    const newBoard = [...board];
    let rowIndex = INITIAL_STATE.rows - 1;

    while (rowIndex >= 0 && newBoard[rowIndex][colIndex]) {
      rowIndex--;
    }

    if (rowIndex === -1) {
      return;
    }

    newBoard[rowIndex][colIndex] = currentPlayer;
    setBoard(newBoard);

    if (checkWinner(rowIndex, colIndex)) {
      setWinner(currentPlayer);
      setScore((prevScore) => ({
        ...prevScore,
        [currentPlayer === 1 ? 'player1' : 'player2']: prevScore[currentPlayer === 1 ? 'player1' : 'player2'] + 1,
      }));
      if (props.c4_hs <= score.player1) {
        submit()
      }
    } else {
      setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
    }
  };

  const checkWinner = (rowIndex, colIndex) => {
    return (
      checkLine(rowIndex, colIndex, 0, 1) ||
      checkLine(rowIndex, colIndex, 1, 0) ||
      checkLine(rowIndex, colIndex, 1, 1) ||
      checkLine(rowIndex, colIndex, -1, 1)
    );
  };

  const checkLine = (row, col, rowDirection, colDirection) => {
    const player = board[row][col];

    for (let i = 1; i < 4; i++) {
      const newRow = row + i * rowDirection;
      const newCol = col + i * colDirection;

      if (
        newRow < 0 ||
        newRow >= INITIAL_STATE.rows ||
        newCol < 0 ||
        newCol >= INITIAL_STATE.columns ||
        board[newRow][newCol] !== player
      ) {
        return false;
      }
    }

    return true;
  };

  return (
    <div className=' w-full h-full overflow-hidden grid md:grid-cols-4 font-connect4'>
      <div className='  h-full col-span-3 bg-gray-100 grid grid-rows-3 items-center justify-center p-2'>
      <div className="container mx-auto my-8 text-center ">
          <h1 className="text-3xl font-bold mb-4">Connect Four</h1>
          <div className="mb-4">
            {winner ? (
              <p className="text-2xl font-bold">{`Player ${winner} wins!`}</p>
            ) : (
              <p className="text-2xl font-bold">{`Current Player: Player ${currentPlayer}`}</p>
            )}
            <table className="mx-auto">
              <tbody>
                {board.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, colIndex) => (
                      <td
                        key={colIndex}
                        className="w-12 h-12 border border-gray-500 cursor-pointer"
                        onClick={() => handleClick(colIndex)}
                      >
                        {cell === 1 ? 'X' : cell === 2 ? 'O' : ''}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <p className="text-xl font-bold mb-2">Score:</p>
            <p className="text-lg">{`${INITIAL_STATE.player1}: ${score.player1} | ${INITIAL_STATE.player2}: ${score.player2}`}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none btn"
              onClick={resetGame}
            >
              Reset Game
            </button>
          </div>
        </div>
      </div>

        <div className="hidden md:block">
          <GameSc w={score.player1} l={score.player2}/>
        </div>
    </div>
  );
};
