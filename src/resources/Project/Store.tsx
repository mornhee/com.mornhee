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
    let { docs } = await ref.limit(2).get()

    this.Lists[ listName ].loading = false
    docs.forEach( ( doc: firebase.firestore.QueryDocumentSnapshot ) => {
      let data = doc.data() as ResourceProject
      this.Documents[ data.slug ] = data
      this.Lists[ listName ].documents.push( data.slug )
    })
  }

}

export default new ProjectStore()
