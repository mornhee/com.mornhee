import React from "react"
import LayoutDefault from "../../layouts/Default"
import { SectionProfile, SectionWorks, ProfilePhoto, ProfileDisplayName, ProfileJob, ProfileIntroduction, StackList, StackItem } from "./style"
import { ProjectItemList, ProjectStore } from "../../resources/Project"
import { observer } from "mobx-react"

interface Props {}
interface State {
  selectedFilter?: string
}
@observer
export default class Home extends React.Component<Props,State>{
  constructor( props: Props ){
    super( props )
    this.state = {
      selectedFilter: undefined
    }
  }
  shiftSelectedFilter( filter?: string ){
    if( this.state.selectedFilter !== filter && ( ProjectStore.Lists[ `home` ] && !ProjectStore.Lists[ `home` ].loading ) ){
      this.setState({ selectedFilter: filter })
    }
  }
  render(){
    return (
      <LayoutDefault>
        <SectionProfile>
          <ProfilePhoto src="/profile.jpg" alt="고양이가 입을 쩍 벌리고 있는 이미지" />
          <ProfileDisplayName>mornhee</ProfileDisplayName>
          <ProfileJob>FrontEnd Engineer</ProfileJob>
          <ProfileIntroduction>학부에서 그래픽 디자인을 공부했으며, 2015년부터 3년 간 프리랜스 웹 개발자로 활동. 2018년부터 1년 간 디지털 미디어 에이전시 themotif에서 프론트엔드 엔지니어로 근무한 뒤, 현재 구직 중. 고양이 두마리와 동거 중이고 밴드 음악에 관심이 많음.</ProfileIntroduction>
          <StackList>
            <StackItem onClick={() => this.shiftSelectedFilter( undefined )} active={this.state.selectedFilter===undefined}>All</StackItem>
            <StackItem onClick={() => this.shiftSelectedFilter(`Vue`)} active={this.state.selectedFilter===`Vue`}>Vue</StackItem>
            <StackItem onClick={() => this.shiftSelectedFilter(`Nuxt`)} active={this.state.selectedFilter===`Nuxt`}>Nuxt</StackItem>
            <StackItem onClick={() => this.shiftSelectedFilter(`React`)} active={this.state.selectedFilter===`React`}>React</StackItem>
            <StackItem onClick={() => this.shiftSelectedFilter(`Firebase`)} active={this.state.selectedFilter===`Firebase`}>Firebase</StackItem>
            <StackItem onClick={() => this.shiftSelectedFilter(`jQuery`)} active={this.state.selectedFilter===`jQuery`}>jQuery</StackItem>
            <StackItem onClick={() => this.shiftSelectedFilter(`PHP`)} active={this.state.selectedFilter===`PHP`}>PHP</StackItem>
            <StackItem onClick={() => this.shiftSelectedFilter(`CodeIgniter`)} active={this.state.selectedFilter===`CodeIgniter`}>CodeIgniter</StackItem>
            <StackItem onClick={() => this.shiftSelectedFilter(`Wordpress`)} active={this.state.selectedFilter===`Wordpress`}>Wordpress</StackItem>
          </StackList>
        </SectionProfile>
        <SectionWorks>
          <ProjectItemList listName="home" query={{ 
            where:   [ [ "stacks", "array-contains", this.state.selectedFilter ] ],
            orderBy: [ [ "duration", "desc" ] ] 
          }} />
        </SectionWorks>
      </LayoutDefault>
    )
  }
}