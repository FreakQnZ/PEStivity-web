import logo from './assets/logo.png'
import gitLogo from './assets/gitl.svg'
import starLogo from './assets/star.svg'
import hoverLogo from './assets/starhover.svg'
import { useState } from 'react'
import { Axios } from 'axios'
import './Header.css'

export let Header_landing = (props) => {

  const [hover, setHover] = useState(true)

  let changestate = () => {
    setHover(!hover);
  }

  return (
    <nav className='flex flex-col-reverse items-center md:items-start md:flex-row justify-between' style={{border : '20px solid transparent'}}>
      <div className=' hover:text-white'>
        <a target='_blank' href="https://github.com/FreakQnZ/PEStivity-games-web-app" className=' flex items-center p-2 font-medium space-x-6'>
        <img src={gitLogo} width={24} alt="" />
        <div className='flex space-x-2 items-center justify-center'>
        <p className='text-xl'>Leave a Star</p>
          <div onMouseEnter={changestate} onMouseLeave={changestate}>
            {hover ? <img src={starLogo} width={24} alt="" /> : <img src={hoverLogo} width={24} alt="" />}
          </div>
        </div> 
        </a>
      </div>

      <div className='p-4 md:p-0 md:pr-16'>
        <img src={logo} width={200} alt="" />
      </div>

      <div className=' md:space-y-4 flex  md:flex-col justify-center items-center space-x-3 md:space-x-0'>

        <button className="btn w-40 bg-zinc-700 hover:bg-zinc-100 hover:text-black" onClick={()=>document.getElementById('my_modal_2').showModal()}>LeaderBoard</button>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box flex flex-col items-center">
            <h3 className=' text-4xl font-semibold pb-8'>High Scores</h3>
            <p className=' text-2xl'>Rock Paper Scissors : {props.rps_hs}</p>
            <p className=' text-2xl'>Tic Tac Toe : {props.ttt_hs}</p>
            <p className=' text-2xl'>Connect 4 : {props.c4_hs}</p>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
        
      </div>
    </nav>
  )
}