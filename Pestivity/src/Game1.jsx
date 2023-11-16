import { GameR } from "./GameRules"
import { Rps } from "./RPS"
export let GameRPS = (props) => {
  return (
    <div ref={props.scroll} id="#scrolltorps" style={{height : '100dvh'}} className=" grid grid-rows-5 md:grid-cols-5 md:grid-rows-1 border-t border-b rounded-sm border-gray-700">
      <GameR rules='The rules for Rock Paper Scissors are: Rock beats Scissors, Scissors beats Paper, and Paper beats Rock. Test your luck and see where it can get you!'/>
      <div className=' row-span-4 col-auto md:col-span-4 '>
        <Rps/>
      </div>
    </div>
  )
}