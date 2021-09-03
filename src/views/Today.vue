<template>
  <div style="margin-top:20%;margin-bottom:15%">
      <ConsCard
      :name="todayData.name"
      :allIndex="todayData.all"
      />
      <NumList
      :data="todayData"
      />
      <ConsList
      :data="todayData"
      />
  </div>
</template>

<script>
import NumList from '@/components/numlist/Index.vue'
import ConsList from '@/components/list/Today.vue'
import {onMounted,computed,ref,onActivated} from 'vue'
import {useStore} from 'vuex'
import getData from '@/services'
export default {
name:'today',
components:{
  NumList,
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
    todayData:computed(()=>state.today)
  }
}
}
</script>

<style lang="scss" scoped>

</style>

