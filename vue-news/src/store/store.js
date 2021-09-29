import Vue from 'vue';
import Vuex from 'vuex';
//import { fetchNewsList, fetchJobsList, fetchAskList } from '../api/index.js';
// import { fetchJobsList } from '../api/index.js';
// import { fetchAskList } from '../api/index.js';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);


// Vuex : 상태 관리 도구, 상태 => 여러 컴포넌트 간 공유되는 데이터 속성
export const store = new Vuex.Store({
    state : {
        news: [],
        jobs: [],
        ask: [],
    },
    getters : {
        ask(state) {
            return state.ask;
        }
    },
    // mutations: {
    //     SET_NEWS(state, news) {
    //         state.news = news; // state에 있는 news 배열에 actions에서 넘어온 news 데이터를 담아준다.
    //     },
    //     SET_JOBS(state, jobs) {
    //         state.jobs = jobs;
    //     },
    //     SET_ASK(state, ask) {
    //         state.ask = ask;
    //     }
    // },
    mutations,
    // actions: {
    //     FETCH_NEWS(context) {
    //         fetchNewsList()
    //             .then( response => {
    //                 console.log(response.data);
    //                 context.commit('SET_NEWS', response.data);  // mutation에 데이터 넘기기
    //             })
    //             .catch(error => console.log(error));
    //     },
    //     // FETCH_JOBS(context) {
    //     //     fetchJobsList()
    //     //         .then(response => {
    //     //             context.commit('SET_JOBS', response.data);
    //     //         })
    //     //         .catch(error => console.log(error));
    //     // },
    //     // 디스트럭처링 사용       
    //     FETCH_JOBS({ commit }) {
    //         fetchJobsList()
    //             .then( ({ data }) => {
    //                 commit('SET_JOBS', data);
    //             })
    //             .catch(error => console.log(error));
    //     },
    //     FETCH_ASK(context) {
    //         fetchAskList()
    //             .then(response => context.commit('SET_ASK', response.data))
    //             .catch(error => console.log(error));
    //     }
    // }
    actions,
});