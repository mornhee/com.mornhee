import styled, { keyframes } from "styled-components"
import { UtilSquare, UtilContainer, Chip, ChipList } from "../../utils/GlobalStyle"

const spin = keyframes`
  0%{   transform: rotate( 0deg ); }
  50%{  transform: rotate( 180deg ); }
  100%{ transform: rotate( 360deg ); }
`

export const SectionProfile = styled.section`
  ${UtilContainer(`36rem`)}
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.75;
  text-align: center;
`
export const SectionWorks = styled.section`
  ${UtilContainer(`54rem`)}
  margin-top: 2rem;
`

export const ProfilePhoto = styled.img`
  ${UtilSquare(`8rem`)}
  border-radius: 100%;
  animation-name: ${spin};
  animation-duration: 4s;
  animation-timing-function: linear;
  animation-iteration-count: infinite; 
`
export const ProfileDisplayName = styled.div`
  margin-top: 0.5rem;
  font-weight: bold;
  font-size: 1.5rem;
`
export const ProfileJob = styled.div``
export const ProfileIntroduction = styled.p`
  margin-top: 1.5rem;
`

export const StackList = styled( ChipList )`
  &&&{
    font-size: 1.33rem;
    margin-top: 1.5rem;
    li{
      margin: 0 0.25em;
    }
  }
`
export const StackItem = styled( Chip )<{ active?: boolean }>`
  cursor: pointer;
  overflow: hidden;
  &&&{
    ${props => props.active && `
      background-color: rgba(${props.theme.color.primary},1);
      color: rgb(255,255,255);
      cursor: default;
    `}
  }
`
