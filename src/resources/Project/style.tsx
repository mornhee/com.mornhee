import styled, { keyframes } from "styled-components"
import { UtilAbsolute, Card, Chip, ChipList } from "../../utils/GlobalStyle"

// LIST
export const ListContainer = styled.ul``
export const ListItem = styled.li`
  margin-bottom: 1rem;
  &:last-of-type{
    margin-bottom: 0;
  }
`
export const ListEmpty = styled.div`
  text-align: center;
  color: rgba(${props=>props.theme.color.content},0.5);
`
export const ListCount = styled.div`
  margin-bottom: 1rem;
  strong{
    color: rgba(${props=>props.theme.color.primary},1);
    font-weight: bold;
  }
`
// ITEM
export const ItemContainer = styled( Card )`
  padding: 1.5rem 2rem;
  line-height: 2;
`
export const ItemTitle = styled.div`
  display: flex;
  font-weight: bold;
`
export const ItemLink = styled.a`
  margin-left: auto;
  font-weight: normal;
  color: rgba(${props=>props.theme.color.primary},1);
  &:before{
    ${UtilAbsolute()}
    content: "";
    top: -0.25rem;
    left: -1rem;
    right: -1rem;
    bottom: -0.25rem;
    border-radius: ${props=>props.theme.radius}px;
    background-color: rgba(${props=>props.theme.color.primary},0.1);
    opacity: 0;
    transform: scale(0.75);
    transition: .2s opacity, .2s transform;
  }
  &:hover{
    &:before{
      opacity: 1;
      transform: scale(1);
    }
  }
`
export const ItemDuration = styled.div`
  font-size: 0.75rem;
`
export const ItemBody = styled.div`
  margin-top: 0.5rem;
  a{
    font-size: 0.75rem;
    font-weight: bold;
    vertical-align: super;
    color: rgba(${props=>props.theme.color.primary},1);
  }
`

export const ItemStack = styled( Chip )``
export const ItemStackWithContribution = styled( Chip )<{ amount: number }>`
  &&&{
    background-color: transparent;
    font-weight: bold;
  }
  .contributionBar{
    ${UtilAbsolute( 'Left' )}
    width: ${props => props.amount && props.amount*100}%;
    border-radius: ${props => props.theme.radius}px;
    background-color: rgba( ${props => props.theme.color.content}, 0.1 );
  }
`
export const ItemStackList = styled( ChipList )`
  margin-top: 0.5rem;
`

// ITEM DUMMY
const Blink = keyframes`
  0%{   opacity: 1; }
  50%{  opacity: 0; }
  100%{ opacity: 1; }
`
export const ItemDummyContainer = styled( ItemContainer )`
  ${ItemTitle},
  ${ItemDuration},
  ${ItemStack},
  ${ItemBody}{
    animation-name: ${Blink};
    animation-duration: 2s;
    animation-iteration-count: infinite; 
  }
  ${ItemTitle}{
    width: 6rem;
    height: 1.75rem;
    background-color: rgba(${props => props.theme.color.content},0.1);
    border-radius: ${props => props.theme.radius}px;
  }
  ${ItemDuration}{
    width: 8rem;
    height: 0.5rem;
    margin-top: 0.5rem;
    background-color: rgba(${props => props.theme.color.content},0.1);
    border-radius: ${props => props.theme.radius}px;
  }
  ${ItemStack}{
    width: 4rem;
    height: 1.5rem;
  }
  ${ItemBody}{
    height: 3.5rem;
    background-color: rgba(${props => props.theme.color.content},0.1);
    border-radius: ${props => props.theme.radius}px;
  }
`