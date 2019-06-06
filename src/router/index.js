import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home.vue'
import Category from '@/pages/category/category.vue'
import Cart from '@/pages/cart/cart.vue'
import My from '@/pages/my/my.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/my',
      name: 'My',
      component: My
    }
  ]
})
