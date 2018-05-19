import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import movieList from '@/components/movies/movieList'
import musicList from '@/components/musics/musicList'
import photoList from '@/components/photos/photoList'
import bookList from '@/components/books/bookList'
import movieDetail from '@/components/movies/movieDetail'
import musicDetail from '@/components/musics/musicDetail'
import photoDetail from '@/components/photos/photoDetail'

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
    },
    {
      path: '/movieDetail/:id',
      name:'movieDetail',
      component:movieDetail
    },
    {
      path: '/musicDetail/:id',
      name:'musicDetail',
      component:musicDetail
    },
    {
      path: '/photoDetail/:idx',
      name:'photoDetail',
      component:photoDetail
    }
  ]
})
