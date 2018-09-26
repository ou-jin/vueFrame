export default {
  // 开启命名空间
  namespaced: true,
  state: {
    param1: 'param1'
  },
  mutations: {
    updateParam1 (state, param1) {
      state.param1 = param1
    }
  },
  actions: {
    updateParam1: (context, id) => {
      return context.commit('updateParam1', id)
    }
  }
}
