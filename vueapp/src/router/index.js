import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import movieList from '@/components/movies/movieList'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      // component: HelloWorld
      component:movieList
    },
  ]
})
