
import { styled } from "styled-components"
import SideBar from "../../componentes/BarSide";
import NavBar from "../../componentes/BarSide";
import * as Components from './component'
import Widget from "../../componentes/Widget"
const Backgroundgradient = styled.div`

`

const App = () => {

  return (
    <Backgroundgradient>
      <SideBar/>
      <Components.home>
          <NavBar/>
            <Components.widgets>
              <Widget type={"user"}/>
              <Widget type={"team"}/>
              <Widget type={"torneios"}/>
            </Components.widgets>
          <div>
        
          </div>
        </Components.home>
    </Backgroundgradient>
  )
}

export default App
