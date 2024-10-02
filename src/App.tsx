import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/LoginRegister';
import Riot from './pages/Master/riot';
import Perfil from './pages/profile/UserProfile';
import PerfilEdit from './pages/profile/EditProfile';
import Adm from './pages/Master/adm';
import Mp from './pages/Payment/mercadoPago';
import Team from './pages/team/TeamProfile';

//import Teams from './pages/team';
//import Torneios from './pages/tournament';
//import Teams2 from './pages/teams';
        
       // <Route path="/torneios" element={<Torneios />} />
       // <Route path="/teamList" element={<Teams2 />} />
      
      
     //  <Route path="/payment" element={<Adm />} />
        // <Route path="/teams" element={<Teams />} />
     
   
import ADM from './pages/Master';

const App: React.FC = () => {
  return (
    <BrowserRouter> 
      <Routes>
        
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/adm" element={<ADM />} />
        <Route path="/mp" element={<Mp />} />
        <Route path="profiles"> 
            <Route index element={<Perfil />} />
            <Route path="edit" element={<PerfilEdit />} />
        </Route>
        <Route path="/team" element={<Team />} />
        <Route path="/riot" element={<Riot />} />
        <Route path='*' element={<div><img src="./public/icones/molho.png" alt="" /></div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
