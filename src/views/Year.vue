<template>
  <div  style="position:absolute;overflow:auto;bottom:.44rem;top:.86rem">
       <ConsCard
      :name="yearData.name"
      :allIndex="yearData.all"
      />
      <ConsList
      :data="yearData"
      />
  </div>
</template>

<script>
import ConsList from '@/components/list/Year.vue'
import {computed, onMounted,ref,onActivated} from 'vue'
import {useStore} from 'vuex'
import getData from '@/services'
export default {
name:'year',
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
    yearData:computed(()=>store.state.year)
  }
}
}
</script>

<style lang="scss" scoped>

</style>