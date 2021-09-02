<template>
 <my-header>星座物语</my-header>
 <nav-bar/>
   <router-view v-slot="{ Component }" >
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
 
  <tab/>
</template>

<script>
import MyHeader from '@/components/header/Index.vue'
import Tab from '@/components/tab/Index.vue'
import NavBar from '@/components/navbar/Index.vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import {watch} from 'vue'
export default{
  name:'app',
  components:{
    MyHeader,
    Tab,
    NavBar
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
  }
}
</script>
