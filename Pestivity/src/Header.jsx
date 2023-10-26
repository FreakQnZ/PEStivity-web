import logo from './assets/logo.png'
import gitLogo from './assets/gitl.svg'
import starLogo from './assets/star.svg'
import hoverLogo from './assets/starhover.svg'
import { useState } from 'react'
import './Header.css'

export let Header_landing = () => {

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
        <a href="" className='btn w-40 bg-zinc-700 hover:bg-zinc-100 hover:text-black'>
          My Account
        </a>
        <a href="" className='btn w-40 bg-zinc-700 hover:bg-zinc-100 hover:text-black'>
          Leaderboard
        </a>
      </div>
    </nav>
  )
}