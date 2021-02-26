import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect: '/HellWord'
    },
    {
      path: '/HellWord',
      name: 'HelloWorld',
      component: () => import('../components/HelloWorld')
    }
  ]
})
