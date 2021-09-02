import {getData} from './request'

export default async(store)=>{
    const  consName = store.state.consName
    const    type =store.state.type
     var   data = await getData(consName,type)
   console.log(data)
   if(data.error_code){
     store.dispatch('setErrorCode',data.error_code)
     return
   }

   store.dispatch('setData',data)
}