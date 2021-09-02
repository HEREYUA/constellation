<template>
  <div style="margin-top:20%">
       <ConsCard
      :name="monthData.name"
      :allIndex="monthData.all"
      />
  </div>
</template>

<script>
import {onMounted} from 'vue'
import {useStore} from 'vuex'
import getData from '@/services'
export default {
name:'month',
setup(){
  var store =useStore()
  onMounted(()=>{
    getData(store)
  })
   return{
    monthData:computed(()=>store.state.month)
  }
}
}
</script>
<style lang="scss" scoped>

</style>