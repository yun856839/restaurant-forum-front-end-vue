<template>
  <div class="container py-5">
    <NavTabs />
    <Spinner v-if="isLoading" />
    <template v-else>
      <h1 class="mt-5">人氣餐廳</h1>

      <hr />
      <div
        class="card mb-3"
        style="max-width: 540px; margin: auto"
        v-for="rest in restaurants"
        :key="rest.id"
      >
        <div class="row no-gutters">
          <div class="col-md-4">
            <router-link :to="{ name: 'restaurant', params: { id: rest.id } }">
              <img class="card-img" :src="rest.image | emptyImage" />
            </router-link>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ rest.name }}</h5>
              <span class="badge badge-secondary"
                >收藏數：{{ rest.FavoritedCounts }}</span
              >
              <p class="card-text">
                {{ rest.description }}
              </p>

              <router-link
                class="btn btn-primary mr-2"
                :to="{ name: 'restaurant', params: { id: rest.id } }"
                >Show</router-link
              >

              <button
                v-if="rest.isFavorited"
                @click.prevent.stop="deleteFavorite(rest.id)"
                type="button"
                class="btn btn-danger mr-2"
              >
                移除最愛
              </button>

              <button
                v-else
                @click.prevent.stop="addFavorite(rest.id)"
                type="button"
                class="btn btn-primary"
              >
                加到最愛
              </button>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import Spinner from "./../components/Spinner";
import NavTabs from "./../components/NavTabs";
import { emptyImageFilter } from "./../utils/mixins";
import restaurantsAPI from "./../apis/restaurants";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";

export default {
  mixins: [emptyImageFilter],
  components: {
    NavTabs,
    Spinner,
  },
  data() {
    return {
      restaurants: [],
      isLoading: true,
    };
  },
  created() {
    this.fetchRestaurantsTop();
  },
  methods: {
    async fetchRestaurantsTop() {
      try {
        this.isLoading = true;
        const { data } = await restaurantsAPI.getTopRestaurants();

        this.restaurants = data.restaurants;
        this.isLoading = false;
      } catch (err) {
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: "Can not get RestaurantsTop data. Try later.",
        });
      }
    },
    async addFavorite(restaurantId) {
      try {
        const { data } = await usersAPI.addFavorite({ restaurantId });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.restaurants = this.restaurants
          .map((restaurant) => {
            if (restaurant.id !== restaurantId) {
              return restaurant;
            }
            return {
              ...restaurant,
              FavoritedCounts: restaurant.FavoritedCounts + 1,
              isFavorited: true,
            };
          })
          .sort((a, b) => b.FavoritedCounts - a.FavoritedCounts);
      } catch (err) {
        Toast.fire({
          icon: "error",
          title: "Can not add favorite. Try later.",
        });
      }
    },
    async deleteFavorite(restaurantId) {
      try {
        const { data } = await usersAPI.deleteFavorite({ restaurantId });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.restaurants = this.restaurants
          .map((restaurant) => {
            if (restaurant.id !== restaurantId) {
              return restaurant;
            }
            return {
              ...restaurant,
              FavoritedCounts: restaurant.FavoritedCounts - 1,
              isFavorited: false,
            };
          })
          .sort((a, b) => b.FavoritedCounts - a.FavoritedCounts);
      } catch (err) {
        Toast.fire({
          icon: "error",
          title: "Can not delete favorite. Try later.",
        });
      }
    },
  },
};
</script>
