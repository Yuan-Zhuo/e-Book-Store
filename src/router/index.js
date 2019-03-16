import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Browse from '@/components/Browse'
import Detail from '@/components/Detail'
import Sign from '@/components/Sign'

Vue.use(Router);

export default new Router({
  routes: [
      {
          path: '/',
          name: 'Sign',
          component: Sign
      },
      {
          path: '/Home',
          name: 'Home',
          component: Home
      },
      {
          path: '/Browse',
          name: 'Browse',
          component: Browse
      },
      {
          path: '/Detail',
          name: 'Detail',
          component: Detail
      }
  ],
  mode:'history'
})
