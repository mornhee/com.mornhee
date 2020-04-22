import React from "react"
import { Shadow, Container } from "./style"
import { CSSTransition } from "react-transition-group"

interface Props {
  children: any;
  visible: boolean;
  onClose(): void;
}
interface State {
  duration: number;
  exists: boolean;
}
export default class Hamburger extends React.Component<Props,State>{
  ShadowRef!: React.RefObject<HTMLDivElement>
  ContainerRef!: React.RefObject<HTMLDivElement>
  constructor( props: Props ){
    super( props )
    this.state = {
      duration: 300,
      exists: false
    }
    this.ShadowRef = React.createRef()
    this.ContainerRef = React.createRef()
  }
  blockShadowClick( e: React.MouseEvent ){
    e.stopPropagation()
  }
  componentDidMount(){
    window.addEventListener( "keydown", ( e: KeyboardEvent ) => {
      if( e.code === "Escape" ){
        this.props.onClose()
      }
    })
  }
  componentDidUpdate( prevProps: Props, prevState: State ){
    if( prevProps.visible !== this.props.visible ){
      setTimeout(() => {
        this.setState({ exists: this.props.visible })
      }, this.props.visible ? 0 : this.state.duration )
    }
  }
  render(){
    if( !this.state.exists ) return null;
    return (
      <CSSTransition in={this.props.visible} timeout={this.state.duration} appear>
        <Shadow onClick={this.props.onClose} ref={this.ShadowRef} style={{ transition: `${this.state.duration}ms opacity` }}>
          <Container onClick={this.blockShadowClick} ref={this.ContainerRef} style={{ 
            transition: `${this.state.duration}ms transform`
          }}>
            {this.props.children}
          </Container>
        </Shadow>
      </CSSTransition>
    )
  }
}