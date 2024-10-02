import React from 'react';
import styled from 'styled-components';
import Titulo from '../Titulo';
import Populares from './Populares';
import Tags from './Tags';
import Imagem from './Imagens'; // Ensure this component accepts the correct props
import { Foto } from '../../data/types';
import { useTranslation } from 'react-i18next';
// Styled components
const GaleryContainer = styled.div`
    display: flex;
`;

const SecaoFluida = styled.section`
    flex-grow: 1;
`;

const ImagensContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`;



interface GaleriaPlayersProps {
    fotos: Foto[];
    aoFotoSelecionada: (foto: Foto) => void;
    aoAlternarFavorito: (foto: Foto) => void;
}

// Functional component
const GaleriaPlayers: React.FC<GaleriaPlayersProps> = ({ fotos = [], aoFotoSelecionada, aoAlternarFavorito }) => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng: string) => {
      i18n.changeLanguage(lng)
    }
    return (
        <>
            <Tags />
            <GaleryContainer>
                <SecaoFluida>
                    <Titulo>{t('Ongoing Championships')}</Titulo>
                    <ImagensContainer>
                        {fotos.map(foto => (
                            <Imagem 
                                aoZoomSolicitado={aoFotoSelecionada}
                                aoAlternarFavorito={aoAlternarFavorito}
                                key={foto.id} 
                                foto={foto} 
                            />
                        ))}
                    </ImagensContainer>
                </SecaoFluida>
                <Populares />
            </GaleryContainer>
        </>
    );
};

export default GaleriaPlayers;
