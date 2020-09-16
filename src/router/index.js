import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../pages/index/index.vue'
import analysisErrorData from '../pages/analysisErrorData/analysisErrorData.vue'
import compareErrorData from '../pages/compareErrorData/compareErrorData.vue'
import errorAnticipationAccuracy from '../pages/errorAnticipationAccuracy/errorAnticipationAccuracy.vue'
import errorAnticipationImitate from '../pages/errorAnticipationImitate/errorAnticipationImitate.vue'
import errorClassify from '../pages/errorClassify/errorClassify.vue'
import systemEstimate from '../pages/systemEstimate/systemEstimate.vue'

// 声明使用插件
Vue.use(VueRouter)
export default new VueRouter({
  // 所有路由
  routes: [
    {
      path: '/index',
      component: index
    },
    {
      path: '/analysiserrordata',
      component: analysisErrorData
    },
    {
      path: '/compareerrordata',
      component: compareErrorData
    },
    {
      path: '/erroranticipationaccuracy',
      component: errorAnticipationAccuracy
    },
    {
      path: '/erroranticipationimitate',
      component: errorAnticipationImitate
    },
    {
      path: '/errorclassify',
      component: errorClassify
    },
    {
      path: '/systemestimate',
      component: systemEstimate
    },
    {
      path: '/',
      component: index
    }
  ]
})
