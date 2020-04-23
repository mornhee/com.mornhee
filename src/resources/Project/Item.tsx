import React from "react"
import { ItemContainer, ItemTitle, ItemDuration, ItemBody, ItemStack, ItemStackList, ItemStackWithContribution, ItemLink } from "./style"
import moment from "moment"

interface Props {
  project: ResourceProject;
}
interface State {}
export default class ProjectItem extends React.Component<Props,State>{
  constructor( props: Props ){
    super( props )
    this.state = {}
  }
  parseStringWithLink( string: string ){
    const regexp = /(\(##).*(##\))/g
    return (
      <p dangerouslySetInnerHTML={
        {
          __html: string.replace( regexp, ( url: string ) => {
            url = url.replace( "(##", "" ).replace( "##)", "" )
            return `<a href=${url} target='_blank' rel="noopener noreferrer">&#x2197;</a>`
          })        
        }
      } />
    )
  }
  parseDuration( duration: string[] ){
    return duration.map( d => moment( new Date( d ) ).format( "YYYY년 MM월" ) ).join( " ~ " )
  }
  render(){
    return (
      <ItemContainer as="article">
        <ItemTitle>{this.props.project.title}
          <ItemLink href={this.props.project.link} target="_blank" rel="noopener noreferrer">보기 &#x2192;</ItemLink>
        </ItemTitle>
        <ItemDuration>{this.parseDuration( this.props.project.duration )}</ItemDuration>
        <ItemStackList>
          {Object.entries( this.props.project.jobs )
            .filter( ([ job, amount ]: [ string, number ]) => amount > 0 )
            .map( ([ job, amount ]: [ string, number ]) => (
              <ItemStackWithContribution amount={amount} key={job}>
                <span>{job} {amount*100}%</span>
                <span className="contributionBar"></span>
              </ItemStackWithContribution>
            ))
          }
          {this.props.project.stacks.map( stack => <ItemStack key={stack}>{stack}</ItemStack> )}
        </ItemStackList>
        <ItemBody>{this.parseStringWithLink( this.props.project.details )}</ItemBody>
      </ItemContainer>
    )
  }
}