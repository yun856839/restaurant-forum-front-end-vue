import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // data() 每個 Vue 元件都可以使用
  state: {    
    currentUser: {
      id: -1,
      name: "",
      email: "",
      image: "",
      isAdmin: false,
    },
    isAuthenticated: false,
  },

  // 修改 state 的方法
  mutations: {
    setCurrentUser(state, currentUser) {
      // 透過 API 取得的 currentUser 覆蓋 state.currentUser
      state.currentUser = {
        ...state.currentUser,
        ...currentUser
      }
      state.isAuthenticated = true
    }
  },

  // 透過 API 請求資料 設定其他的非同步函式
  actions: {
  },  
  modules: {
  }
})
