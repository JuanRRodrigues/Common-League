import styled from 'styled-components';

export const avatar = styled.div`
position: relative;
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
    width: 200%;
    height: 200%;
    border-radius: 10%;

`;

export const avatarA = styled.a`
position: absolute;
    color: #ffffff;
    font-size: 1.8rem;
    
    
`;

export const span = styled.span`
    position: relative;
    color: #a5a5a5;
    font-size: 1rem;
    left: 24.6%;
    bottom: 60%;

`;

export const userName = styled.span`
    position: relative;
    color: #ffffff;
    font-size: 3rem;
    left: 34%;
    bottom: 70%;

`;
export const span1 = styled.a`
    position: relative ;
    left: 50%; 
    bottom: 82%;
    color: #ffffff;
    font-size: 2rem;

`;

export const LevelUserBanner = styled.span`
    bottom: 75%;
    position: relative;
    padding-left: 34%; 
    color: #ffffff;
    font-size: 1rem;

`;
export const span2 = styled.span`
    top: 10%;
    position: absolute;
    padding-left: 34%; 
    color: #ffffff;
    font-size: 1rem;

`;

export const avatarSpan = styled.span`
    top: 10%;
    position: absolute;
    padding-left: 33%; 
    color: black;
    font-size: 4rem;

`;

export const avatarEditProfileSpan = styled.span`
    top: 40%;
    position: relative;
    padding-left: 12.2%; 
    color: white;
    font-size: 1rem;
`;

export const avatarUser = styled.section`
position: absolute;
    display: flex;
    bottom: 500px;
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
  background-color: none;
  padding: top;
  height: 40%;
  border: 1px solid white;


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

export const sideBanner = styled.section`
  position: relative;
  width: 35%;
  left: 1150px;
  bottom: 283%;
  background-color: white;
  border: 1px solid white;
  background: none;
  color: white;

  transition: 1s;
  flex: 1;
  max-height: 400vh; 
  scrollbar-width: none; 
  -ms-overflow-style: none; 

  .active {
    position: relative;
    width: 93%;
    transition: 1s;
  }
`;
export const historicBanner = styled.section`
  position: relative;
  width: 50%;
  //bottom: 800px;
  left: 2.5%;
  height: 50%;
  padding-top: 2%;
  display: flex;
  background: none;
  color: white;
  text-align: center;
  transition: 1s;
  flex-direction: column; /* Alinhamento em coluna */
 
  max-height: 100vh;
  scrollbar-width: none;
  -ms-overflow-style: none; 

  &.active {
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

export const verificado = styled.button`
   position: relative;
   bottom: 5%;
   right: 65%;
   background-color: #00a2ff;
   color: #ffffff;
   border-radius: 5px;
   font-size: 1rem;
   border: none;
`;

export const editProfile = styled.button`
  position: relative;
  bottom: 70%;
  right: 41%;
  background-color: rgba(137, 137, 138, 0.2);
  color: white;
  font-size: 1.5rem;
  border: none;
  cursor: pointer; 

  
  &:hover {
    background-color: rgba(137, 137, 138, 0.5); 
  }
`;

export const teamOne = styled.div`
position: absolute;
  display: flex;
  flex-direction: column; 
  gap: 10px;

  align-items: center;
 

`;

export const player = styled.div`
  position: relative;


  display: flex;
  width: 500px;

  align-items: center;

  background-color: rgba(39, 41, 165, 0.2); /* Cor de fundo do input */

  color: #cccccc;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;
export const player2 = styled.div`
  position: relative;
  background-color: rgba(148, 34, 34, 0.2); /* Cor de fundo do input */
  color: #dfdfdf;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  width: 500px;
  align-items: center;
`;


export const imgplayer = styled.img`
position: relative;
 height: 50px;
 width: 50px;
`;
export const imgSpellOneTeamOne = styled.img`
 height: 25px;
 width: 25px;
`;
export const spellsDiv = styled.div`
  top: 50px;
  display: flex;
  flex-direction: column; 
`;

export const spellsDivTwo = styled.div`
position: relative;
  display: flex;
  flex-direction: column; 
  left: 425px;
`;

export const imgSpellTwoTeamTwo = styled.img`
position: relative;
 height: 25px;
 width: 25px;
`;


export const imgText = styled.a`
    font-size: 20px;
`;

export const kdaText1 = styled.a`
    position: absolute;
    font-size: 20px;
    left: 40%;
`;
export const kdaText2 = styled.a`
    position: absolute;
    font-size: 20px;
    left: 65%;
`;

export const imgTextOne = styled.a`
    position: relative;
    font-size: 20px;
    
`;

export const danoText = styled.a`
    position: relative;
    font-size: 20px;
    left: 35%;
    
`;

export const csText = styled.a`
    position: relative;
    font-size: 20px;
    left: 40%;
    
`;
export const teamTwo = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column; 
  gap: 10px;
  padding-left: 580px;
  align-items: center;
`;

export const imgplayerTwo = styled.img`
position: relative;
 height: 50px;
 width: 50px;
 left: 425px;
 
`;

export const textElo = styled.div`
    position: relative;
    font-size: 16px;
    color: #bdbdbd;
    
    
    
`;

export const textRank = styled.a`
    position: relative;
    font-size: 16px;
    left: 20px;
    color: #ffbb00;
   
    
`;
export const tagElo = styled.div`
    position: relative;
    font-size: 16px;
 
    color: #ffbb00;
`;
export const textRankA = styled.a`
    position: relative;
    font-size: 16px;
    padding-left: 38px;
    background-color: none;    
`;

export const tagEloinfo = styled.div`
    position: relative;
    font-size: 16px;
    left: 10px;
    list-style-type: none;
    padding: 5px;
    gap: 20px;
    width: 100%;
    color: #aaaaaa;
    display: flex;
`;

export const tagEloinfoGold = styled.li`
    position: relative;
    font-size: 16px;
    list-style-type: none;

    gap: 20px;
    width: 100%;
    color: #ffc400;
    display: flex;
`;

export const tagEloinfoDiamond = styled.li`
    position: relative;
    font-size: 16px;
    list-style-type: none;
    gap: 20px;
    width: 100%;
    color: #2f90df;
    display: flex;
`;

export const tagEloinfoGrandMaster = styled.li`
    position: relative;
    font-size: 16px;
    list-style-type: none;
    gap: 20px;
    width: 100%;
    color: #e7382c;
    display: flex;
`;
export const teams1Img = styled.img`
  position: relative;
    width: 80%;
    height: 80%;
    border-radius: 10%;

`;



export const sideBarImg = styled.img`
    position: relative;
    width: 100%;
    height: 100%;
    padding: 10px;
    padding-top: 30px;
    border-radius: 100%;

`;

export const sideBarTemaName = styled.h3`
position: relative;
bottom: 30px;
 font-size: 1rem;
`;

export const sideBarTemaName2 = styled.h3`
position: relative;
padding: 10px;
right: 30%;
color: orange;
 font-size: 1rem;
`;

export const sideBarImgRiot = styled.img`
  position: relative;
    width: 40%;
    height: 40%;
    border-radius: 100%;
    right: 26%;

`;

export const sideBarUserRiot = styled.div`
  position: relative;
  padding-top: 10px;
  display: flex;
  align-items: center; 
  right: 25px;
  border-radius: 10%;
 

`;

export const sideBarUserRiotText = styled.h3`
position: absolute;
left: 40%;
 font-size: 1rem;
`;



export const teams2Img = styled.img`
  width: 100px; 
  height: auto;
  margin-right: 10px; 
`;
