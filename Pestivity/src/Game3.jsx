import { GameR } from "./GameRules"
import { HangmanGame } from "./hangman/App"
export let GameHang = (props) => {
  return (
    <div ref={props.scroll} style={{height : '100dvh'}} className=" grid grid-rows-5 md:grid-cols-5 md:grid-rows-1 border-t border-b rounded-sm border-gray-700">
      <GameR rules='In Hangman, one player thinks of a word, others guess letters. Incorrect guesses add to a drawn ‘hangman’ until complete. '/>
      <div className=' row-span-4 col-auto md:col-span-4 '>
        <HangmanGame/>
      </div>
    </div>
  )
}