import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueScrollTo from "vue-scrollto";
import firebase from "firebase";

Vue.use(VueScrollTo);

Vue.config.productionTip = false;
const config = {
  apiKey: "AIzaSyBpKil8q5oPiC1ADmdpjLIvYwcgLdHxq38",
  projectId: "slothhealth",
  authDomain: "slothhealth.firebaseapp.com",
  databaseURL: "https://slothhealth.firebaseio.com",
  storageBucket: "slothhealth.appspot.com",
};

firebase.initializeApp(config);

export default firebase;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
