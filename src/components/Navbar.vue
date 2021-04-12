<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-light">
    <router-link
      to="/"
      class="text-white navbar-brand btn btn-outline-info"      
    >
      餐廳評論網
    </router-link>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>

    <div
      id="navbarSupportedContent" 
      class="navbar-collapse collapse"
    >
      <div class="ml-auto d-flex align-items-center">
        <!-- if user is admin -->
        <p class="admin">
          <router-link
              to="#" 
              class="text-white mr-3 btn btn-outline-info"
              v-if="currentUser.isAdmin"
          >
          管理員後台
        </router-link>
        </p>

        <template v-if="isAuthenticated">
          <p class="user">
          <!-- is user is login -->
              <router-link
                to="#" 
                class="text-white mr-3 btn btn-outline-info"
              > 
              {{ currentUser.name || '使用者' }} 您好
            </router-link>
          </p>

          <button
            type="button" 
            class="btn btn-outline-danger my-2 my-sm-0"
            >
            登出
            </button>
          </template>
      </div>
    </div>
  </nav>
</template>

<script>
/* eslint-disable */
// 模擬 API 內容
const dummyUser = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}

export default {
  data() {
    return {
      currentUser: {
        id: -1,
        name: '',
        email: '',
        image: '',
        isAdmin: false
      },
      isAuthenticated: false  
    }
  },
  methods: {
    fetchUser() {
      this.currentUser = {
        ...this.currentUser, // 預設值
        ...dummyUser.currentUser // 把上面的有重複蓋掉
      }
      this.isAuthenticated = dummyUser.isAuthenticated
    }
  },
  created() {
    this.fetchUser()
  }  
}
</script>

<style>
  .navbar {
    background: skyblue;
  }
  p {
    margin: 0;
  }
  .admin a, .user a{
    text-decoration: none;
  }  
</style>