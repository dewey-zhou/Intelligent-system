import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../pages/index/index.vue'
import analysisErrorData from '../pages/analysisErrorData/analysisErrorData.vue'
import compareErrorData from '../pages/compareErrorData/compareErrorData.vue'
import errorAnticipationAccuracy from '../pages/errorAnticipationAccuracy/errorAnticipationAccuracy.vue'
import errorAnticipationImitate from '../pages/errorAnticipationImitate/errorAnticipationImitate.vue'
import errorClassify from '../pages/errorClassify/errorClassify.vue'
import systemEstimate from '../pages/systemEstimate/systemEstimate.vue'
import login from '../pages/login/login.vue'
import text from '../pages/text/text.vue'
// 声明使用插件
Vue.use(VueRouter)
export default new VueRouter({
  mode: 'history',
  // 所有路由
  routes: [
    {
      path: '/index',
      component: index,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/analysiserrordata',
      component: analysisErrorData,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/compareerrordata',
      component: compareErrorData,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/erroranticipationaccuracy',
      component: errorAnticipationAccuracy,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/erroranticipationimitate',
      component: errorAnticipationImitate,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/errorclassify',
      component: errorClassify,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/systemestimate',
      component: systemEstimate,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/',
      component: index,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/text',
      component: text
    }
  ]
})
