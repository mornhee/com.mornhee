import styled from "styled-components"
import { UtilAbsolute, UtilDarkLayer } from "../../utils/GlobalStyle"

export const Container = styled.div`
  ${UtilAbsolute('Right')}
  width: 100%;
  max-width: 24rem;
  background-color: rgb(${props => props.theme.color.background});
  overflow: auto;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
`
export const Shadow = styled.div`
  ${UtilDarkLayer()}
  &.enter > ${Container}{         transform: translateX(100%); } 
  &.enter-active > ${Container}{  transform: translateX(0%); } 
  &.appear > ${Container}{        transform: translateX(100%); } 
  &.appear-active > ${Container}{ transform: translateX(0%); } 
  &.exit > ${Container}{          transform: translateX(0%); } 
  &.exit-active > ${Container}{   transform: translateX(100%); } 
  &.exit-done > ${Container}{     transform: translateX(100%); } 
  z-index: 1000;
`