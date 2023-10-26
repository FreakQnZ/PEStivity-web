import { GameR } from "./GameRules"
import { Hang } from "./Hangman"
export let GameHang = (props) => {
  return (
    <div ref={props.scroll} style={{height : '100dvh'}} className=" grid grid-rows-5 md:grid-cols-5 md:grid-rows-1 border-t border-b rounded-sm border-gray-700">
      <GameR rules='Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatum sit saepe minima porro quas ipsam, consequatur a veritatis minus.'/>
      <div className=' row-span-4 col-auto md:col-span-4 '>
        <Hang/>
      </div>
    </div>
  )
}