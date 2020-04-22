import styled, { createGlobalStyle, css } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html,body,header,footer,main,article,section,div,
  h1,h2,h3,h4,h5,p,span,strong,i,a,
  ul,ol,dl,dt,dd,li,
  input,select,button,textarea,
  canvas,iframe,img,svg{
    position: relative;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    border: 0;
    outline: 0;
    background: none;
    font-size: inherit;
    font-weight: inherit;
    font-family: inherit;
    line-height: inherit;
    text-decoration: inherit;
    letter-spacing: inherit;
    list-style: none;
    color: inherit;
    -webkit-appearance: none;
    -webkit-font-smoothing antialiased;
  }
  html{
    font-size: 12px;
    font-family: "Noto Sans KR", sans-serif;
    line-height: 2;
    font-weight: 400;
    word-break: keep-all;
    background-color: rgb(${props=>props.theme.color.background});
    color: rgb(${props=>props.theme.color.content});
  }
  body{
    font-size: 1rem;
  }
  button, select{
    cursor: pointer;
  }
`

export const AppTitle = styled.h1<{ hide?: boolean }>`
  ${ props => props.hide && `display: none;` }
`
export const Page = styled.div``
export const PageTitle = styled.h2<{ hide?: boolean }>`
  ${ props => props.hide && `display: none;` }
  margin-left: -.05em;
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.5;
`
export const Section = styled.section``
export const SectionTitle = styled.h3<{ hide?: boolean }>`
  ${ props => props.hide && `display: none;` }
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
`
export const SectionSubTitle = styled.h4<{ hide?: boolean }>`
  ${ props => props.hide && `display: none;` }
  font-weight: bold;
`
export const Resource = styled.article``
export const ChipList = styled.ul`
  line-height: 2;
  margin: 0.5rem 0;
  li{
    display: inline-block;
    margin-right: 0.25rem;
  }
`
export const Chip = styled.li`
  padding: 0 0.5rem;
  border-radius: ${props => props.theme.radius}px;
  background-color: rgba( ${props => props.theme.color.content}, 0.1 );
  color: rgba( ${props => props.theme.color.content}, 0.75 );
  font-size: 0.75rem;
`
export const Card = styled.div``




export const UtilAbsolute = ( position?: string ) => css`
  position: absolute;
  margin: auto;
  ${ css`
    ${ ( !position || ( position && position.indexOf( 'Bottom' ) < 0 ) ) && `top: 0;` }
    ${ ( !position || ( position && position.indexOf( 'Right' ) < 0 ) ) && `left: 0;` }
    ${ ( !position || ( position && position.indexOf( 'Left' ) < 0 ) ) && `right: 0;` }
    ${ ( !position || ( position && position.indexOf( 'Top' ) < 0 ) ) && `bottom: 0;` }
  ` }
`
export const UtilFixed = ( position?: string ) => css`
  position: fixed;
  margin: auto;
  ${ css`
    ${ ( !position || ( position && position.indexOf( 'Bottom' ) < 0 ) ) && `top: 0;` }
    ${ ( !position || ( position && position.indexOf( 'Right' ) < 0 ) ) && `left: 0;` }
    ${ ( !position || ( position && position.indexOf( 'Left' ) < 0 ) ) && `right: 0;` }
    ${ ( !position || ( position && position.indexOf( 'Top' ) < 0 ) ) && `bottom: 0;` }
  ` }
`
export const UtilSquare = ( size: string ) => css`
  width: ${size};
  height: ${size};
  line-height: ${size};
  text-align: center;
`
export const UtilFixRatio = ( h: number, v: number ) => css`
  width: 100%;
  padding-top: ${100*v/h}%;
  > :first-of-type{
    ${UtilAbsolute()}
  }
`
export const UtilContainer = ( width?: string ) => css`
  width: 100%;
  max-width: ${width};
  margin-left: auto;
  margin-right: auto;
`
export const UtilDarkLayer = () => css`
  ${UtilFixed()}
  background-color: rgba(0,0,0,0.2);
`


export default GlobalStyle