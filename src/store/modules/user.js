const user = {
    namespaced: true,
    state: {
        mobile: '',
        avatar: '',
        name: '',
        email: '',
        permission: [],
    },
    mutations: {
        SET_MOBILE: (state, val) => {
            state.mobile = val
        },
        SET_AVATAR: (state, val) => {
            state.avatar = val
        },
        SET_NAME: (state, val) => {
            state.name = val
        },
        SET_EMAIL: (state, val) => {
            state.email = val
        },
        SET_PERMISSION: (state, val) => {
            state.permission = val
        },
    },
    actions: {
        GetInfo ({ commit }, _this) {
            axios.post('userinfo').then((response) => {
                if(response.status != 1){
                    return _this.$message.error(response.message);
                }
                commit('SET_MOBILE',response.data.mobile);
                commit('SET_AVATAR',response.data.avatar);
                commit('SET_NAME',response.data.name);
                commit('SET_EMAIL',response.data.email);
                commit('SET_PERMISSION',response.data.permission);
            });
        }
    }
}

export default user
