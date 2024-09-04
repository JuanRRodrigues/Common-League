import React, { useEffect, useState } from 'react';
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';
import http from '../../http';
import { useNavigate } from 'react-router-dom';
import CreateAutoComplete from '../optionTest';
import TeamService from '../../service/teamService copy';
import { toast } from 'react-toastify';
import Grid from '@mui/material/Grid';

const StyledForm = styled(FormikForm)`
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;

    label {
        display: block;
        margin-bottom: 10px;
        color: white;
        text-align: left;
        width: 100%;
    }

    input {
        width: 95%;
        padding: 8px;
        margin-bottom: 16px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    button {
        width: 100%;
        padding: 10px;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        margin: 8px auto;
    }

    .button-entrar {
        background-color: #007bff;
    }

    .button-cadastro {
        background-color: #28a745;
    }

    .error-message {
        color: red;
        margin-bottom: 10px;
    }

    .logo {
        width: 150px; /* Tamanho da logo */
        margin-bottom: 20px; /* Espaço entre a logo e o formulário */
        margin-right: 2%;
    }
`;

const ErrorMessageStyled = styled.div`
    color: red;
    font-size: 12px;
`;

export default function TeamsForm({ handleClose, row, option = 'add'}) {
    const ServiceTeam = new TeamService();
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const externalValue = 'Red Canids'; // Deve corresponder a uma das opções
    useEffect(() => {
        http.get('auth/' + localStorage.getItem('login'))
            .then(response => {
                setUserData(response.data); 
                localStorage.setItem('userId', response.data.id);
            })
            .catch(error => {
                console.log(error);
            });
    }, []); // Adiciona uma dependência vazia para garantir que o efeito só seja executado uma vez

    return (
        <Formik
            validateOnChange
            validateOnMount
            initialValues={option === 'add' ? {} : { ...row }}
            onSubmit={async (values, { setSubmitting }) => {
                values.dataCreated = new Date().toLocaleDateString('en-US');

                if (values.id > 0) {
                    ServiceTeam.put(values)
                        .then((response) => {
                            toast.success('O registro foi atualizado');
                        })
                        .catch((error) => {
                            toast.error('Ocorreu um erro ao atualizar o registro');
                        });
                }
                handleClose();
            }}
            validationSchema={Yup.object().shape({
                name: Yup.string().required('Nome do time é obrigatório'),
                game: Yup.string()
                    .oneOf(['League of Legends', 'Overwatch', 'Paladins'], 'Jogo inválido')
                    .test('is-lol', 'O jogo deve ser League of Legends', value => value === 'League of Legends')
                    .required('Jogo é obrigatório'),
            })}
        >
            {(props) => {
                const {
                    touched,
                    errors,
                    handleSubmit,
                    setFieldValue,
                    setTouched,
                } = props;

                return (
                    <StyledForm onSubmit={handleSubmit} noValidate>
                        <Grid justify="center" container spacing={3}>
                            <CreateAutoComplete
                                error={(errors.name && touched.name) && errors.name}
                                setTouched={setTouched}
                                name="team"
                                value={externalValue}
                                defaultValue={option === 'edit' ? row.name : ''}
                                label="Nome do Time"
                                setFieldValue={setFieldValue}
                            />
                        </Grid>
                        <button type="submit">Enviar</button>
                    </StyledForm>
                );
            }}
        </Formik>
    );
}
