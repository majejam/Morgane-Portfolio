import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Blog from '@/components/Blog'
import Category from '@/components/Category'
import NotFound from '@/components/NotFound'
import About from '@/components/About'
Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Home Page - Example App',
        metaTags: [
          {
            name: 'description',
            content: 'The home page of our example app.'
          },
          {
            property: 'og:description',
            content: 'The home page of our example app.'
          }
        ]
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/blog/:Pid',
      name: 'blog',
      component: Blog
    },
    {
      path: '/category/:Pid',
      name: 'Category',
      component: Category
    },
    {
      path: '/error/404',
      name: '404',
      component: NotFound
    },
    { path: '*', component: NotFound }
  ]
})
