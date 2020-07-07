import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueScrollTo from "vue-scrollto";
import firebase from "firebase";

Vue.use(VueScrollTo);

Vue.config.productionTip = false;
const config = {
  apiKey: "AIzaSyA-HgGMHTWBNK-cgBPuoUkR6NQja5cGCo8",
  projectId: "health-dbdd6",
  authDomain: "health-dbdd6.firebaseapp.com",
  databaseURL: "https://health-dbdd6.firebaseio.com",
  storageBucket: "health-dbdd6.appspot.com",
};

firebase.initializeApp(config);

export default firebase;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
