import { styled } from "styled-components";
import EstilosGlobais from "../../componentes/GlobaStyle";
import SideMenu from "../../componentes/mainSideBar/SideMenu.jsx";
import BarSide from "../../componentes/BarSide";
import Banner from "../../componentes/Banner";
import bannerBackground from '../../assets/banner.png';
import GaleriaPlayers from "../../componentes/GaleryPlayers";
import fotos from '../../fotos.json';
import { useEffect, useState } from "react";
import ModalZoom from "../../componentes/ModalZoom";
import { Navigate } from "react-router-dom";
import * as Components from './component'
import GameSwiper from '../../componentes/Banner/newBannerCarrosel/index'
import HomeIcon from '@mui/icons-material/Home';
import Header from "../../componentes/MainHeader/index.jsx";
import Home from "../chapinhips/home.jsx"


 
const Backgroundgradient = styled.main`
  background: linear-gradient(174.61deg, #141d26 4.16%, #1a2633 48%, #151515 96.76%);
  width: 100%;
  min-height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 8px solid var(--bgColor);
  display: flex;
  justify-content: space-between;
  gap: 30px;
  overflow: hidden;
  transition: 0.5;
`;


const App = () => {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos);
  const [fotosSelecionada, setFotosSelecionadas] = useState(null);
  const token = sessionStorage.getItem('token');
  const [active, setActive] = useState(false);
  const [games, setGames] = useState([]);

  const handleTogleActive = () => {
    setActive(!active);
  };

const fetchData = () => {
  fetch('http://localhost:5173//api/gamesData.json')
    .then(res => res.json())
    .then(data => {
      setGames(data);
    })
    .catch(e => console.log(e.menssage));
};

useEffect(() => {
  fetchData();
}, []);


// if (!token) {
 //   return <Navigate to="/login" />;
 // }

  return (
    <Components.main> 
    <Backgroundgradient>
      <EstilosGlobais />
      <SideMenu active={active}/>
      <Components.Banner className={`banner ${active ? 'active' : undefined}`}>
      <Header toggleActive={handleTogleActive}/>
      <Home games={games}/>
      </Components.Banner>
      
    </Backgroundgradient>
  </Components.main>
  );
};

export default App;
