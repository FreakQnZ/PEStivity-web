import { GameR } from "./GameRules"
import { Hang } from "./Hangman"
export let GameHang = (props) => {
  return (
    <div ref={props.scroll} style={{height : '100dvh'}} className=" grid grid-rows-5 md:grid-cols-5 md:grid-rows-1 border-t border-b rounded-sm border-gray-700">
      <GameR rules='Hangman is a simple game where you have to guess the word by entering the letters one at a time. You have 6 chances to guess the word. Everytime you guess it wrong, a part of a picture where a man is being hung is drawn. Dont let the computer complete the picture! '/>
      <div className=' row-span-4 col-auto md:col-span-4 '>
        <Hang/>
      </div>
    </div>
  )
}