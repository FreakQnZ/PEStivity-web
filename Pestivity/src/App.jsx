import './App.css'
import { Landing } from './LandingPage'
import { GameRPS } from './Game1'
import { GameTTT } from './Game2'
import { GameHang } from './Game3'
import { GameC4 } from './Game4'
import { useRef } from 'react'
import Axios from "axios"
import { useEffect, useState } from 'react'
function App() {

  const [data, setData] = useState("");
  const [rps_hs, setRps_hs] = useState(0);
  const [ttt_hs, setTtt_hs] = useState(0);
  const [hang_hs, setHang_hs] = useState(0);
  const [c4_hs, setC4_hs] = useState(0);

  const getData = async () => {
    // const res = await Axios.get('http://localhost:3000/');
    // setData(res.data);
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
    if (data && data.length === 4) {
      setRps_hs(data[0].highScore);
      setTtt_hs(data[1].highScore);
      setHang_hs(data[2].highScore);
      setC4_hs(data[3].highScore);
    }
  }, [data]);


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
      <Landing rps_hs={rps_hs} ttt_hs={ttt_hs} hang_hs={hang_hs} c4_hs={c4_hs} toRps={scrollRps} toTtt={scrollTtt} toHang={scrollHang} toC4={scrollC4}/>
      <GameRPS scroll={rps} rps_hs={rps_hs}/>
      <GameTTT scroll={ttt} ttt_hs={ttt_hs}/> 
      <GameHang scroll={hang}/>
      <GameC4 scroll={c4} c4_hs={c4_hs}/>
    </div>
  )
}

export default App
