import Vue from 'vue';
import VueRouter from 'vue-router';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import createListView from '../views/CreateListView.js';

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
            name: 'news',
            // component: NewsView,
            component: createListView('NewsView'),
            // beforeEnter: (to,from, next) => {
            //     console.log('to', to);
            //     console.log('from', from);
            //     console.log(next);
            //     next(); 
            // }
            
        },
        {
            path: '/ask',
            name: 'ask',
            // component: AskView,
            component: createListView('AskView'),
        },
        {
            path: '/jobs',
            name: 'jobs',
            // component: JobsView,
            component: createListView('JobsView'),
        },
        {
            path: '/user/:id',  // id를 param으로 넣어줌
            component: UserView,
        },
        {
            path: '/item/:id',  
            component: ItemView,
        },
    ]
});