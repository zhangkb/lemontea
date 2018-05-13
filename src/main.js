// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import axios from 'axios'

import echarts from 'echarts'

Vue.prototype.$echarts = echarts
Vue.prototype.$axios= axios
Vue.config.productionTip = false
Vue.use(ElementUI);
/* eslint-disable no-new */



router.beforeEach((to, from, next) => {
    console.log(to)
    if (to.meta.auth) {
        if (!localStorage.getItem('token')) {
            next({
                path: '/',
                query: {
                    redirect: to.fullPath
                }
            })
        } else {
            next();
        }
    } else {
        next();
    }

});


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
