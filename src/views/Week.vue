<template>
  <div style="margin-top:20%">
      <ConsCard
      :name="weekData.name"
      :allIndex="weekData.all"
      />
  </div>
</template>

<script>
import {onMounted,computed} from 'vue'
import {useStore} from 'vuex'
import getData from '@/services'
export default {
name:'week',
setup(){
  var store =useStore()
  onMounted(()=>{
    getData(store)
  })

  return{
    weekData:computed(()=>store.state.week)
  }
}
}
</script>

<style lang="scss" scoped>

</style>