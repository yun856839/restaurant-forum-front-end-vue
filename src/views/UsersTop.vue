<template>
  <div class="container py-5">
    <NavTabs />
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
            @click.prevent.stop="deleteFollowing(user.id)"
            type="button"
            class="btn btn-danger"
          >
            取消追蹤
          </button>
          <button
            v-else
            @click.prevent.stop="addFollowing(user.id)"
            type="button"
            class="btn btn-primary"
          >
            追蹤
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import { emptyImageFilter } from "./../utils/mixins";

const dummyData = {
  users: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$16ClPTh28gde/3TnBX6N8eP4Em0trhb7GBhcMwohulJsU9ponGPhK",
      isAdmin: true,
      image: "https://i.imgur.com/5XlJtEs.jpg",
      createdAt: "2021-02-15T13:04:33.000Z",
      updatedAt: "2021-02-15T13:08:01.000Z",
      Followers: [
        {
          id: 11,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$9cqt0UixqUIPCraM6jXvKezOMG5ANH7WGnmis0ddnSu7bbDCdM7iW",
          isAdmin: false,
          image: "https://loremflickr.com/320/240?lock=2.7445859530035754",
          createdAt: "2021-02-15T13:04:33.000Z",
          updatedAt: "2021-02-15T13:04:33.000Z",
          Followship: {
            followerId: 11,
            followingId: 1,
            createdAt: "2021-02-16T10:10:34.000Z",
            updatedAt: "2021-02-16T10:10:34.000Z",
          },
        },
        {
          id: 21,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$4mK12LWzL/Tux72QN2NQVOk2YfctU6Ooe1uBAm/TyeGSbGEsoTalS",
          isAdmin: false,
          image: "https://loremflickr.com/320/240?lock=74.59861446049072",
          createdAt: "2021-02-15T13:04:34.000Z",
          updatedAt: "2021-02-15T13:04:34.000Z",
          Followship: {
            followerId: 21,
            followingId: 1,
            createdAt: "2021-02-17T03:01:13.000Z",
            updatedAt: "2021-02-17T03:01:13.000Z",
          },
        },
      ],
      FollowerCount: 2,
      isFollowed: false,
    },
    {
      id: 21,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$4mK12LWzL/Tux72QN2NQVOk2YfctU6Ooe1uBAm/TyeGSbGEsoTalS",
      isAdmin: false,
      image: "https://loremflickr.com/320/240?lock=74.59861446049072",
      createdAt: "2021-02-15T13:04:34.000Z",
      updatedAt: "2021-02-15T13:04:34.000Z",
      Followers: [
        {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$16ClPTh28gde/3TnBX6N8eP4Em0trhb7GBhcMwohulJsU9ponGPhK",
          isAdmin: true,
          image: "https://i.imgur.com/5XlJtEs.jpg",
          createdAt: "2021-02-15T13:04:33.000Z",
          updatedAt: "2021-02-15T13:08:01.000Z",
          Followship: {
            followerId: 1,
            followingId: 21,
            createdAt: "2021-02-16T10:10:01.000Z",
            updatedAt: "2021-02-16T10:10:01.000Z",
          },
        },
        {
          id: 11,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$9cqt0UixqUIPCraM6jXvKezOMG5ANH7WGnmis0ddnSu7bbDCdM7iW",
          isAdmin: false,
          image: "https://loremflickr.com/320/240?lock=2.7445859530035754",
          createdAt: "2021-02-15T13:04:33.000Z",
          updatedAt: "2021-02-15T13:04:33.000Z",
          Followship: {
            followerId: 11,
            followingId: 21,
            createdAt: "2021-02-16T10:10:40.000Z",
            updatedAt: "2021-02-16T10:10:40.000Z",
          },
        },
      ],
      FollowerCount: 2,
      isFollowed: true,
    },
    {
      id: 11,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$9cqt0UixqUIPCraM6jXvKezOMG5ANH7WGnmis0ddnSu7bbDCdM7iW",
      isAdmin: false,
      image: "https://loremflickr.com/320/240?lock=2.7445859530035754",
      createdAt: "2021-02-15T13:04:33.000Z",
      updatedAt: "2021-02-15T13:04:33.000Z",
      Followers: [
        {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$16ClPTh28gde/3TnBX6N8eP4Em0trhb7GBhcMwohulJsU9ponGPhK",
          isAdmin: true,
          image: "https://i.imgur.com/5XlJtEs.jpg",
          createdAt: "2021-02-15T13:04:33.000Z",
          updatedAt: "2021-02-15T13:08:01.000Z",
          Followship: {
            followerId: 1,
            followingId: 11,
            createdAt: "2021-02-20T10:17:22.000Z",
            updatedAt: "2021-02-20T10:17:22.000Z",
          },
        },
      ],
      FollowerCount: 1,
      isFollowed: true,
    },
    {
      id: 31,
      name: "aaaTEST",
      email: "aaat@aaa.com",
      password: "$2a$10$9soLNtv.7NGEuc2hKnavkOuWrZY..US1mbRzXCkJFobHGBXr5g4BC",
      isAdmin: false,
      image: null,
      createdAt: "2021-02-18T07:48:10.000Z",
      updatedAt: "2021-02-18T07:48:10.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
  ],
};

export default {
  name: "Users",
  mixins: [emptyImageFilter],
  components: {
    NavTabs,
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    fetchTopUsers() {
      this.users = dummyData.users.map((user) => ({
        id: user.id,
        name: user.name,
        image: user.image,
        followerCount: user.FollowerCount,
        isFollowed: user.isFollowed,
      }));
    },
    addFollowing(userId) {
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
    },
    deleteFollowing(userId) {
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
    },
  },
  created() {
    this.fetchTopUsers();
  },
};
</script>