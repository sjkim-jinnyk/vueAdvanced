import { fetchNewsList, fetchJobsList, fetchAskList } from '../api/index.js';

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
    }
}