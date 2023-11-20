import { GameR } from "./GameRules"
import { Rps } from "./RPS"
export let GameRPS = (props) => {
  return (
    <div ref={props.scroll} id="#scrolltorps" style={{height : '100dvh'}} className=" grid grid-rows-5 md:grid-cols-5 md:grid-rows-1 border-t border-b rounded-sm border-gray-700">

      <GameR rules='In Rock, Paper, Scissors, two players simultaneously choose one of three options: rock, paper, or scissors. Rock crushes scissors, scissors cuts paper, and paper covers rock. If both players choose the same option, it is a tie.'/>
      <div className=' row-span-4 col-auto md:col-span-4 '>
        <Rps/>
      </div>
    </div>
  )
}
