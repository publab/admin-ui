// initial state
const state = {
    items: []
}

// mutations
const mutations = { //mutation 必须是同步函数
    setitems (state,data) {
        state.items = data
    }
}

export default {
    namespaced: true,
    state,
    mutations
}
