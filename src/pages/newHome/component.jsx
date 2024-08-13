import styled from 'styled-components';

export const main = styled.main`

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
  background: gray;


`;

export const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

export const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

export const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Banner = styled.section`
    position: relative;
    width: 85%;
    right: 10px;
    top: 15px;
    height: 95%;
    border-radius: 30px;
    border-radius: 30px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background: white;
    box-shadow: -5px -5px 15px rgba(255, 255, 255, 0.1),
    5px 5px 15px rgba(0, 0, 0, 0.35);
    transition: 1s;
`;



