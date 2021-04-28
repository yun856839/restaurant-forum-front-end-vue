<template>
  <div class="container py-5">
    <form @submit.prevent.stop="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          v-model="name"
          id="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          v-if="image"
          :src="image"
          class="d-block img-thumbnail mb-3"
          width="200"
          height="200"
        />
        <input
          @change="handleFileChange"
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
        />
      </div>

      <button :disabled="isProcessing" type="submit" class="btn btn-primary">
        {{ isProcessing ? "資料更新中..." : "Submit" }}
      </button>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";

export default {
  data() {
    return {
      id: -1,
      name: "",
      email: "",
      image: "",
      isProcessing: false,
    };
  },
  created() {
    if (this.currentUser.id === -1) return;
    const { id } = this.$route.params;
    this.setUser(id);
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  watch: {
    currentUser(user) {
      if (user.id === -1) return;
      const { id } = this.$route.params;
      this.setUser(id);
    },
  },
  methods: {
    setUser(userId) {
      const { id, name, email, image } = this.currentUser;

      if (id.toString() !== userId.toString()) {
        this.$router.push({ name: "not-found" });
        return;
      }

      (this.id = id),
        (this.name = name),
        (this.email = email),
        (this.image = image);
    },
    handleFileChange(e) {
      const { files } = e.target;
      if (files.length === 0) return;
      const imageURL = window.URL.createObjectURL(files[0]);
      this.image = imageURL;
    },
    async handleSubmit(e) {
      try {
        if (!this.name) {
          Toast.fire({
            icon: "warning",
            title: "Name can not be empty !",
          });
          return;
        }
        const form = e.target;
        const formData = new FormData(form);
        this.isProcessing = true;

        // TODO: 透過 API 向伺服器更新使用者
        const { data } = await usersAPI.update({
          userId: this.id,
          formData,
        });

        if (data.status === "error") {
          throw new Error(data.message);
        }

        this.$router.push({ name: "user", params: { id: this.id } });
        Toast.fire({
          icon: "success",
          title: "Update user successed !",
        });
      } catch (err) {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "Can not edit user. Try later.",
        });
      }
    },
  },
};
</script>