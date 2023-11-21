import { GameR } from "./GameRules"
import {App} from "./tictactoe/App"
export let GameTTT = (props) => {
  let ttt_HS = props.ttt_hs
  return (
    <div ref={props.scroll} style={{height : '100dvh'}} className=" grid grid-rows-5 md:grid-cols-5 md:grid-rows-1 border-t border-b rounded-sm border-gray-700">
      <GameR rules='In TicTacToe, two players alternate turns marking 3x3 grid spaces, aiming to place three of their marks in a row.'/>
      <div className=' row-span-4 col-auto md:col-span-4 '>
        <App ttt_hs ={ttt_HS}/>
      </div>
    </div>
  )
}