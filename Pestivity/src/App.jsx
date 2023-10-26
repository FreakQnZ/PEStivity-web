import './App.css'
import { Landing } from './LandingPage'
import { GameRPS } from './Game1'
import { GameTTT } from './Game2'
import { GameHang } from './Game3'
import { GameC4 } from './Game4'
import { useRef } from 'react'
function App() {

  const rps = useRef(null);
  const ttt = useRef(null);
  const hang = useRef(null);
  const c4 = useRef(null);

  const scrollRps = () => {
    rps.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollTtt = () => {
    ttt.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollHang = () => {
    hang.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollC4 = () => {
    c4.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Landing toRps={scrollRps} toTtt={scrollTtt} toHang={scrollHang} toC4={scrollC4}/>
      <GameRPS />
      <GameTTT />
      <GameHang />
      <GameC4 />
    </div>
  )
}

export default App
