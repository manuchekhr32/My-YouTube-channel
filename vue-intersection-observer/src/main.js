import Vue from 'vue'
import App from './App.vue'
import vIntersect from "vue-intersect"

Vue.config.productionTip = false

new Vue({
    vIntersect,
    render: h => h(App),
}).$mount('#app')
