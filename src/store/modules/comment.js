import { isExist, deleteOne } from '@/tools/arrayOperate'

export default {
  // 开启命名空间
  namespaced: true,
  state: {
    sideBarShow: true,
    currentPage: '',
    pageList: [],
    requestRoute: false

  },
  mutations: {
    updateSideBarShow (state, id) {
      state.sideBarShow = id
    },
    updateRequestRoute (state, id) {
      state.requestRoute = id
    },
    updateCurrentPage (state, id) {
      state.currentPage = id
    },
    addPageList (state, id) {
      if (isExist(state.pageList, id)) {
        state.pageList.unshift(id)
      } else {
        console.log(id + 'is exist')
      }
    },
    deleteOnePage (state, id) {
      deleteOne(state.pageList, id)
    }
  },
  actions: {
    updateSideBarShow: (context, id) => {
      return context.commit('updateSideBarShow', id)
    },
    updateRequestRoute: (context, id) => {
      return context.commit('updateRequestRoute', id)
    },
    updateCurrentPage: (context, id) => {
      return context.commit('updateCurrentPage', id)
    },
    addPageList: (context, id) => {
      return context.commit('addPageList', id)
    },
    deleteOnePage: (context, id) => {
      return context.commit('deleteOnePage', id)
    }
  }
}
