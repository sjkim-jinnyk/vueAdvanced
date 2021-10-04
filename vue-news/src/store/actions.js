import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchItemInfo } from '../api/index.js';

export default {
    FETCH_NEWS(context) {
        fetchNewsList()
            .then( response => {
                //console.log(response.data);
                context.commit('SET_NEWS', response.data);  // mutation에 데이터 넘기기
            })
            .catch(error => console.log(error));
    },
    // FETCH_JOBS(context) {
    //     fetchJobsList()
    //         .then(response => {
    //             context.commit('SET_JOBS', response.data);
    //         })
    //         .catch(error => console.log(error));
    // },
    // 디스트럭처링 사용       
    FETCH_JOBS({ commit }) {
        fetchJobsList()
            .then( ({ data }) => {
                commit('SET_JOBS', data);
            })
            .catch(error => console.log(error));
    },
    FETCH_ASK(context) {
        fetchAskList()
            .then(response => {
                console.log(response.data);
                context.commit('SET_ASK', response.data)
            })
            .catch(error => console.log(error));
    },
    // UserVies.vue에서 dispatch로 넘긴 userName이 name이다.
    FETCH_USER({ commit }, name) {
        fetchUserInfo(name)
            .then(({ data }) => {
                commit('SET_USER', data);
            })
            .catch(error => console.log(error));

    },
    FETCH_ITEM( {commit}, itemid) {
        fetchItemInfo(itemid)
        .then(({ data }) => {
            commit('SET_ITEM', data);
        })
        .catch(error => console.log(error));
    }
}