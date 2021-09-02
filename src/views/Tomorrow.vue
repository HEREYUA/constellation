<template>
  <div style="margin-top:20%">
      <ConsCard
      :name="tomorrowData.name"
      :allIndex="tomorrowData.all"
      />
  </div>
</template>

<script>
import {onMounted,computed} from 'vue'
import {useStore} from 'vuex'
import getData from '@/services'
export default {
name:'tomorrow',
setup(){
  var store =useStore()
  onMounted(()=>{
    getData(store)
    console.log('进来没')
  })
   return{
    tomorrowData:computed(()=>store.state.tomorrow)
  }
}
}
</script>>

<style lang="scss" scoped>

</style>