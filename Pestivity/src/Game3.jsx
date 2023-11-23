import Bg from './assets/aboutus.png'
export let About = (props) => {
  return (
    <div ref={props.scroll} style={{height : '100dvh'}} className=" border-gray-700 flex flex-col items-center p-4 md:p-2 pb-10 justify-between">
      <div className=" text-4xl font-tictactoe font-semibold">About Us</div>
      <div className=" text-2xl pt-4 font-sans font-thin">Web Technologies Project - 2023 CSE - AIML A section</div>
      <div className=" w-2/3 grid grid-cols-2 items-center gap-8 mt-10">
        <div className=" text-center font-mono">
          <div className=" text-3xl">Anuraag A Srivatsa</div>
          <div className="text-xl">PES1UG22AM026</div>
        </div>
        <div className=" text-center font-mono">
        <div className=" text-3xl">Aryan Shantiraj Prabhu</div>
          <div className="text-xl">PES1UG22AM034</div>
        </div>
        <div className=" text-center font-mono">
        <div className=" text-3xl">Anagha Kini</div>
          <div className="text-xl">PES1UG22AM019</div>
        </div>
        <div className=" text-center font-mono">
        <div className=" text-3xl">Dhruvv Raghu</div>
          <div className="text-xl">PES1UG22AM066</div>
        </div>
      </div>
      <img className=" mt-4 rounded-3xl" src={Bg} width={'60%'} alt="" />

    </div>
  )
}