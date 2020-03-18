// initial state
const state = {
    index: 0,
    todos: [
        { id: 1, text: '...', done: true },
        { id: 2, text: '...', done: false }
    ]
}

// getters
const getters = { //用来计算 state
    doneTodos: (state,getters) => { //Getter 也可以接受其他 getter 作为第二个参数
        return state.todos.filter(todo => todo.done)
    },
    getTodoById: (state) => (id) => { //getter 返回一个函数，来实现给 getter 传参。在你对 store 里的数组进行查询
        return state.todos.find(todo => todo.id === id)
    }
}

// mutations
const mutations = { //mutation 必须是同步函数
    increment (state) {
        state.index++
    },
    decrement (state) {
        state.index--
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations
}
