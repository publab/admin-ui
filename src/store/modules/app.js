import config from '@/config'

const app = {
    namespaced: true,
    state: {
        DEVICE: null,
        ...config
    },
    mutations: {
        setDevice(state,type){
            state.DEVICE = type;
        }
    },
    actions: {

    }
}

export default app
