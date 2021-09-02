<template>
  <div style="margin-top:20%">
      <ConsCard
      :name="todayData.name"
      :allIndex="todayData.all"
      />
  </div>
</template>

<script>

import {onMounted,computed} from 'vue'
import {useStore} from 'vuex'
import getData from '@/services'
export default {
name:'today',

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

