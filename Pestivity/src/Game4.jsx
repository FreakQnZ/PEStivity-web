import { GameR } from "./GameRules"
import { ConnectFour } from "./connect4/App"

export let GameC4 = (props) => {
  let c4_HS = props.c4_hs
  return (
    <div ref={props.scroll} style={{height : '100dvh'}} className=" grid grid-rows-5 md:grid-cols-5 md:grid-rows-1 border-t border-b rounded-sm border-gray-700 md:text-1">
      <GameR rules='In Connect 4, two players alternate turns dropping colored discs into a 7x6 grid. First to align four discs wins.'/>
      <div className=' row-span-4 col-auto md:col-span-4 '>
        <ConnectFour c4_hs={c4_HS}/>
      </div>
    </div>
  )
}