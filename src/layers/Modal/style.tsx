import styled from "styled-components"
import { UtilAbsolute, UtilFixed, UtilContainer, UtilSquare, UtilDarkLayer } from "../../utils/GlobalStyle"

export const Container = styled.div`
  ${UtilAbsolute()}
  ${UtilContainer(`560px`)}
  top: 5vw;
  background-color: rgba(${props => props.theme.color.background},1);
  border-top-right-radius: ${props => props.theme.radius*4}px;
  border-top-left-radius: ${props => props.theme.radius*4}px;
  padding-bottom: 6rem !important;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth; 
  overflow: auto;
`
export const Closer = styled.button`
  ${UtilFixed(`Bottom`)}
  ${UtilSquare(`3rem`)}
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background-color: rgba(${props => props.theme.color.background},1);
  bottom: 1.5rem;
  font-size: 2rem;
  z-index: 1001;
  box-shadow: 0 2rem 3rem 1rem rgba(0,0,0,0.1), 
              0 .5rem 1rem 0 rgba(0,0,0,0.1), 
              0 0 1px 0 rgba(0,0,0,0.15)
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
  &.enter ${Container}{         transform: translateY(100%); } 
  &.enter-active ${Container}{  transform: translateY(0%); } 
  &.appear ${Container}{        transform: translateY(100%); } 
  &.appear-active ${Container}{ transform: translateY(0%); } 
  &.exit ${Container}{          transform: translateY(0%); } 
  &.exit-active ${Container}{   transform: translateY(100%); } 
  &.exit-done ${Container}{     transform: translateY(100%); } 
  z-index: 1000;
`