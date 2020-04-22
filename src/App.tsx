import React from 'react';
import { ThemeProvider, DefaultTheme } from "styled-components"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import GlobalStyle from "./utils/GlobalStyle"

import Home from "./pages/Home"

interface Props {}
interface State {
  theme: DefaultTheme
}
export default class App extends React.Component<Props,State>{
  constructor( props: Props ){
    super( props )
    this.state = {
      theme: {
        radius: 3,
        color: {
          // content: "200,200,180",
          // background: "50,50,50",
          // primary: "130,100,250",
          // secondary: "50,150,250"
          content: "100,100,120",
          background: "255,255,255",
          primary: "130,100,255",
          secondary: "50,150,250"
        }
      }
    }
  }
  render(){
    return (
      <ThemeProvider theme={this.state.theme}>
        <Router>
          <Switch>
            <Route extact path="/" component={Home} />
          </Switch>
        </Router>
        <GlobalStyle />
      </ThemeProvider>
    )
  }
}