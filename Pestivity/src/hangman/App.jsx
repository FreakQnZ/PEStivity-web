import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

const words = ['hangman', 'react', 'javascript', 'developer', 'programming'];

export const HangmanGame = () => {
  const [selectedWord, setSelectedWord] = useState('');
  const [displayWord, setDisplayWord] = useState([]);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const initializeGame = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    const initialWord = words[randomIndex].toLowerCase();
    const initialDisplay = Array(initialWord.length).fill('_');

    setSelectedWord(initialWord);
    setDisplayWord(initialDisplay);
    setGuessedLetters([]);
    setGameOver(false);
  };

  const handleGuess = (letter) => {
    if (!gameOver) {
      const updatedGuessedLetters = [...guessedLetters, letter];

      if (selectedWord.includes(letter)) {
        const updatedDisplayWord = displayWord.map((char, index) =>
          selectedWord[index] === letter ? letter : char
        );
        setDisplayWord(updatedDisplayWord);
      } else {
        setScore(score - 1);
      }

      setGuessedLetters(updatedGuessedLetters);
    }
  };

  const handleReset = () => {
    initializeGame();
    setScore(5);
  };

  useEffect(() => {
    if (displayWord.join('') === selectedWord) {
      setGameOver(true);
    }
  }, [displayWord, selectedWord]);

  useEffect(() => {
    if (score === 0) {
      setGameOver(true);
    }
  }, [score]);

  useEffect(() => {
    initializeGame();
  }, []);

  return (
    <div className="container mx-auto mt-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Hangman Game</h1>
      <div className="mb-4">
        <p className="text-xl">Word: {displayWord.join(' ')}</p>
        <p className="text-xl">Guessed Letters: {guessedLetters.join(', ')}</p>
        <p className="text-xl">Score: {score}</p>
        {gameOver && (
          <p className="text-2xl font-bold">
            {displayWord.join('') === selectedWord ? 'Congratulations! You guessed the word!' : 'Game over!'}
          </p>
        )}
        <p className="text-xl mt-4">Final Score: {score}</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
      <div>
        <p className="text-xl">Guess a letter:</p>
        <div className="flex flex-wrap">
          {Array.from({ length: 26 }, (_, index) => String.fromCharCode(97 + index)).map(
            (letter) => (
              <button
                key={letter}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2 mb-2"
                onClick={() => handleGuess(letter)}
                disabled={guessedLetters.includes(letter) || gameOver}
              >
                {letter}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

