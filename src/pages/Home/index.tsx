import React, { useEffect, useState } from 'react';
import { styled } from "styled-components";
import EstilosGlobais from "../../componentes/GlobaStyle";
import SideMenu from "../../componentes/mainSideBar/SideMenu";
import GaleriaPlayers from "../../componentes/GaleryPlayers";
import fotos from '../../fotos.json';
import { Navigate } from "react-router-dom";
import * as Components from './component';
import GameSwiper from '../../componentes/Banner/newBannerCarrosel';
import Header from "../../componentes/MainHeader";
import Home from "../chapinhips/home";
import { Game, Foto } from '../../data/types'; // Importa os tipos corretos

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
  transition: 0.5s;
`;

const App: React.FC = () => {
  const [fotosDaGaleria, setFotosDaGaleria] = useState<Foto[]>(fotos);
  const [fotosSelecionada, setFotosSelecionadas] = useState<Foto | null>(null);
  const token = sessionStorage.getItem('token');
  const [active, setActive] = useState(false);
  const [games, setGames] = useState<Game[]>([]);

  const handleTogleActive = () => {
    setActive(!active);
  };

  const fetchData = () => {
    fetch('http://localhost:5173/api/gamesData.json')
      .then(res => res.json())
      .then(data => {
        setGames(data);
      })
      .catch(e => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Descomente se necessário
   if (!token) {
    // return <Navigate to="/login" />;
   }

  return (
    <Components.Main>
      <Backgroundgradient>
        <EstilosGlobais />
        <SideMenu active={active} />
        <Components.Banner className={`banner ${active ? 'active' : ''}`}>
          <Header toggleActive={handleTogleActive} />
          <Home games={games} />
          <GaleriaPlayers
            aoFotoSelecionada={foto => setFotosSelecionadas(foto)}
            fotos={fotosDaGaleria}
          />
        </Components.Banner>
      </Backgroundgradient>
    </Components.Main>
  );
};

export default App;
