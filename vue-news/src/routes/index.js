import Vue from 'vue';
import VueRouter from 'vue-router';
import AskView from '../views/AskView.vue';
import NewsView from '../views/NewsView.vue';
import JobsView from '../views/JobsView.vue';
Vue.use(VueRouter);

export const router = new VueRouter({
    // url에 나오는 해시 값 제거
    mode: 'history',
    routes: [
        {
            // 들어가자마자 news가 뜨게 redirect
            path: '/',
            redirect: '/news',
        },
        {
            path: '/news',
            component: NewsView,
        },
        {
            path: '/ask',
            component: AskView,
        },
        {
            path: '/jobs',
            component: JobsView,
        },
    ]
});