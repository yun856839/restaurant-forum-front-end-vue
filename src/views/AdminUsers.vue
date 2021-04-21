<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.email }}</td>
          <td>{{ user.isAdmin ? "admin" : "user" }}</td>
          <td>
            <button
              v-if="currentUser.id !== user.id"
              @click.prevent.stop="
                toggleUserRole({ userId: user.id, isAdmin: user.isAdmin })
              "
              type="button"
              class="btn btn-link"
            >
              {{ user.isAdmin ? "Set As User" : "Set As Admin" }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "./../components/AdminNav";

const dummyData = {
  users: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$16ClPTh28gde/3TnBX6N8eP4Em0trhb7GBhcMwohulJsU9ponGPhK",
      isAdmin: 1,
      image: "https://i.imgur.com/5XlJtEs.jpg",
      createdAt: "2021-02-15T13:04:33.000Z",
      updatedAt: "2021-02-15T13:08:01.000Z",
    },
    {
      id: 11,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$9cqt0UixqUIPCraM6jXvKezOMG5ANH7WGnmis0ddnSu7bbDCdM7iW",
      isAdmin: 0,
      image: "https://loremflickr.com/320/240?lock=2.7445859530035754",
      createdAt: "2021-02-15T13:04:33.000Z",
      updatedAt: "2021-02-15T13:04:33.000Z",
    },
    {
      id: 21,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$4mK12LWzL/Tux72QN2NQVOk2YfctU6Ooe1uBAm/TyeGSbGEsoTalS",
      isAdmin: 0,
      image: "https://loremflickr.com/320/240?lock=74.59861446049072",
      createdAt: "2021-02-15T13:04:34.000Z",
      updatedAt: "2021-02-15T13:04:34.000Z",
    },
    {
      id: 31,
      name: "aaaTEST",
      email: "aaat@aaa.com",
      password: "$2a$10$9soLNtv.7NGEuc2hKnavkOuWrZY..US1mbRzXCkJFobHGBXr5g4BC",
      isAdmin: 0,
      image: null,
      createdAt: "2021-02-18T07:48:10.000Z",
      updatedAt: "2021-02-18T07:48:10.000Z",
    },
  ],
};

const dummyUser = {
  currentUser: {
    id: 1,
    name: "root",
    email: "root@example.com",
    isAdmin: true,
  },
  isAuthenticated: true,
};

export default {
  name: "AdminUsers",
  components: {
    AdminNav,
  },
  created() {
    this.fetchUsers();
  },
  data() {
    return {
      users: [],
      currentUser: dummyUser.currentUser,
    };
  },
  methods: {
    fetchUsers() {
      this.users = dummyData.users;
    },
    toggleUserRole({ userId, isAdmin }) {
      this.users = this.users.map((user) => {
        if (user.id === userId) {
          return {
            ...user,
            isAdmin: !isAdmin,
          };
        }
        return user;
      });
    },
  },
};
</script>