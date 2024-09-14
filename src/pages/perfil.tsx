import React from 'react';
import { styled } from 'styled-components';
import EstilosGlobais from '../componentes/GlobaStyle';
import Perfil from '../componentes/Perfil';
import UserList from '../componentes/userList';

// Define a styled component for the background gradient
const Backgroundgradient = styled.div`
  background: linear-gradient(174.61deg, #141d26 4.16%, #1a2633 48%, #151515 96.76%);
  width: 100%;
  min-height: 100vh;
`;

// Define the App component
const App: React.FC = () => {
  return (
    <Backgroundgradient>
      <EstilosGlobais />
      <Perfil />
      <UserList />
    </Backgroundgradient>
  );
};

export default App;
