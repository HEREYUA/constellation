import ConsCard from './Card.vue'
import ConsItem from './ConsItem.vue'
import Summary from './Summary.vue'
let MyPlugin = {}

MyPlugin.install=function(Vue){
    Vue.component(ConsCard.name, ConsCard)
    Vue.component(ConsItem.name, ConsItem)
    Vue.component(Summary.name, Summary)
}


export default MyPlugin