<template>
  <div class="signupDiv container py-5">
    <form class="w-100" @submit.prevent.stop="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="title h3 mb-3 font-weight-normal">Sign In</h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="email">email</label>
        <input
          id="email"
          v-model="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="username"
          required
          autofocus
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="current-password"
          required
        />
      </div>

      <button
        :disabled="isProcessing"
        class="btn btn-lg btn-info btn-block mb-3"
        type="submit"
      >
        Submit
      </button>

      <div class="text-center mb-3">
        <p class="signup">
          <router-link to="/signup">Sign Up</router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">&copy; 2021</p>
    </form>
  </div>
</template>

<script>
import authorizationAPI from "./../apis/authorization";
import { Toast } from "./../utils/helpers";

export default {
  data() {
    return {
      email: "",
      password: "",
      isProcessing: false,
    };
  },
  methods: {
    async handleSubmit() {
      try {
        if (!this.email || !this.password) {
          Toast.fire({
            icon: "error",
            title: "Please enter Email or Password !",
          });
          return;
        }

        this.isProcessing = true;

        const res = await authorizationAPI.signIn({
          email: this.email,
          password: this.password,
        });
        const { data } = res;

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        localStorage.setItem("token", data.token);
        this.$router.push("/restaurants");
      } catch (err) {
        this.isProcessing = false;
        this.password = "";
        Toast.fire({
          icon: "error",
          title: "Wrong Email or Password !",
        });
        console.log("err", err);
      }
    },
  },
};
</script>

<style>
.signupDiv {
  width: 600px;
  font-weight: 700;
}
.title {
  color: red;
  background: snow;
}
.signup a {
  text-decoration: none;
  color: red;
}
.signup:first-child:hover {
  border: 1px solid skyblue;
}
</style>