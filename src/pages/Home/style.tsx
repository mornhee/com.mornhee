import styled from "styled-components"
import { UtilSquare, UtilContainer, Chip, ChipList } from "../../utils/GlobalStyle"

export const SectionProfile = styled.section`
  ${UtilContainer(`54rem`)}
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
  background-color: rgb(${props=>props.theme.color.content});
  border-radius: 100%;
`
export const ProfileDisplayName = styled.div`
  margin-top: 0.5rem;
  font-weight: bold;
  font-size: 1.5rem;
`
export const ProfileJob = styled.div``
export const ProfileIntroduction = styled.p`
  margin: 1.5rem 0 1rem 0;
`

export const StackList = styled( ChipList )`
  &&&{
    font-size: 1.33rem;
    margin-bottom: 0;
    li{
      margin: 0 0.25em;
    }
  }
`
export const StackItem = styled( Chip )<{ active?: boolean }>`
  cursor: pointer;
  overflow: hidden;
  &&&{
    ${props=>props.active && `
      background-color: rgb(${props.theme.color.primary});
      color: rgb(255,255,255);
      cursor: default;
    `}
  }
`
