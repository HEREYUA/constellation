<template>
  <div>
      today
  </div>
</template>

<script>
import {onMounted} from 'vue'
import {getData} from '@/services/request'
export default {
name:'today',
setup(){
  onMounted(()=>{
    getData('金牛座','week')
  })
}
}
</script>

<style lang="scss" scoped>

</style>

