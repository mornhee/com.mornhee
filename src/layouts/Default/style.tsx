import styled from "styled-components"

export const LayoutWrapper = styled.div`
  padding: 15vh 1.5rem;
`
export const LayoutHeader = styled.header``
export const LayoutContainer = styled.main``
export const LayoutFooter = styled.footer`
  margin-top: 4rem;
  text-align: center;
  a{
    color: rgba(${props => props.theme.color.primary},1);
  }
`