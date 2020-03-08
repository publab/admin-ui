import config from '@/config'

const app = {
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
