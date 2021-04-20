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

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
const dummyUser = {
  currentUser: {
    id: 1,
    name: "root",
    email: "root@example.com",
    isAdmin: true,
    image: "https://i.imgur.com/5XlJtEs.jpg",
  },
  isAuthenticated: true,
};

export default {
  data() {
    return {
      id: -1,
      name: "",
      email: "",
      image: "",
    };
  },
  created() {
    this.fetchUser();
  },
  methods: {
    fetchUser() {
      const { currentUser } = dummyUser;
      const { id, name, email, image } = currentUser;
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
    handleSubmit(e) {
      const form = e.target;
      const formData = new FormData(form);

      // TODO: 透過 API 向伺服器更新使用者
      for (let [name, value] of formData.entries()) {
        console.log(name + ": " + value);
      }
    },
  },
};
</script>