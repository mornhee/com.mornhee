import React from "react"
import { ItemDummyContainer, ItemTitle, ItemDuration, ItemBody, ItemStack, ItemStackList } from "./style"

interface Props {}
interface State {}
export default class ProjectDummyItem extends React.Component<Props,State>{
  constructor( props: Props ){
    super( props )
    this.state = {}
  }
  render(){
    return (
      <ItemDummyContainer>
        <ItemTitle />
        <ItemDuration />
        <ItemStackList>
          <ItemStack/><ItemStack/><ItemStack/><ItemStack/>
        </ItemStackList>
        <ItemBody />
      </ItemDummyContainer>
    )
  }
}