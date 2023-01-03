import Vue from 'vue'
import Router from 'vue-router'
import Applayout from '@/common/AppLayout'
// Login page 
import BasicLogin from '@/components/login/BasicLogin'
// Dashboard 
import Dashboard from '@/components/dashboard/Dashboard'
// Collection page 
import collection  from '@/components/collection/Collection'
import cattlefeed from '@/components/cattlefeed/Cattlefeed'
import Advance from '@/components/advance/Advance'
import DataEntry from '@/components/dataEntry/dataEntry'
// DMS\Client_0.1\src.vue
// User 
import CreateUser from '@/components/user/CreateUser'
import UserList from '@/components/user/UserList'



// Report Section 
import ReportView from'@/components/report/ReportView'
import createReport from '@/components/report/CreateReport'
// import event from '@/components/event'

Vue.use(Router)
export default new Router({
  routes: [{
    path: '/layout',
    name: 'layout',
    component: Applayout,
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path:"/collection",
        name:"Collection",
        component:collection
      },
      {
        path:"/cattlefeed",
        name:"Cattlefeed",
        component:cattlefeed
      },
      {
        path:"/dataEntry",
        name:"DataEntry",
        component:DataEntry
      },
      {
        path:"/advance",
        name:"Advance",
        component:Advance
      },
      {
        path: '/create_user',
        name: 'CreateUser',
        component: CreateUser
      },
      {
        path: '/userList',
        name: 'userList',
        component: UserList
      },
      {
        path:'/ReportView',
        name: 'ReportView',
        component: ReportView
      },
      {
        path:'/createReport',
        name: 'CreateReport',
        component: createReport
      }
    ]},
    {
      path: '/Login',
      name: 'loginScreen',
      component: BasicLogin
    },
    {
      path: '*',
      redirect: '/'
  },
  {
      path: '/',
      redirect: '/Login'
  },
  ]
})
