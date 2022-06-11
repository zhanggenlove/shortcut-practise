import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'app',
      component: require('@/pages/app').default
    },
    {
      path: '/:app',
      name: 'category',
      component: require('@/pages/category').default
    },
    {
      path: '/:app/:index',
      name: 'playground',
      component: require('@/pages/playground').default
    },
    {
      path: '/landing-page',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
