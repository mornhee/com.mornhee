import React from "react"
import { ProjectDummyContainer, ProjectTitle, ProjectDuration, ProjectBody, ProjectStack, ProjectStackList } from "./style"

interface Props {}
interface State {}
export default class ProjectDummyItem extends React.Component<Props,State>{
  render(){
    return (
      <ProjectDummyContainer>
        <ProjectTitle />
        <ProjectDuration />
        <ProjectStackList>
          <ProjectStack/><ProjectStack/><ProjectStack/><ProjectStack/>
        </ProjectStackList>
        <ProjectBody />
      </ProjectDummyContainer>
    )
  }
}