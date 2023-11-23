import './App.css'
import { Landing } from './LandingPage'
import { GameRPS } from './Game1'
import { GameTTT } from './Game2'
import { About } from './Game3'
import { GameC4 } from './Game4'
import { useRef } from 'react'
import Axios from "axios"
import { useEffect, useState } from 'react'
function App() {

  const [data, setData] = useState("");
  const [rps_hs, setRps_hs] = useState(0);
  const [ttt_hs, setTtt_hs] = useState(0);
  const [c4_hs, setC4_hs] = useState(0);

  const getData = async () => {
    try {
      const res = await Axios.get('http://localhost:3000/');
      setData(res.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    // Check if data is defined and has the expected structure
    if (data && data.length === 3) {
      setRps_hs(data[0].highScore);
      setTtt_hs(data[1].highScore);
      setC4_hs(data[2].highScore);
    }
  }, [data]);


  const rps = useRef(null);
  const ttt = useRef(null);
  const about = useRef(null);
  const c4 = useRef(null);

  const scrollRps = () => {
    rps.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollTtt = () => {
    ttt.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollAbout = () => {
    about.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollC4 = () => {
    c4.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Landing rps_hs={rps_hs} ttt_hs={ttt_hs} c4_hs={c4_hs} toRps={scrollRps} toTtt={scrollTtt} toHang={scrollAbout} toC4={scrollC4}/>
      <GameRPS scroll={rps} rps_hs={rps_hs}/>
      <GameTTT scroll={ttt} ttt_hs={ttt_hs}/> 
      <GameC4 scroll={c4} c4_hs={c4_hs}/>
      <About scroll={about}/>
    </div>
  )
}

export default App
