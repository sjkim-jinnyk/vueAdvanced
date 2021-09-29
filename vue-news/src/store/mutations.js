export default {
    SET_NEWS(state, news) {
        state.news = news; // state에 있는 news 배열에 actions에서 넘어온 news 데이터를 담아준다.
    },
    SET_JOBS(state, jobs) {
        state.jobs = jobs;
    },
    SET_ASK(state, ask) {
        state.ask = ask;
    }
}