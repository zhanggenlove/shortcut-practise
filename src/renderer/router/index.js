/*
 * @Author: zhanggen 1519149300@qq.com
 * @Date: 2022-06-11 12:12:12
 * @LastEditors: zhanggen 1519149300@qq.com
 * @LastEditTime: 2022-06-12 16:05:31
 * @FilePath: \shortcut-practise\src\renderer\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'app',
      component: require('@/pages/app').default,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/app',
      name: 'category',
      component: require('@/pages/category').default,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/app/playground',
      name: 'playground',
      component: require('@/pages/playground').default,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
