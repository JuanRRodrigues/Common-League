import { styled } from "styled-components"
import EstilosGlobais from "../componentes/GlobaStyle";
import Login from "../componentes/Login";
import * as Components from '../componentes/Login/Components'
import React from 'react';

const App = () => {
  const [signIn, toggle] = React.useState(true);
  return (
    <Components.Container>
      <Components.SignUpContainer signinIn={signIn}>
        <Components.Form>
            <Components.Title>Create Account</Components.Title>
            <Components.Input type="text" placeholder="Name" />
            <Components.Input type="text" placeholder="Email" />
            <Components.Input type="text" placeholder="Password" />
            <Components.Button>Sign Up</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>

      <Components.SignInContainer signinIn={signIn}>
          <Components.Form>
          <Components.Title>Sign In</Components.Title>
            <Components.Input type="text" placeholder="Name" />
            <Components.Input type="password" placeholder="Password" />
            <Components.Anchor href="#">Forgot Your Password</Components.Anchor>
            <Components.Button>Sign In</Components.Button>
          </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signinIn={signIn}>
          <Components.Overlay signinIn={signIn}>

            <Components.LeftOverlayPanel signinIn={signIn}>
              <Components.Title>Welcome Back!</Components.Title>
              <Components.Paragraph>
                To keep connected with us please login with your personal info
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(true)}>
                  Sign In
              </Components.GhostButton>
            </Components.LeftOverlayPanel>

                <Components.RightOverlayPanel  signinIn={signIn}>
                  <Components.Title>Hello, Friend!</Components.Title>
                  <Components.Paragraph> Enter Your Personal Details and Start Journey With Us </Components.Paragraph>
                      <Components.GhostButton onClick={() => toggle(false)}>
                        Sign Up
                      </Components.GhostButton>
                </Components.RightOverlayPanel>
          </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  )
}

export default App;
