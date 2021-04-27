<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-light">
    <router-link to="/" class="text-white navbar-brand btn btn-outline-info">
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

    <div id="navbarSupportedContent" class="navbar-collapse collapse">
      <div class="ml-auto d-flex align-items-center">
        <!-- if user is admin -->
        <p class="admin">
          <router-link
            to="/admin/restaurants"
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
              :to="{ name: 'user', params: { id: currentUser.id } }"
              class="text-white mr-3 btn btn-outline-info"
            >
              {{ currentUser.name || "使用者" }} 您好
            </router-link>
          </p>

          <button type="button" class="btn btn-outline-danger my-2 my-sm-0">
            登出
          </button>
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
};
</script>

<style>
.navbar {
  background: skyblue;
}
p {
  margin: 0;
}
.admin a,
.user a {
  text-decoration: none;
}
</style>