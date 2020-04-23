import React from 'react';
import { ThemeProvider, DefaultTheme } from "styled-components"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import GlobalStyle, { ThemeToggle } from "./utils/GlobalStyle"
import { isBrowser } from "react-device-detect"
import Home from "./pages/Home"

const brightTheme = {
  content: "100,100,120",
  background: "255,255,255",
  primary: "130,100,255",
  secondary: "50,150,250"
}
const darkTheme = {
  content: "200,200,180",
  background: "50,50,50",
  primary: "130,100,250",
  secondary: "50,150,250"
}
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
        color: brightTheme,
        isBrowser
      }
    }
    this.toggleTheme = this.toggleTheme.bind( this )
  }
  toggleTheme(){
    this.setState({
      theme: {
        ...this.state.theme,
        color: this.state.theme.color === darkTheme ? brightTheme : darkTheme
      }
    })
  }
  render(){
    return (
      <ThemeProvider theme={this.state.theme}>
        <ThemeToggle type="button" onClick={this.toggleTheme}>&#x21b9;</ThemeToggle>
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