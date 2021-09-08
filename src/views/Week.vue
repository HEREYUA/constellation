<template>
  <div  style="position:absolute;overflow:auto;bottom:.44rem;top:.86rem">
      <ConsCard
      :name="weekData.name"
      :allIndex="weekData.all"
      />
        <ConsList
      :data="weekData"
      />
  </div>
</template>

<script>
import ConsList from '@/components/list/Week.vue'
import {onMounted,computed,ref,onActivated} from 'vue'
import {useStore} from 'vuex'
import getData from '@/services'
export default {
name:'week',
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
    weekData:computed(()=>store.state.week)
  }
}
}
</script>

<style lang="scss" scoped>

</style>