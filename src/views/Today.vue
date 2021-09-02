<template>
  <div style="margin-top:20%;margin-bottom:8%">
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
import {onMounted,computed} from 'vue'
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
  onMounted(()=>{
    getData(store)
   console.log(state.today)
  })


  return{
    todayData:computed(()=>state.today)
  }
}
}
</script>

<style lang="scss" scoped>

</style>

