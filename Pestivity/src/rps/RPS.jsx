import { useState } from "react";
import { GameSc } from "../GameScore";
import paper from '../assets/rps_img/paper.png'
import scissors from '../assets/rps_img/scissors.png'
import rock from '../assets/rps_img/rock.jpg'
import Axios from "axios";

export let Rps = (props) => {

  let [state, setState] = useState('Play ball')
  let [wins, setWins] = useState(0);
  let [loses, setLoses] = useState(0)
  // const [msg, setMsg] = useState({name : "RPS", score : 0});


  let submit = async() => {
    let obj = { name : "RPS", score : wins + 1}

    try {
      await Axios.post('http://localhost:3000/',{
      obj
      })
    }
    catch(e) {
      console.log(e)
    }
  }

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
      if (state == 'Draw') {
        setState('Draw again!')
      }
      else {
        setState('Draw')
      }
    }

    else{
      if(user === 'Rock') {
        if (computer === 'Paper') {
          setState('Computer Choses Paper you lose');
          setLoses(loses + 1);
        }

        else if (computer === 'Scissors') {
          setState('Computer Choses Scissors you win');
          setWins((prevWins)=>prevWins+1);
          if (props.rps_hs <= wins) {
            submit()
          }
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
          if (props.rps_hs <= wins) {
            submit()
          }
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

          if (props.rps_hs <= wins) {
            submit()
          }
        }
      }
    }


      
  }

  return (
  <div className=" w-full h-full grid md:grid-cols-4 font-rps">
    <div className=" h-full col-span-3 bg-gray-100 grid grid-rows-3 items-center justify-center p-2">
      <div className=" md:text-5xl text-blue-500 text-3xl text-center">Rock Paper Scissors</div>
      <div className="flex gap-10 m-auto text-black justify-center">
        <img src={rock} width={'25%'} height={'50%'} alt="logo" onClick={() => {rps('Rock')}} className=" border-8 border-transparent rounded-full cursor-pointer hover:border-blue-500" />
        <img src={paper} width={'25%'} height={'50%'} alt="logo" onClick={() => {rps('Paper')}} className=" rounded-full border-8 border-transparent cursor-pointer hover:border-blue-500"/>
        <img src={scissors} width={'25%'} height={'50%'} alt="logo" onClick={() => {rps('Scissors')}} className=" rounded-full border-8 border-transparent cursor-pointer hover:border-blue-500"/>
      </div>
      <div className="flex flex-col items-center gap-8">
        <div className=" text-5xl text-gray-950">{state}</div>
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