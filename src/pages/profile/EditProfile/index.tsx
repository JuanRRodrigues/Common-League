import React from 'react';
import { styled } from 'styled-components';
import EstilosGlobais from '../../../componentes/GlobaStyle';
import Perfil from '../../../componentes/Perfil';
import UserList from '../../../componentes/userList';
import SideMenu from '../../../componentes/mainSideBar/SideMenu';
import { useState } from 'react';
import Header from '../../../componentes/MainHeader';
import * as Components from '../../profile/component';
import { Field, Formik } from 'formik';

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
  const [active, setActive] = useState(false);

  const handleToggleActive = () => {
    setActive(!active);
  };

  return (
    <Components.Main>
      <Backgroundgradient>
        <SideMenu active={active} />
        <Header toggleActive={handleToggleActive} />

        <Components.Banner className={`banner ${active ? 'active' : ''}`}>
          <Components.UserBanner>
            <Components.avatarSpan>Kuskyn</Components.avatarSpan>
            <Components.avatarEditProfileSpan>EditProfile</Components.avatarEditProfileSpan>
            <Components.avatar>
              <Components.avatarA href="#"> </Components.avatarA>
              <a href="#" className="icon">
                <Components.avatarImg
                  src="https://i.pinimg.com/736x/58/dd/8c/58dd8c8b12c0755e5b71643eeab3d39f.jpg"
                  alt="User Image"
                />
              </a>
            </Components.avatar>

            <Components.UserOptionsEditBanner>
              <Components.optionDiv>
                <Components.optionLi>General</Components.optionLi>
                <Components.optionLi>Avatar</Components.optionLi>
                <Components.optionLi>Languague Preferences</Components.optionLi>
                <Components.optionLi>Account Detail</Components.optionLi>
                <Components.optionLi>Riot Detail</Components.optionLi>
                <Components.optionLi>Region</Components.optionLi>
              </Components.optionDiv>
            </Components.UserOptionsEditBanner>
          </Components.UserBanner>
          <Components.UserFormEditBanner>
            <Formik
              initialValues={{ login: '', password: '' }}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {({ handleChange, values }) => (
                <Components.formEditProfile autoComplete="off">
                  <label htmlFor="password">Profile Name</label>
                  <Components.formEditInput
                    type="text"
                    id="login"
                    name="login"
                    onChange={handleChange}
                    value="Kuskyn"
                  />

                  <label htmlFor="password">Real Name</label>
                  <Components.formEditInput
                    type="text" // Campo de texto temporário
                    name="password-temp"
                    id="password-temp"
                    placeholder="Digite sua senha"
                    onChange={handleChange}
                    value="Juan Ribeiro Rodrigues"
                  />


<label htmlFor="password">Location</label>
<label htmlFor="password">Country</label>
                  <Components.formEditInput
                    type="text" // Campo de texto temporário
                    name="password-temp"
                    id="password-temp"
                    placeholder="Digite sua senha"
                    onChange={handleChange}
                    value="Brazil"
                  />

<label htmlFor="password">State</label>
                  <Components.formEditInput
                    type="text" // Campo de texto temporário
                    name="password-temp"
                    id="password-temp"
                    placeholder="Digite sua senha"
                    onChange={handleChange}
                    value="São Paulo"
                  />

<label htmlFor="password">City</label>
                  <Components.formEditInput
                    type="text" // Campo de texto temporário
                    name="password-temp"
                    id="password-temp"
                    placeholder="Digite sua senha"
                    onChange={handleChange}
                    value="São Paulo"
                  
                  />


                
                  

                  <button className="button-entrar" type="submit">Save</button>
                  <button className="button-cadastro" type="button">Cancel</button>
                </Components.formEditProfile>
              )}
            </Formik>
          </Components.UserFormEditBanner>
        </Components.Banner>

        <EstilosGlobais />
        <Header toggleActive={handleToggleActive} />
      </Backgroundgradient>
    </Components.Main>
  );
};

export default App;
