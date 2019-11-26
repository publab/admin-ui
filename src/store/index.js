import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        count: 6,
        todos: [
            { id: 1, text: '...', done: true },
            { id: 2, text: '...', done: false }
        ]
    },
    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done);
        },
        getTodoById: (state) => (id) => {
            return state.todos.find(todo => todo.id === id);
        }
    },
    mutations: {
        increment(state) {
            state.count++;
        }
    },
    actions: {},
    modules: {}
});
//# sourceMappingURL=index.js.map