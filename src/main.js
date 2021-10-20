import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'



import 'admin-lte/plugins/jquery/jquery.min.js';
import 'admin-lte/plugins/jquery-ui/jquery-ui.min.js'
import 'admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js'
import 'admin-lte/plugins/chart.js/Chart.min.js'
import 'admin-lte/plugins/sparklines/sparkline.js'
import 'admin-lte/plugins/jquery-knob/jquery.knob.min.js'
import 'admin-lte/plugins/daterangepicker/daterangepicker.js'
import 'admin-lte/plugins/summernote/summernote-bs4.min.js'
import 'admin-lte/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js'
import 'admin-lte/dist/js/adminlte.js'


//firebase
import firebase from "firebase/app"
import "firebase/auth"
import "firebase/database"

Vue.config.productionTip = false

Vue.use(Vuelidate)

firebase.initializeApp({
  apiKey: "AIzaSyCI3xAYflwEpJx3JhRrpI2StnbsWVQg3xk",
  authDomain: "vue-cinema-crm.firebaseapp.com",
  projectId: "vue-cinema-crm",
  storageBucket: "vue-cinema-crm.appspot.com",
  messagingSenderId: "771012724253",
  appId: "1:771012724253:web:a47fbe390287825d6a68f4",
  measurementId: "G-4XNEY7YF7J",
  databaseURL: "https://vue-cinema-crm-default-rtdb.europe-west1.firebasedatabase.app",
})
  


let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
      app = new Vue({
        router,
        store,
        render: h => h(App)
      }).$mount('#app')
  }
})



