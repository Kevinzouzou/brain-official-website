import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      component: Home,
      name: 'home',
      redirect:'/homePage',
      children:[
        {
          path: '/homePage',
          name: '首页',
          component: resolve => require(['../views/pages/homePage.vue'], resolve),
        },
        {
          path: '/product',
          name: '产品',
          component: resolve => require(['../views/pages/product.vue'], resolve),
        },
        {
          path: '/case',
          name: '案例',
          component: resolve => require(['../views/pages/case.vue'], resolve),
        },
        {
          path: '/aboutUs',
          name: '关于我们',
          component: resolve => require(['../views/pages/aboutUs.vue'], resolve),
        },
      ]
    },


  ]
})
