export let Gbuttons = () => {
  return (
    <div className="flex  justify-between flex-col items-center">
      <div className=" grid grid-cols-2 md:grid-cols-4 grid-rows-2 w-4/5 md:gap-14 gap-4 mt-5 md:mt-0">
        <p className="btn h-20 p-2 text-xl">Hangman</p>
        <p className="btn h-20 md:row-start-2 md:col-start-2 text-xl">R P S</p>
        <p className="btn h-20 md:col-start-3 text-xl">Tic Tac Toe</p>
        <p className="btn h-20 md:col-start-4 md:row-start-2 text-xl">Connect 4</p>
      </div>
    </div>
  )
}