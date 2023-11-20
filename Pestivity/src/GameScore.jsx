import { useState } from "react"

export let GameSc = (props) => {
  const [windif, setWindif] = useState(0)
  const [lossdif, setLossdif] = useState(0)
  let reset = () => {
    setLossdif(props.l)
    setWindif(props.w)
  }

  return (
    <div className=" h-full bg-gray-900 p-6 flex flex-col items-center justify-start">
      <div className="flex flex-col items-center gap-5 w-full h-full">
        <p className="text-2xl md:text-6xl">Score</p>
        <div className=" bg-sky-500 rounded-md flex justify-between items-center p-2 flex-col w-3/4 md:h-72 h-3/4">
          <div className="flex flex-col gap-5 text-3xl items-center">
          <div className=" text-black">Wins : {props.w - windif}</div>
          <div className=" text-black">Loss : {props.l - lossdif}</div>
          </div>
          <p className="btn" onClick={reset}>Reset</p>
        </div>
      </div>
    </div>
  )
}