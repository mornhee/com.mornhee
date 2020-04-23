import styled from "styled-components"
import { UtilAbsolute, UtilDarkLayer } from "../../utils/GlobalStyle"

export const Container = styled.div`
  ${UtilAbsolute('Right')}
  width: 100%;
  max-width: 24rem;
  background-color: rgba(${props => props.theme.color.background},1);
  overflow: auto;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
`
export const Shadow = styled.div`
  ${UtilDarkLayer()}
  &.enter{         opacity: 0; } 
  &.enter-active{  opacity: 1; } 
  &.appear{        opacity: 0; } 
  &.appear-active{ opacity: 1; } 
  &.exit{          opacity: 1; } 
  &.exit-active{   opacity: 0; } 
  &.exit-done{     opacity: 0; } 
  &.enter > ${Container}{         transform: translateX(100%); } 
  &.enter-active > ${Container}{  transform: translateX(0%); } 
  &.appear > ${Container}{        transform: translateX(100%); } 
  &.appear-active > ${Container}{ transform: translateX(0%); } 
  &.exit > ${Container}{          transform: translateX(0%); } 
  &.exit-active > ${Container}{   transform: translateX(100%); } 
  &.exit-done > ${Container}{     transform: translateX(100%); } 
  z-index: 1000;
`