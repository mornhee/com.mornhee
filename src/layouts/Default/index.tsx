import React from "react"
import { LayoutWrapper, LayoutHeader, LayoutContainer, LayoutFooter } from "./style"
import { AppTitle } from "../../utils/GlobalStyle"

interface Props {
  children: any
}
interface State {}
export default class LayoutDefault extends React.Component<Props,State>{
  render(){
    return (
      <LayoutWrapper>
        <LayoutHeader>
          <AppTitle hide>mornhee, make something</AppTitle>
        </LayoutHeader>
        <LayoutContainer>{this.props.children}</LayoutContainer>
        <LayoutFooter>
          ©mornhee. All rights reserved.<br/>
          <a href="https://github.com/mornhee" target="_blank" rel="noopener noreferrer">Github repository</a> · <a href="mailto:mornhee@gmail.com" target="_blank" rel="noopener noreferrer">mornhee@gmail.com</a>
        </LayoutFooter>
      </LayoutWrapper>
    )
  }
}