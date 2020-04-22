import React from "react"
import { ProjectContainer, ProjectTitle, ProjectDuration, ProjectBody, ProjectStack, ProjectStackList, ProjectStackWithContribution, ProjectLink } from "./style"
import { IoIosArrowForward } from "react-icons/io"
import moment from "moment"

interface Props {
  project: ResourceProject;
}
interface State {}
export default class ProjectItem extends React.Component<Props,State>{
  parseStringWithLink( string: string ){
    const regexp = /(\(##).*(##\))/g
    return (
      <p dangerouslySetInnerHTML={
        {
          __html: string.replace( regexp, ( url: string ) => {
            url = url.replace( "(##", "" ).replace( "##)", "" )
            return `<a href=${url} target='_blank' rel="noopener noreferrer"></a>`
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
      <ProjectContainer>
        <ProjectTitle>{this.props.project.title}</ProjectTitle>
        <ProjectLink href={this.props.project.link} target="_blank" rel="noopener noreferrer">
          <IoIosArrowForward />
        </ProjectLink>
        <ProjectDuration>{this.parseDuration( this.props.project.duration )}</ProjectDuration>
        <ProjectStackList>
          {Object.entries( this.props.project.jobs )
            .filter( ([ job, amount ]: [ string, number ]) => amount > 0 )
            .map( ([ job, amount ]: [ string, number ]) => (
              <ProjectStackWithContribution amount={amount} key={job}>
                <span>{job} {amount*100}%</span>
                <span className="contributionBar"></span>
              </ProjectStackWithContribution>
            ))
          }
          {this.props.project.stacks.map( stack => <ProjectStack key={stack}>{stack}</ProjectStack> )}
        </ProjectStackList>
        <ProjectBody>
          {this.parseStringWithLink( this.props.project.details )}
        </ProjectBody>
      </ProjectContainer>
    )
  }
}