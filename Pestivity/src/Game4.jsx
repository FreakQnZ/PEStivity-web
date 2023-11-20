import { GameR } from "./GameRules"
import { C4 } from "./connect4"
export let GameC4 = (props) => {
  return (
    <div ref={props.scroll} style={{height : '100dvh'}} className=" grid grid-rows-5 md:grid-cols-5 md:grid-rows-1 border-t border-b rounded-sm border-gray-700 md:text-1">
      <GameR rules='Connect 4 is a two-player connection game in which the players first choose a color and then take turns dropping colored discs. The pieces fall straight down, occupying the next available space within the column. The objective of the game is to be the first player to connect 4 of their pieces either horizontally, vertically, or diagonally. Failure to do so from either side will result in a draw.' font-size='text-2x1'/>
      <div className=' row-span-4 col-auto md:col-span-4 '>
        <C4/>
      </div>
    </div>
  )
}