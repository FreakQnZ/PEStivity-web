import { GameRPS } from './Game1'
import { Header_landing } from './Header'
import { LandingHero } from './Landing'
// import { Gbuttons } from './GameButtons'
import { Sup } from './Support'

export let Landing = (props) => {
  return (
    <div style={{height : '100dvh'}} className=' flex flex-col justify-between'>
        <Header_landing rps_hs={props.rps_hs} ttt_hs={props.ttt_hs} hang_hs={props.hang_hs} c4_hs={props.c4_hs}/>
        <LandingHero/>
        <div className="flex  justify-between flex-col items-center">
          <div className=" grid grid-cols-2 md:grid-cols-4 grid-rows-2 w-4/5 md:gap-14 gap-4 mt-5 md:mt-0">
            <p onClick={props.toHang} className="btn h-20 p-2 text-xl hover:bg-black">Hangman</p>
            <p onClick={props.toRps} className="btn h-20 md:row-start-2 md:col-start-2 text-xl hover:bg-black">R P S</p>
            <p onClick={props.toTtt} className="btn h-20 md:col-start-3 text-xl hover:bg-black">Tic Tac Toe</p>
            <p onClick={props.toC4} className="btn h-20 md:col-start-4 md:row-start-2 text-xl hover:bg-black">Connect 4</p>
          </div>
        </div>
        <Sup/>
    </div>
  )
}