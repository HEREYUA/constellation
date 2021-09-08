<template>
  <div  style="position:absolute;overflow:auto;bottom:.44rem;top:.86rem">
       <ConsCard
      :name="monthData.name"
      :allIndex="Number(monthData.all)"
      />
      <ConsList
      :data="monthData"
      />
  </div>
</template>

<script>
import ConsList from '@/components/list/Month.vue'
import {onMounted,computed,ref,onActivated} from 'vue'
import {useStore} from 'vuex'
import getData from '@/services'
export default {
name:'month',
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
    monthData:computed(()=>store.state.month)
  }
}
}
</script>
<style lang="scss" scoped>

</style>