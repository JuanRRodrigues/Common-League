import React from 'react';
import { styled } from "styled-components";
import EstilosGlobais from "../componentes/GlobaStyle";
import * as Components from '../componentes/Login/Components';
import http from "../http";
import { Navigate, useNavigate } from "react-router-dom";
import { Formik, FormikHelpers } from "formik";
import * as Yup from 'yup';

// Definindo os tipos dos valores do formulário
interface FormValues {
  login: string;
  fullName: string;
  username: string;
  password: string;
  confirmPassword: string;
}

const Backgroundgradient = styled.div`
  background: linear-gradient(174.61deg, #141d26 4.16%, #1a2633 48%, #151515 96.76%);
  width: 100%;
  min-height: 100vh;
`;

const validationSchema = Yup.object().shape({
  login: Yup.string().email('Email inválido').required('Email é obrigatório'),
  fullName: Yup.string().required('Nome completo é obrigatório'),
  username: Yup.string().required('Username é obrigatório'),
  password: Yup.string().required('Senha é obrigatória'),
  confirmPassword: Yup.string()
    .required('Confirmação de senha é obrigatória')
    .oneOf([Yup.ref('password')], 'As senhas devem coincidir'),
});

const ErrorMessageStyled = styled.div`
  color: red;
  font-size: 12px;
`;

const App: React.FC = () => {
  const navigate = useNavigate();
  const [signIn, toggle] = React.useState(true);

  const handleFormSubmit = (values: FormValues, actions: FormikHelpers<FormValues>) => {
    http.post('auth/login', values, {})
      .then(response => {
        sessionStorage.removeItem('token');
        sessionStorage.setItem('token', response.data.token);
        localStorage.setItem('login', values.login);
        console.log(response.data);
        actions.resetForm();
        navigate('/');
      })
      .catch(error => {
        console.error('Error', error);
      });
  };

  return (
    <Backgroundgradient>
      <EstilosGlobais />
      <Formik
        initialValues={{
          login: '',
          fullName: '',
          username: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ errors, touched, handleChange, handleBlur, handleSubmit, values }) => (
          <Components.SignUpContainer $signinIn={signIn}>
            <Components.Form onSubmit={handleSubmit}>
              <Components.Title>Create Account</Components.Title>

              <Components.Input 
                type="text" 
                placeholder="Username"
                name="username" 
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessageStyled>{errors.username && touched.username && errors.username}</ErrorMessageStyled>

              <Components.Input 
                type="text" 
                name="fullName" 
                placeholder="Full Name"
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessageStyled>{errors.fullName && touched.fullName && errors.fullName}</ErrorMessageStyled>

              <Components.Input 
                type="text" 
                name="login" 
                placeholder="Email"
                value={values.login}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessageStyled>{errors.login && touched.login && errors.login}</ErrorMessageStyled>

              <Components.Input 
                type="password" 
                name="password" 
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessageStyled>{errors.password && touched.password && errors.password}</ErrorMessageStyled>

              <Components.Input 
                type="password" 
                name="confirmPassword" 
                placeholder="Retry Password"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessageStyled>{errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}</ErrorMessageStyled>

              <Components.Button type="submit">Sign Up</Components.Button>
            </Components.Form>
          </Components.SignUpContainer>
        )}
      </Formik>

      <Formik
        initialValues={{
          login: '',
          fullName: '',
          username: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ errors, touched, handleChange, handleBlur, handleSubmit, values }) => (
          <Components.SignInContainer $signinIn={signIn}>
            <Components.Form onSubmit={handleSubmit}>
              <Components.Title>Sign In</Components.Title>

              <Components.Input 
                type="text" 
                name="login" 
                placeholder="Username"
                value={values.login}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessageStyled>{errors.login && touched.login && errors.login}</ErrorMessageStyled>

              <Components.Input 
                type="password" 
                name="password" 
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessageStyled>{errors.password && touched.password && errors.password}</ErrorMessageStyled>

              <Components.Anchor href="#">Forgot Your Password?</Components.Anchor>
              <Components.Button type="submit">Sign In</Components.Button>
            </Components.Form>
          </Components.SignInContainer>
        )}
      </Formik>

      <Components.OverlayContainer $signinIn={signIn}>
        <Components.Overlay $signinIn={signIn}>
          <Components.LeftOverlayPanel $signinIn={signIn}>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>To keep connected with us please login with your personal info</Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>Sign In</Components.GhostButton>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel $signinIn={signIn}>
            <Components.Title>Welcome, Friend!</Components.Title>
            <Components.Paragraph>Enter your personal details and start your journey with us</Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>Sign Up</Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Backgroundgradient>
  );
};

export default App;
