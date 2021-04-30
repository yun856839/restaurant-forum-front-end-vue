<template>
  <div class="container py-5">
    <NavTabs />
    <Spinner v-if="isLoading" />
    <template v-else>
      <h1 class="mt-5">美食達人</h1>
      <hr />
      <div class="row text-center">
        <div class="col-3" v-for="user in users" :key="user.id">
          <a href="#">
            <img :src="user.image | emptyImage" width="140px" height="140px" />
          </a>
          <h2>{{ user.name }}</h2>
          <span class="badge badge-secondary"
            >追蹤人數：{{ user.followerCount }}</span
          >
          <p class="mt-3">
            <button
              v-if="user.isFollowed"
              :disabled="isProcessing"
              @click.prevent.stop="deleteFollowing(user.id)"
              type="button"
              class="btn btn-danger"
            >
              取消追蹤
            </button>
            <button
              v-else
              :disabled="isProcessing"
              @click.prevent.stop="addFollowing(user.id)"
              type="button"
              class="btn btn-primary"
            >
              追蹤
            </button>
          </p>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import Spinner from "./../components/Spinner";
import NavTabs from "./../components/NavTabs";
import { emptyImageFilter } from "./../utils/mixins";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";

export default {
  name: "Users",
  mixins: [emptyImageFilter],
  components: {
    NavTabs,
    Spinner,
  },
  data() {
    return {
      users: [],
      isLoading: true,
      isProcessing: false,
    };
  },
  methods: {
    async fetchTopUsers() {
      try {
        this.isLoading = true;
        const { data } = await usersAPI.getTopUsers();
        this.users = data.users.map((user) => ({
          id: user.id,
          name: user.name,
          image: user.image,
          followerCount: user.FollowerCount,
          isFollowed: user.isFollowed,
        }));
        this.isLoading = false;
      } catch (err) {
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: "Can not get UsersTop data. Try later.",
        });
      }
    },
    async addFollowing(userId) {
      try {
        this.isProcessing = true;
        const { data } = await usersAPI.addFollowing({ userId });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.users = this.users.map((user) => {
          if (user.id !== userId) {
            return user;
          } else {
            return {
              ...user,
              followerCount: user.followerCount + 1,
              isFollowed: true,
            };
          }
        });
        this.isProcessing = false;
      } catch (err) {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "Can not add following. Try later.",
        });
      }
    },
    async deleteFollowing(userId) {
      try {
        this.isProcessing = true;
        const { data } = await usersAPI.deleteFollowing({ userId });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.users = this.users.map((user) => {
          if (user.id !== userId) {
            return user;
          } else {
            return {
              ...user,
              followerCount: user.followerCount - 1,
              isFollowed: false,
            };
          }
        });
        this.isProcessing = false;
      } catch (err) {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "Can not delete following. Try later.",
        });
      }
    },
  },
  created() {
    this.fetchTopUsers();
  },
};
</script>