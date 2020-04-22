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
  margin-top: 1rem;
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
  margin-bottom: 0;
`
export const StackItem = styled( Chip )<{ active?: boolean }>`
  &&&{
    background-color: rgb(${props=>props.active && props.theme.color.primary});
    color: rgb(${props=>props.active && props.theme.color.background});
    cursor: ${props=>props.active ? `default` : `pointer`};
  }
`
