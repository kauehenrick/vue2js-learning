import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuetify)

const vuetify = new Vuetify({
  theme: {
    dark: true,
  },
})

new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app')