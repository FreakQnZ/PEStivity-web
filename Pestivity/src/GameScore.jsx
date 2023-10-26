export let GameSc = (props) => {
  return (
    <div className=" h-full bg-gray-900 p-6 flex flex-col items-center justify-start">
      <div className="flex flex-col items-center gap-5 w-full h-full">
        <p className="text-2xl md:text-6xl">Score</p>
        <div className=" bg-red-500 rounded-md flex justify-between items-center p-2 flex-col w-3/4 md:h-72 h-3/4">
          <div className="flex flex-col gap-5 text-3xl items-center">
          <div>Wins : {props.w}</div>
          <div>Loss : {props.l}</div>
          </div>
          <p className="btn">Forfeit</p>
        </div>
      </div>
    </div>
  )
}