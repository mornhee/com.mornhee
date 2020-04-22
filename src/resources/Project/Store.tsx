import { observable, action } from "mobx"
import firebase, { firestore } from "../../utils/firebase"

interface ResourceList {
  [listName: string]: {
    documents: string[]
    loading: boolean
  }
}
interface GetPayload {
  listName: string
  query: {
    where?: [ any, any, any ][]
    orderBy?: [ any, any ][]
  }
  clear?: boolean
}
class ProjectStore {

  @observable
  Documents: { [slug: string]: ResourceProject } = {}

  @observable
  Lists: ResourceList = {}

  @action
  async getDocuments({ listName, query: { where, orderBy }, clear }: GetPayload ){
    if( !clear && this.Lists[ listName ] ) return false

    this.Lists[ listName ] = { documents: [], loading: true }
    let ref: firebase.firestore.CollectionReference|firebase.firestore.Query = firestore.collection( "Projects" )
    if( orderBy ){
      for( let o of orderBy ){
        ref = o.indexOf( undefined ) >= 0 ? ref : ref.orderBy( ...o )
      }
    } 
    if( where ){
      for( let o of where ){
        ref = o.indexOf( undefined ) >= 0 ? ref : ref.where( ...o )
      }
    } 
    let { docs } = await ref.get()

    let newDocuments: {[slug: string]: ResourceProject} = {}
    let newListDocuments: string[] = []
    docs.forEach( ( doc: firebase.firestore.QueryDocumentSnapshot ) => {
      let data = doc.data() as ResourceProject
      newDocuments[ data.slug ] = data
      newListDocuments.push( data.slug )
    })
    this.Documents = Object.assign( this.Documents, newDocuments )
    this.Lists[ listName ].documents = this.Lists[ listName ].documents.concat( newListDocuments )
    this.Lists[ listName ].loading = false
  }

}

export default new ProjectStore()
