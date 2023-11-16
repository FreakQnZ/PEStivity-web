import { GameR } from "./GameRules"
import { Ttt } from "./TTT"
Ttt
export let GameTTT = (props) => {
  return (
    <div ref={props.scroll} style={{height : '100dvh'}} className=" grid grid-rows-5 md:grid-cols-5 md:grid-rows-1 border-t border-b rounded-sm border-gray-700">
      <GameR rules='The rules are simple, pick a cross or a circle. The first player to get three in a row, vertically, horizontally and even diagonally wins. In such case that neither player is able to, the game is a draw. '/>
      <div className=' row-span-4 col-auto md:col-span-4 '>
        <Ttt/>
      </div>
    </div>
  )
}