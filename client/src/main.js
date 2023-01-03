import {createApp} from 'vue';
import App from './App.vue';
import { router } from './router';
import store from './store';
import Vuex from 'vuex';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import 'bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import {
  faHome,
  faUser,
  faUserEdit,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt,
  faEdit,
  faPlus,
  faTrash,
  faCashRegister,
  faShoppingCart,
  faExclamationTriangle,
  faCheck
} from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt, faUserEdit, faEdit, faPlus, faTrash, faCashRegister, faShoppingCart, faExclamationTriangle,faCheck);
const app = createApp(App);
app.config.productionTip = false;

app.use(Vuex);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router)
app.use(store)
app.use(bootstrap)
app.mount("#app");
