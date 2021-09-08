<template>
<div id="app" style="height:100%">
  <my-header>星座物语</my-header>
 <nav-bar/>
 <error-tip/>
   <router-view v-slot="{ Component }" v-if="!errorCode">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
 
  <tab/>
</div>
 
</template>

<script>
import MyHeader from '@/components/header/Index.vue'
import Tab from '@/components/tab/Index.vue'
import NavBar from '@/components/navbar/Index.vue'
import ErrorTip from '@/components/errortip/Index.vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import {computed, watch} from 'vue'
export default{
  name:'app',
  components:{
    MyHeader,
    Tab,
    NavBar,
    ErrorTip
  },
  setup(){
    const store = useStore()
    const router = useRouter()
    router.push('/')
    store.dispatch('setType','today')
    watch(()=>{
      return router.currentRoute.value.name
    },(value)=>{
      store.dispatch('setType',value)
    })

    return {
      errorCode:computed(()=>store.state.errorCode)
    }
  }
}
</script>
