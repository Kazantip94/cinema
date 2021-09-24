import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { initializeApp } from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'




import 'admin-lte/plugins/jquery/jquery.min.js';
import 'admin-lte/plugins/jquery-ui/jquery-ui.min.js';
import 'admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js';
import 'admin-lte/plugins/chart.js/Chart.min.js';
import 'admin-lte/plugins/sparklines/sparkline.js';
// import 'admin-lte/plugins/jqvmap/jquery.vmap.min.js';
// import 'admin-lte/plugins/jqvmap/maps/jquery.vmap.usa.js';
import 'admin-lte/plugins/jquery-knob/jquery.knob.min.js';
// import 'admin-lte/plugins/moment/moment.min.js';
import 'admin-lte/plugins/daterangepicker/daterangepicker.js';
// import 'admin-lte/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js';
import 'admin-lte/plugins/summernote/summernote-bs4.min.js';
import 'admin-lte/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js';
import 'admin-lte/dist/js/adminlte.js';
// import 'admin-lte/dist/js/demo.js';
// import 'admin-lte/dist/js/pages/dashboard.js';

Vue.config.productionTip = false

Vue.use(Vuelidate)

const firebaseConfig = {
  apiKey: "AIzaSyCI3xAYflwEpJx3JhRrpI2StnbsWVQg3xk",
  authDomain: "vue-cinema-crm.firebaseapp.com",
  projectId: "vue-cinema-crm",
  storageBucket: "vue-cinema-crm.appspot.com",
  messagingSenderId: "771012724253",
  appId: "1:771012724253:web:a47fbe390287825d6a68f4",
  measurementId: "G-4XNEY7YF7J"
}

const app = initializeApp(firebaseConfig);



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


app()