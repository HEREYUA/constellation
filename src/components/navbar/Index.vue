<template>
  <div 
    class="nav-bar" 
  
  >
    <div class="scroll-wrapper">
      <div class="nav-wrapper" :style="`width: ${navData.length * .8}rem`">
        <nav-item
          v-for="(item, index) of navData"
          :key="index"
          :item="item"
          :curIdx="curIdx"
          :index="index"
          @navbarClick="clickItem"
          
        />
      </div>
    </div>
  </div>
</template>

<script>

import navData from '@/datas/nav';

import NavItem from './Item';

import { ref } from 'vue';

import { useStore } from 'vuex';


import getData from '@/services';

export default {
  name: 'NavBar',
  components: {
    NavItem
  },

  setup () {
    
    const curIdx = ref(0)
    const store = useStore()

    const clickItem =(index,e)=>{
      curIdx.value =index
      // console.log(e.target.innerText)
      store.dispatch('setConsName',e.target.innerText)
      getData(store)
      console.log(store.state.consName)
    }
    return {
      navData,
      curIdx,
      clickItem
    }
  }
}

</script>

<style lang="scss" scoped>
  .nav-bar {
    position: absolute;
    top: .44rem;
    left: 0;
    z-index: 1;
    width: 100%;
    height: .38rem;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;
    background-color: #fff;
    overflow: hidden;

    .scroll-wrapper {
      height: .46rem;
      overflow-x: auto;

      .nav-wrapper {
        display: flex;
        flex-direction: row;
        height: .42rem; 
      }
    }
  }
</style>