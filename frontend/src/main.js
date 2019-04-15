// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import router from './router'
import Basic from './components/Basic'

Vue.config.productionTip = false;
Vue.use(iView);
Vue.component("basic", Basic);

new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
});
