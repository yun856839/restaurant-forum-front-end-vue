<template>
  <div class="container py-5">
    <AdminRestaurantForm
      :initial-restaurant="restaurant"
      @after-submit="handleAfterSubmit"
    />
  </div>
</template>

<script>
import AdminRestaurantForm from "./../components/AdminRestaurantForm.vue";

const dummyData = {
  data: {
    restaurant: {
      id: 1,
      name: "Jeanette Towne",
      tel: "0120456789",
      address: "178 Andreanne Gateway",
      opening_hours: "08:00",
      description: "tenetur ut repellat",
      image: "https://i.imgur.com/MIdlANq.jpeg",
      CategoryId: 61,
    },
  },
};

export default {
  name: "AdminRestaurantEdit",
  components: {
    AdminRestaurantForm,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        tel: "",
        address: "",
        openingHours: "",
        description: "",
        image: "",
        categoryId: "",
      },
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchRestaurant(id);
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log("EDIT restaurantId", restaurantId);
      const { restaurant } = dummyData.data;
      const {
        id,
        name,
        tel,
        address,
        opening_hours: openingHours,
        description,
        image,
        CategoryId: categoryId,
      } = restaurant;
      this.restaurant = {
        ...this.restaurant,
        id,
        name,
        tel,
        address,
        openingHours,
        description,
        image,
        categoryId,
      };
    },
    handleAfterSubmit(formData) {
      // 透過 API 將表單資料送到伺服器
      for (let [name, value] of formData.entries()) {
        console.log(name + ": " + value);
      }
    },
  },
};
</script>