import { useState } from "react";
import { GameSc } from "./GameScore";

export let Hang = () => {
  let [state, setState] = useState('Play ball')
  let [wins, setWins] = useState(0);
  let [loses, setLoses] = useState(0)

  let rps = (user) => {
    let x = Math.random();
    let computer = 'temp';
    if (x < (1/3)) {
      computer = 'Paper';
    }
    else if (x < (2/3)) {
      computer = 'Rock';
    }

    else {
      computer = 'Scissors';
    }

    if (user === computer) {
      setState('Draw')
    }

    else{
      if(user === 'Rock') {
        if (computer === 'Paper') {
          setState('Computer Choses Paper you lose');
          setLoses(loses + 1);
        }

        else if (computer === 'Scissors') {
          setState('Computer Choses Scissors you win');
          setWins(wins + 1);
        }
      }

      else if(user === 'Paper') {
        if (computer === 'Scissors') {
          setState('Computer Choses Scissors you lose');
          setLoses(loses + 1);
        }

        else if (computer === 'Rock') {
          setState('Computer Choses Rock you win');
          setWins(wins + 1);
        }
      }

      else {
        if (computer === 'Rock') {
          setState('Computer Choses Rock you lose');
          setLoses(loses + 1);
        }

        else if (computer === 'Paper') {
          setState('Computer Choses Paper you win');
          setWins(wins + 1);
        }
      }
    }
      
  }

  return (
  <div className=" w-full h-full grid md:grid-cols-4">
    <div className=" h-full col-span-3 bg-gray-100 grid grid-rows-3 items-center justify-center p-2">
      <div className=" md:text-5xl text-3xl text-center">Hangman</div>
      <div className="flex gap-10 m-auto text-black">
        GAME CONTENT HERE
      </div>
      <div className="flex flex-col items-center gap-8">
        <div className=" text-5xl">{state}</div>
        <div className=" text-3xl flex justify-center gap-4 md:gap-8 items-center md:hidden">
          <p>Wins : {wins}</p>
          <p>Losses : {loses}</p>
          <p className="btn">Forfeit</p>
        </div>
      </div>
    </div>
    <div className="hidden md:block">
      <GameSc w={wins} l={loses}/>
    </div>
  </div>
  )
}