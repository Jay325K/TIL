import Vue from 'vue'
import VueRouter from 'vue-router'

// 라우터로 연결한 main_page, sub_page 컴포넌트 모듈 가져옴
import main_page from '../components/main_page.vue';
import sub_page from '../components/sub_page.vue';

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    {path:'/main',component:main_page},
    {path:'/sub',component:sub_page}
  ]
})

export default router
