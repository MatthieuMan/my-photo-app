import Vue from 'vue'
import App from './App'
import Vuedragscroll from 'vue-dragscroll'

Vue.use(Vuedragscroll)

Vue.config.productionTip = false

new Vue({
    el: "#app",
    render: h => h(App)
});
