import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PutParent from '@/components/putParent'
import LifeCycle from '@/components/lifeCycle'
import Computed from '@/components/computed'
import setterorgetter from '@/components/setterorgetter'
import Style from '@/components/style'
import Set from '@/components/set'
import Detail from '@/components/detail'
import Counter from '@/components/counter'
import ParamCheck from '@/components/ParamCheck'
import Bus from '@/components/bus'
import Solt from '@/components/solt'
import ActiveComponent from '@/components/activeComponent'
import Amination from '@/components/amination'
import AimationJs from '@/components/aimationjs'
import List from '@/components/list'
import Home from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component:HelloWorld
    },
    {
      path:'/parent',
      name:'PutParent',
      component:PutParent
    },
    {
      path:'/life',
      name:'LifeCycle',
      component:LifeCycle
    },
    {
      path:'/computed',
      name:'computed',
      component:Computed
    },
    {
      path:'/sg',
      name:'setterorgetter',
      component:setterorgetter
    },
    {
      path:'/style',
      name:'style',
      component:Style
    },
    {
      path:'/set',
      name:'Set',
      component:Set
    },{
      path:'/detail',
      name:'Detail',
      component:Detail
    },
    {
      path:'/count',
      name:'Counter',
      component:Counter
    },
    {
      path:'/Pa',
      name:'ParamCheck',
      component:ParamCheck
    },
    {
      path:'/bus',
      name:'Bus',
      component:Bus
    },
    {
      path:'/solt',
      name:'Solt',
      component:Solt
    },
    {
      path:'/activeCom',
      name:'ActiveComponent',
      component:ActiveComponent
    },
    {
      path:'/amination',
      name:'Amination',
      component:Amination
    },
    {
      path:'/aimationjs',
      name:'AimationJs',
      component:AimationJs
    },
    {
      path:'/list',
      name:'List',
      component:List
    },
    {
      path:'/home',
      name:'Home',
      component:Home
    }
  ]
})
