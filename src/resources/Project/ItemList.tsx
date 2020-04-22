import React from "react"
import { observer } from "mobx-react"
import { ProjectItem, ProjectDummyItem, ProjectStore } from "./index"
import { List, ListItem, ListEmpty, ListCount } from "./style"
interface Props {
  listName: string
  query: {
    where?: [ any, any, any ][]
    orderBy?: [ any, any ][]
  }
  clear?: boolean
}
interface State {
  mounted: boolean
}
@observer
export default class ProjectItemList extends React.Component<Props,State>{
  constructor( props: Props ){
    super( props )
    this.state = {
      mounted: false
    }
  }
  async componentDidMount(){
    await ProjectStore.getDocuments({ listName: this.props.listName, query: this.props.query, clear: this.props.clear })
  }
  componentDidUpdate( prevProps: Props ){
    if( JSON.stringify( prevProps.query.where ) !== JSON.stringify( this.props.query.where ) ){
      ProjectStore.getDocuments({ listName: this.props.listName, query: this.props.query, clear: true })
    }
  }
  render(){
    if( ProjectStore.Lists[this.props.listName] ){
      let { documents, loading } = ProjectStore.Lists[this.props.listName]
      return (
        <React.Fragment>
          <ListCount><strong>{documents.length}</strong> Project{documents.length > 1 && `s`}</ListCount>
          <List>
            { documents.length > 0 &&
              documents.map( (slug: string) => {
                return <ListItem key={slug}><ProjectItem project={ProjectStore.Documents[slug]} /></ListItem>
              })
            }
            { loading &&
              <ListItem><ProjectDummyItem /></ListItem>
            }
            {
              ( documents.length === 0 && !loading ) &&
              <ListEmpty>결과가 조회되지 않았습니다.</ListEmpty>
            }
          </List>
        </React.Fragment>
      )
    }else{
      return null
    }
  }
}