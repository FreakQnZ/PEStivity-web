import logo from './assets/logo.png'
import git from './assets/gitl.svg'

export let GameR = (props) => {
  return (
    <div className=" h-full bg-gray-900 flex flex-col justify-between p-2 ">
      <div className=' h-[95%] flex flex-col items-center p-4 md:gap-8 gap-2'>
      <img src={logo} alt="logo" className='hidden md:block'/>
      <p className=' md:text-6xl text-2xl'>Rules</p>
      <p className='md:text-xl'>{props.rules}</p>
      </div>
      <div className='hidden md:block'>
        <a href="https://github.com/FreakQnZ/PEStivity-web" target='_blank' className='flex gap-4 items-center hover:text-white'>
          <img src={git} width={30} alt="" />
          <p className='text-lg'>Visit the Repo</p>
        </a>
      </div>
    </div>
  )
}