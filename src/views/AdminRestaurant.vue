<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-md-12">
        <h1>{{ restaurant.name }}</h1>
        <span class="badge badge-secondary mt-1 mb-3">
          {{ restaurant.categoryName }}
        </span>
      </div>
      <div class="col-md-4">
        <img
          class="img-responsive center-block"
          :src="restaurant.image | emptyImage"
          style="width: 250px; margin-bottom: 25px"
        />
        <div class="well">
          <ul class="list-unstyled">
            <li>
              <strong>Opening Hour:</strong>
              {{ restaurant.openingHours }}
            </li>
            <li>
              <strong>Tel:</strong>
              {{ restaurant.tel }}
            </li>
            <li>
              <strong>Address:</strong>
              {{ restaurant.address }}
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-8">
        <p>{{ restaurant.description }}</p>
      </div>
    </div>
    <hr />
    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
import { emptyImageFilter } from "./../utils/mixins";

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
      viewCounts: 19,
      createdAt: "2021-02-15T13:04:35.000Z",
      updatedAt: "2021-04-14T07:50:48.000Z",
      Category: {
        id: 61,
        name: "複合式料理",
        createdAt: "2021-02-15T13:04:34.000Z",
        updatedAt: "2021-02-15T13:04:34.000Z",
      },
    },
  },
};

export default {
  name: "AdminRestaurant",
  mixins: [emptyImageFilter],
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
        categoryName: "",
      },
    };
  },
  mounted() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log("admin restaurantId", restaurantId);
      const { restaurant } = dummyData.data;
      const {
        id,
        name,
        tel,
        address,
        opening_hours: openingHours,
        description,
        image,
        Category,
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
        categoryName: Category ? Category.name : "未分類",
      };
    },
  },
};
</script>