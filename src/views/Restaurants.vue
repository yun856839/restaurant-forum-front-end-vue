<template>
  <div class="container py-5">
    <NavTabs />

    <!-- Restaurants NavPills -->
    <RestaurantsNavPills :categories="categories" />

    <div class="row">
      <!-- Restaurants Card -->
      <RestaurantCard
        v-for="rest in restaurants"
        :key="rest.id"
        :initial-restaurant="rest"
      />
    </div>

    <!-- Restaurants Pagination -->
    <RestaurantsPagination
      v-if="totalPage.length > 1"
      :current-page="currentPage"
      :total-page="totalPage"
      :prev-page="prevPage"
      :next-page="nextPage"
      :categoryId="categoryId"
    />
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import RestaurantCard from "./../components/RestaurantCard";
import RestaurantsNavPills from "./../components/RestaurantsNavPills";
import RestaurantsPagination from "./../components/RestaurantsPagination";
import restaurantsAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";

export default {
  name: "Restaurants",
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination,
  },
  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      prevPage: -1,
      nextPage: -1,
    };
  },
  methods: {
    async fetchRestaurants({ queryPage, queryCategoryId }) {
      try {
        const res = await restaurantsAPI.getRestaurants({
          page: queryPage,
          categoryId: queryCategoryId,
        });

        const {
          restaurants,
          categories,
          categoryId,
          page,
          totalPage,
          prev,
          next,
        } = res.data;
        this.restaurants = restaurants;
        this.categories = categories;
        this.categoryId = categoryId;
        this.currentPage = page;
        this.totalPage = totalPage;
        this.prevPage = prev;
        this.nextPage = next;
      } catch (err) {
        Toast.fire({
          icon: "error",
          title: "Can not get restaurants data. Try later.",
        });
      }
    },
  },
  created() {
    const { page = "", categoryId = "" } = this.$route.query;
    this.fetchRestaurants({
      queryPage: page,
      queryCategoryId: categoryId,
    });
  },
  beforeRouteUpdate(to, from, next) {
    const { page = "", categoryId = "" } = to.query;
    this.fetchRestaurants({
      queryPage: page,
      queryCategoryId: categoryId,
    });
    next();
  },
};
</script>