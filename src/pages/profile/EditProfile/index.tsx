import React from 'react';
import { styled } from 'styled-components';
import EstilosGlobais from '../../../componentes/GlobaStyle';
import Perfil from '../../../componentes/Perfil';
import UserList from '../../../componentes/userList';
import SideMenu from '../../../componentes/mainSideBar/SideMenu';
import { useState } from 'react';
import Header from '../../../componentes/MainHeader';
import * as Components from './component';
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

  const [selectedOption, setSelectedOption] = useState('General');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Components.Main>
      <Backgroundgradient>
        <SideMenu active={active} />

        <Components.Banner className={`banner ${active ? 'active' : ''}`}>
          <Header toggleActive={handleToggleActive} />
          <Components.UserBanner>
            <Components.avatarSpan>Kuskyn</Components.avatarSpan>
            <Components.avatarEditProfileSpan>EditProfile</Components.avatarEditProfileSpan>
            <Components.avatar>
              <Components.avatarA href="#"> </Components.avatarA>
              <a href="#" className="icon">
                <Components.avatarImg
                  src="../../../../public/icones/malenia.png"
                  alt="User Image"
                />
              </a>
            </Components.avatar>

            <Components.UserOptionsEditBanner>
              <Components.optionDiv>
                <Components.optionLi onClick={() => setSelectedOption('General')}>General</Components.optionLi>
                <Components.optionLi onClick={() => setSelectedOption('Avatar')}>Avatar</Components.optionLi>
                <Components.optionLi onClick={() => setSelectedOption('Language Preferences')}>Language Preferences</Components.optionLi>
                <Components.optionLi onClick={() => setSelectedOption('Account Detail')}>Account Detail</Components.optionLi>
                <Components.optionLi onClick={() => setSelectedOption('Riot Detail')}>Riot Detail</Components.optionLi>
                <Components.optionLi onClick={() => setSelectedOption('Region')}>Region</Components.optionLi>
              </Components.optionDiv>
            </Components.UserOptionsEditBanner>
          </Components.UserBanner>

          <Components.UserFormEditBanner>
            <Formik
              initialValues={{ login: '', realName: '', location: '', country: '', state: '', city: '' }}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {({ handleChange, values }) => (
                <Components.formEditProfile autoComplete="off">
                

                  {selectedOption === 'General' && (
                    <>
                      <Components.formEditLabel htmlFor="login">Profile Name</Components.formEditLabel>
                      <Components.formEditInput
                        type="text"
                        id="login"
                        name="login"
                        onChange={handleChange}
                        value={values.login}
                      />

                      <Components.formEditLabel htmlFor="realName">Real Name</Components.formEditLabel>
                      <Components.formEditInput
                        type="text"
                        id="realName"
                        name="realName"
                        onChange={handleChange}
                        value={values.realName}
                      />

                      <Components.formEditLabel htmlFor="country">Country</Components.formEditLabel>
                      <Components.formEditInput
                        type="text"
                        id="country"
                        name="country"
                        onChange={handleChange}
                        value={values.country}
                        autoComplete="off"
                      />

                      <Components.formEditLabel htmlFor="state">State</Components.formEditLabel>
                      <Components.formEditInput
                        type="text"
                        id="state"
                        name="state"
                        onChange={handleChange}
                        value={values.state}
                      />

                      <Components.formEditLabel htmlFor="city">City</Components.formEditLabel>
                      <Components.formEditInput
                        type="text"
                        id="city"
                        name="city"
                        onChange={handleChange}
                        value={values.city}
                        autoComplete="nope"
                      />
                    </>
                  )}

              {selectedOption === 'Avatar' && (
                    <>
              
                      
 
 <div>
 <Components.avatarEditTitle>Avatar Common League</Components.avatarEditTitle>
 <Components.avatar>
              <Components.avatarA href="#"> </Components.avatarA>
              <a href="#" className="icon">
                <Components.avatarImgEdit
                  src="../../../../public/icones/malenia.png"
                  alt="User Image"
                />
              </a>
            </Components.avatar>
 </div>
 
 <input 
        type="file" 
        accept="image/*" 
        id="avatar" 
       // onChange={handleImageChange} 
        style={{ display: 'none' }} // Esconde o input nativo
      />
      <Components.uploadImg htmlFor="avatar">
        Uploaded your avatar
      </Components.uploadImg>
                      
                      
           
                    </>
                  )}

{selectedOption === 'Language Preferences' && (
                    <>
                      <Components.formEditLabel htmlFor="login">Common League Language</Components.formEditLabel>
                      <Components.formEditInput
                        type="text"
                        id="login"
                        name="login"
                        onChange={handleChange}
                        value={values.login}
                      />

                      <Components.formEditLabel htmlFor="realName">League of Legends - Server</Components.formEditLabel>
                      <Components.formEditInput
                        type="text"
                        id="realName"
                        name="realName"
                        onChange={handleChange}
                        value={values.realName}
                      />

                      
                    </>
                  )}

{selectedOption === 'Account Detail' && (
                    <>
                      <Components.formEditLabel htmlFor="login">E-mail</Components.formEditLabel>
                      <Components.formEditInput
                        type="text"
                        id="login"
                        name="login"
                        onChange={handleChange}
                        value={values.login}
                      />

                      <Components.formEditLabel htmlFor="realName">Username</Components.formEditLabel>
                      <Components.formEditInput
                        type="text"
                        id="realName"
                        name="realName"
                        onChange={handleChange}
                        value={values.realName}
                      />

<Components.formEditLabel htmlFor="realName">Password</Components.formEditLabel>
                      <Components.formEditInput
                        type="text"
                        id="realName"
                        name="realName"
                        onChange={handleChange}
                        value={values.realName}
                      />

<Components.formEditLabel htmlFor="realName">New Password</Components.formEditLabel>
                      <Components.formEditInput
                        type="text"
                        id="realName"
                        name="realName"
                        onChange={handleChange}
                        value={values.realName}
                      />

<Components.formEditLabel htmlFor="realName">CPF</Components.formEditLabel>
                      <Components.formEditInput
                        type="text"
                        id="realName"
                        name="realName"
                        onChange={handleChange}
                        value={values.realName}
                      />
                      <Components.formEditLabel htmlFor="realName">Telefone</Components.formEditLabel>
                      <Components.formEditInput
                        type="text"
                        id="realName"
                        name="realName"
                        onChange={handleChange}
                        value={values.realName}
                      />

                      
                    </>
                  )}
{selectedOption === 'Riot Detail' && (
                    <>
                      <Components.formEditLabel htmlFor="login">Username Riot</Components.formEditLabel>
                      <Components.formEditInput
                        type="text"
                        id="login"
                        name="login"
                        onChange={handleChange}
                        value={values.login}
                      />

<Components.formEditLabel htmlFor="login">Tag</Components.formEditLabel>
                      <Components.formEditInput
                        type="text"
                        id="login"
                        name="login"
                        onChange={handleChange}
                        value={values.login}
                      />

<Components.formEditLabel htmlFor="login">Roles</Components.formEditLabel>
                      <Components.formEditInput
                        type="text"
                        id="login"
                        name="login"
                        onChange={handleChange}
                        value={values.login}
                      />

<Components.formEditLabel htmlFor="login">Servidor</Components.formEditLabel>
                      <Components.formEditInput
                        type="text"
                        id="login"
                        name="login"
                        onChange={handleChange}
                        value={values.login}
                      />


                      
                    </>
                  )}

                  <Components.buttonSave className="button-entrar" type="submit">Save</Components.buttonSave>
                  <Components.buttonCancel className="button-cadastro" type="button">Cancel</Components.buttonCancel>
                </Components.formEditProfile>
              )}
            </Formik>
          </Components.UserFormEditBanner>
        </Components.Banner>

        <EstilosGlobais />
      </Backgroundgradient>
    </Components.Main>
  );
};

export default App;
