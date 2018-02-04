import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import movieList from '@/components/movies/movieList'
import musicList from '@/components/musics/musicList'
import photoList from '@/components/photos/photoList'
import bookList from '@/components/books/bookList'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name:'movieList',
      component:movieList
    },
    {
      path: '/music',
      name:'musicList',
      component:musicList
    },
    {
      path: '/photo',
      name:'photoList',
      component:photoList
    },
    {
      path: '/book',
      name:'bookList',
      component:bookList
    }
  ]
})
