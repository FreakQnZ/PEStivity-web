import { useState } from "react";
import { GameSc } from "./GameScore";

{/* TIC TAC TOE GAME*/}



export let Ttt = () => {

  return (
  <div className=" w-full h-full grid md:grid-cols-4">
    <div className=" h-full col-span-3 bg-gray-100 grid grid-rows-3 items-center justify-center p-2">
      <div className=" md:text-5xl text-3xl text-center">Tic Tac Toe</div>
      <div className="flex gap-10 m-auto text-black">
        GAME CONTENT HERE
      </div>
      <div className="flex flex-col items-center gap-8">
        <div className=" text-5xl">{0}</div>
        <div className=" text-3xl flex justify-center gap-4 md:gap-8 items-center md:hidden">
          <p>Wins : {0}</p>
          <p>Losses : {0}</p>
          <p className="btn">Forfeit</p>
        </div>
      </div>
    </div>
    <div className="hidden md:block">
      <GameSc w={0} l={0}/>
    </div>
  </div>
  )
}