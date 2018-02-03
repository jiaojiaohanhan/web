import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import subtest1 from '@/components/subtest1'
import subtest2 from '@/components/subtest2'
import count from '@/components/count'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test/',
      name: 'test',
      component: Test,
      children:[
        {
          path:"/subtest1/",
          component:subtest1
        },
        {
          path:"/subtest2/",
          component:subtest2
        }
      ]
    },
    {
      path: '/count',
      name: 'count',
      component: count
    }
  ]
})
