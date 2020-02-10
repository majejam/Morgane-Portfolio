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
        title: 'Morgane Lapisardi | Home',
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        title: 'Morgane Lapisardi | About',
      }
    },
    {
      path: '/blog/:Pid',
      name: 'blog',
      component: Blog,
      meta: {
        title: 'Morgane Lapisardi | Blog',
      }
    },
    {
      path: '/category/:Pid',
      name: 'Category',
      component: Category,
      meta: {
        title: 'Morgane Lapisardi | Categorie',
      }
    },
    {
      path: '/error/404',
      name: '404',
      component: NotFound,
      meta: {
        title: 'Morgane Lapisardi | Uh oh',
      }
    },
    { path: '*', component: NotFound }
  ]
})
