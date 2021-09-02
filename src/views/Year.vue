<template>
  <div style="margin-top:20%">
       <ConsCard
      :name="yearData.name"
      :allIndex="yearData.all"
      />
  </div>
</template>

<script>
import {computed, onMounted} from 'vue'
import {useStore} from 'vuex'
import getData from '@/services'
export default {
name:'year',
setup(){
  var store =useStore()
  onMounted(()=>{
    getData(store)
  })
  return{
    yearData:computed(()=>store.state.year)
  }
}
}
</script>

<style lang="scss" scoped>

</style>