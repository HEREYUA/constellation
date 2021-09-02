<template>
  <div style="margin-top:20%">
       <ConsCard
      :name="monthData.name"
      :allIndex="Number(monthData.all)"
      />
  </div>
</template>

<script>
import {onMounted,computed} from 'vue'
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