import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);


// Vuex : 상태 관리 도구, 상태 => 여러 컴포넌트 간 공유되는 데이터 속성
export const store = new Vuex.Store({
    state : {
        ask:[],
        user: {},
        item: {},
        list: [],
    },
    getters : {
        ask(state) {
            return state.ask;
        },
        ItemInfo(state) {
            return state.item;
        }
    },
    mutations,
    actions,
});