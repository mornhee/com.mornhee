import styled, { keyframes } from "styled-components"
import { UtilAbsolute, Chip, ChipList } from "../../utils/GlobalStyle"

// LIST
export const List = styled.ul``
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
    color: rgb(${props=>props.theme.color.primary});
    font-weight: bold;
  }
`
// ITEM
export const ProjectContainer = styled.article`
  padding: 1.5rem 2rem;
  border-radius: 0.5rem;
  background-color: rgba(${props=>props.theme.color.background},1);
  box-shadow: 0 .5rem 2rem 1rem rgba(0,0,0,0.05), 
              0 .25rem 1rem 0 rgba(0,0,0,0.05), 
              0 0 1px 0 rgba(0,0,0,0.1);
  line-height: 2;
`
export const ProjectTitle = styled.div`
  display: flex;
  font-weight: bold;
`
export const ProjectLink = styled.a`
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
export const ProjectDuration = styled.div`
  font-size: 0.75rem;
`
export const ProjectBody = styled.div`
  a{
    font-size: 0.75rem;
    font-weight: bold;
    vertical-align: super;
    color: rgba(${props=>props.theme.color.primary},1);
  }
`

export const ProjectStack = styled( Chip )``
export const ProjectStackWithContribution = styled( Chip )<{ amount: number }>`
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
export const ProjectStackList = styled( ChipList )``

// ITEM DUMMY
const Blink = keyframes`
  0%{
    opacity: 1;
  }
  50%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`
export const ProjectDummyContainer = styled( ProjectContainer )`
  color: rgba(${props => props.theme.color.content},0.1);
  ${ProjectTitle},${ProjectDuration},${ProjectStack},${ProjectBody}{
    animation-name: ${Blink};
    animation-duration: 2s;
    animation-iteration-count: infinite; 
  }
  ${ProjectTitle}{
    width: 6rem;
    height: 1.75rem;
    background-color: rgba(${props => props.theme.color.content},0.1);
  }
  ${ProjectDuration}{
    width: 8rem;
    height: 0.5rem;
    margin-top: 0.5rem;
    background-color: rgba(${props => props.theme.color.content},0.1);
  }
  ${ProjectStack}{
    width: 4rem;
    height: 1rem;
  }
  ${ProjectBody}{
    height: 3.5rem;
    background-color: rgba(${props => props.theme.color.content},0.1);
  }
`