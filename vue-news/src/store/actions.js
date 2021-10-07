import { fetchUserInfo, fetchItemInfo, fetchList } from '../api/index.js';

export default {
    // FETCH_USER({ commit }, name) {
    //     fetchUserInfo(name)
    //         .then(({ data }) => {
    //             commit('SET_USER', data);
    //         })
    //         .catch(error => console.log(error));

    // },
    async FETCH_USER({commit}, name) {
        try{
            const response = await fetchItemInfo(name);
            commit('SET_USER', response.data);
            return response;
        } catch (error) {
            console.log(error);
        }
        
    },
    // FETCH_ITEM( {commit}, itemid) {
    //     fetchItemInfo(itemid)
    //     .then(({ data }) => {
    //         commit('SET_ITEM', data);
    //     })
    //     .catch(error => console.log(error));
    // },
    async FETCH_ITME({commit}, itemid) {
        const response = await fetchItemInfo(itemid);
        commit('SET_ITEM', response.data);
        return response;
    },
    // FETCH_LIST( {commit}, pageName) {
    //     return fetchList(pageName)
    //         .then( response  => {
    //             console.log(4);
    //             commit('SET_LIST', response.data)
    //             return response;
    //         })
    //         .catch(error => console.log(error));
    // },
    async FETCH_LIST( {commit}, pageName) {
        const response = await fetchList(pageName);
        commit('SET_LIST', response.data);
        return response;
    }


}