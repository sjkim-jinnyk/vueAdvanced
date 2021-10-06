import axios from "axios";

// API 폴더를 만들어 사용하는 이유
// => import 코드, baseUrl과 axios.get 코드가 중복! api를 호출할 때마다 라이브러리를 계속 쓰게 되기 때문..!

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
};

// 2. API 함수들을 정리
// function fetchNewsList() {
//     return axios.get(`${config.baseUrl}news/1.json`);
// }

// function fetchJobsList() {
//     return axios.get(`${config.baseUrl}jobs/1.json`);
// }

// function fetchAskList() {
//     return axios.get(`${config.baseUrl}ask/1.json`);
// }

function fetchList(pageName) {
    return axios.get(`${config.baseUrl}${pageName}/1.json`);
}

function fetchUserInfo(username) {
    return axios.get(`${config.baseUrl}user/${username}.json`);
}

function fetchItemInfo(itemId) {
    return axios.get(`${config.baseUrl}item/${itemId}.json`);
}



export {
    // fetchNewsList,
    // fetchJobsList,
    // fetchAskList,
    fetchUserInfo,
    fetchItemInfo,
    fetchList,
}

