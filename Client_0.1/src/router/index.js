import Vue from 'vue'
import Router from 'vue-router'
import BasicLogin from '@/components/BasicLogin'
import Applayout from '@/common/AppLayout'
import Grid from '@/components/Grid'
import BottomNav from '@/components/NevigationBottom'
import Conversational from '@/components/Chatbot'
import CreateUser from '@/components/adminView/CreateUser'
import CustomerList from '@/components/adminView/UserList'
import Profile from '@/components/adminView/Profile'
import Dashboard from '@/components/adminView/Dashboard'
import CollectionDetails from '@/components/adminView/CollectionDetails'
import Ratechart from '@/components/adminView/RateChart'
import ReportView from'@/components/adminView/ReportView'
import createReport from '@/components/pages/CreateReport'
import event from '@/components/event'

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
        path: '/grid',
        name: 'Grid',
        component: Grid
      },
      {
        path: '/bottomnav',
        name: 'BottomNav',
        component: BottomNav
      },
      {
        path: '/Conversational_form',
        name: 'Chatbot',
        component: Conversational
      },
      {
        path: '/create_user',
        name: 'CreateUser',
        component: CreateUser
      },
      {
        path: '/customerlist',
        name: 'CustomerList',
        component: CustomerList
      },
      {
        path: '/rateChart',
        name: 'RateChart',
        component: Ratechart
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
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/collectionDetails',
      name: 'CollectionDetails',
      component: CollectionDetails
    },
    {
         path:'/event',
         name:'event',
         component:event,
         isOpenUrl:true
    },
    {
      path: '*',
      redirect: '/'
  },
  {
      path: '/',
      redirect: '/Login'
  }
  ]
})
