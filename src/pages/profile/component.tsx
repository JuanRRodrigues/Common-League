import styled from 'styled-components';

export const avatar = styled.div`
    width: 150px;
    height: 50px;
    padding: 6% 13%;
    display: flex;
    align-items: center;
    gap: 1px;
    border-radius: 10px;
`;

export const optionDiv = styled.div`
    color: white;
    gap: 15px;
`;

export const optionLi = styled.li`
    padding: 20px;
    list-style-type: none;
    cursor: pointer; /* Para indicar que é interativo */

    /* Estilo padrão */
    background-color: transparent; /* Cor de fundo padrão */
    color: #a09f9f; /* Cor do texto padrão */

    /* Estilo de hover */
    &:hover {
        background-color: rgba(255, 255, 255, 0.2); /* Cor de fundo ao passar o mouse */
        color: #fafafa; /* Cor do texto ao passar o mouse */
        transition: background-color 0.3s ease; /* Transição suave */
    }
`;

export const avatarImg = styled.img`
    position: relative;
    width: 80%;
    height: 80%;
    border-radius: 10%;
    bottom: 44px;
    right: 150px;
`;

export const avatarA = styled.a`
    color: #ffffff;
    font-size: 1.8rem;
`;

export const avatarSpan = styled.span`
    top: 5%;
    position: absolute;
    padding-left: 12%; 
    color: white;
    font-size: 2rem;
`;

export const avatarEditProfileSpan = styled.span`
    top: 40%;
    position: absolute;
    padding-left: 12.2%; 
    color: white;
    font-size: 1rem;
`;

export const avatarUser = styled.section`
    display: flex;
    flex-direction: column;
`;

export const user = styled.section`
     display: flex;
     flex-direction: column;
`;

export const Section = styled.section`
  overflow: hidden;
  position: absolute;
  width: 100%;
  top: 100vh;
  padding: 0 30px;
  bottom: 0;
  opacity: 0;
  transition: opacity 1s ease-in-out, top 1s ease-in-out;
  transform-origin: bottom;
  z-index: 1000;

  &::-webkit-scrollbar {
    display: none;
  }

  &.active {
    top: 100px;
    height: auto;
    overflow-y: visible;
    opacity: 1;
  }
`;


export const Banner = styled.section`
  position: relative;
  width: 100%;
  right: 10px;
  top: 15px;
  height: 95%;
  border-radius: 30px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: linear-gradient(174.61deg, #141d26 4.16%, #1a2633 48%, #151515 96.76%);
  box-shadow: -5px -5px 15px rgba(143, 2, 2, 0.1), 5px 5px 15px rgba(167, 0, 0, 0.35);
  transition: 1s;
  flex: 1;
  overflow-y: auto; 
  max-height: 100vh; 
  scrollbar-width: none; 
  -ms-overflow-style: none; 

  .active {
    position: relative;
    width: 93%;
    transition: 1s;
  }
`;

export const UserBanner = styled.section`
  position: relative;
  width: 95%;
  left: 40px;
  top: 15%;
  height: 15%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #464342;

  transition: 1s;
  flex: 1;
  max-height: 100vh; 
  scrollbar-width: none; 
  -ms-overflow-style: none; 

  .active {
    position: relative;
    width: 93%;
    transition: 1s;
  }
`;

export const UserOptionsEditBanner = styled.section`
  position: relative;
  width: 20%;
  left: 0px;
  top: 0%;
  height: 300%;
  background-color: none;

  transition: 1s;
  flex: 1;
  max-height: 100vh; 
  scrollbar-width: none; 
  -ms-overflow-style: none; 

  .active {
    position: relative;
    width: 93%;
    transition: 1s;
  }
`;

export const UserFormEditBanner = styled.section`
  position: relative;
  width: 72%;
  left: 400px;
  top: 25%;
  height: 300%;
  background-color: #3d3a3a;

  transition: 1s;
  flex: 1;
  max-height: 100vh; 
  scrollbar-width: none; 
  -ms-overflow-style: none; 

  .active {
    position: relative;
    width: 93%;
    transition: 1s;
  }
`;

export const Main = styled.main`
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
  background: linear-gradient(174.61deg, #141d26 4.16%, #1a2633 48%, #151515 96.76%);
`;

export const formEditProfile = styled.form`
  display: flex;
  flex-direction: column; 
  gap: 10px; 
  max-width: 700px; 
  padding: 20px; 
  border-radius: 8px; 
  background-color: none; /* Isso pode ser alterado para uma cor de fundo, se desejado */


 

  button {
    padding: 10px; /* Espaçamento interno do botão */
    border: none; /* Remove a borda padrão */
    border-radius: 4px; /* Cantos arredondados do botão */
    background-color: #007bff; /* Cor de fundo do botão */
    color: white; /* Cor do texto do botão */
    cursor: pointer; /* Muda o cursor ao passar sobre o botão */
    font-size: 16px; /* Tamanho da fonte do botão */
    transition: background-color 0.3s; /* Transição suave na cor de fundo */
    
    &:hover {
      background-color: #0056b3; /* Cor de fundo ao passar o mouse */
    }
  }
`;

export const formEditInput = styled.input`
  background-color: rgba(24, 24, 24, 0.2); /* Cor de fundo do input */
  padding: 10px;
  color: #777575;
  border: 1px solid #222121;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box; /* Para incluir padding e borda no cálculo da largura */
`;

  export const formEditLabel = styled.input`
  font-weight: bold; 
  margin-bottom: 10px; 
`;