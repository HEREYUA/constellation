<template>
  <div style="margin-top:20%">
      <ConsCard
      :name="tomorrowData.name"
      :allIndex="tomorrowData.all"
      />
      <ConsList
      :data="tomorrowData"
      />
  </div>
</template>

<script>
import ConsList from '@/components/list/Tomorrow.vue'
import {onMounted,computed,ref,onActivated} from 'vue'
import {useStore} from 'vuex'
import getData from '@/services'
export default {
name:'tomorrow',
components:{
  ConsList
},
setup(){
  const store =useStore()
  const state =store.state
  const status = ref('')
  onMounted(()=>{
    getData(store)
   status.value =state.consName
  })

  onActivated(()=>{
    if(status.value!=state.consName){
      getData(store)
      status.value =state.consName
    }
  })

   return{
    tomorrowData:computed(()=>store.state.tomorrow)
  }
}
}
</script>>

<style lang="scss" scoped>

</style>