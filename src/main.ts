import Vue from 'vue';
import JesLoading from './components/JesLoading.vue';

function install(Vue: any) {
  Vue.component(JesLoading.name, JesLoading);
}

export default {install, JesLoading};
