import { GameR } from "./GameRules"
import { Rps } from "./rps/RPS"
export let GameRPS = (props) => {
  let rps_HS = props.rps_hs
  return (
    <div ref={props.scroll} id="#scrolltorps" style={{height : '100dvh'}} className=" grid grid-rows-5 md:grid-cols-5 md:grid-rows-1 border-t border-b rounded-sm border-gray-700">

      <GameR rules='In Rock Paper Scissors, players simultaneously choose rock, paper, or scissors. Rock crushes scissors, scissors cuts paper, paper covers rock.'/>
      <div className=' row-span-4 col-auto md:col-span-4 '>
        <Rps rps_hs={rps_HS}/>
      </div>
    </div>
  )
}
