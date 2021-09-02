import { createStore } from 'vuex'

export default createStore({
  state: {
    consName:'白羊座',
    type:'today',
    errorCode:0,
    today:{},
    tomorrow:{},
    week:{},
    month:{},
    year:{}
  },
  mutations: {
    setConsName(state,name){
      state.consName =name
    },
    setType(state,type){
      state.type = type
    },
    setErrorCode(state,code){
      state.errorCode = code
    },
    setData(state,data){
      state[state.type]=data
    }
  },
  actions: {
    setConsName(store,name){
      store.commit('setConsName',name)
    },
    setType(store,type){
      store.commit('setType',type)
    },
    setErrorCode(store,error){
      store.commit('setErrorCode',error)
    },
    setData(store,data){
      store.commit('setData',data)
    }


  },
  modules: {
  }
})
