import { createApp } from 'vue'
import App from './App.vue'
import CoreuiVue from '@coreui/vue'
import '@coreui/coreui/dist/css/coreui.min.css'
import {CIcon} from '@coreui/icons-vue'
import {CChart} from "@coreui/vue-chartjs"
import * as icons from '@coreui/icons';


const app =createApp(App)
app.use(CoreuiVue)
app.provide('icons', icons)
app.component('CChart', CChart)
app.component('CIcon', CIcon)


app.mount('#app')
