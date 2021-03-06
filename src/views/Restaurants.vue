<template>
  <div class="container py-5">
    <NavTabs />

    <!-- Restaurants NavPills -->
    <RestaurantsNavPills :categories="categories" />

    <Spinner v-if="isLoading" />
    <template v-else>
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
      <div v-if="restaurants.length < 1">此類別目前無餐廳資料</div>
    </template>
  </div>
</template>

<script>
import Spinner from "./../components/Spinner";
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
    Spinner,
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
      isLoading: true,
      downTime: "",
    };
  },
  methods: {
    async fetchRestaurants({ queryPage, queryCategoryId }) {
      try {
        this.isLoading = true;
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
        this.isLoading = false;
      } catch (err) {
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: "Can not get restaurants data. Try later.",
        });
      }
    },
    async scrollFetchRestaurants({ queryPage, queryCategoryId }) {
      try {
        const res = await restaurantsAPI.getRestaurants({
          page: queryPage,
          categoryId: queryCategoryId,
        });
        const { restaurants, categoryId, page, totalPage } = res.data;
        this.restaurants.push(...restaurants);
        this.categoryId = categoryId;
        this.currentPage = page;
        this.totalPage = totalPage;
      } catch (err) {
        Toast.fire({
          icon: "error",
          title: "Can not get restaurants data. Try later.",
        });
      }
    },
    scroll() {
      if (this.downTime) {
        clearTimeout(this.downTime);
      }
      this.downTime = setTimeout(() => {
        let scrollTop = document.documentElement.scrollTop;
        let scrollHeight = document.documentElement.scrollHeight;
        let windowHeight = document.documentElement.clientHeight;
        if (scrollHeight - (scrollTop + windowHeight) <= 200) {
          this.scrollFetchRestaurants({
            queryPage: this.currentPage + 1,
            queryCategoryId: this.categoryId,
          });
        }
      }, 300);
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
  mounted() {
    window.addEventListener("scroll", () => {
      this.scroll();
    });
  },
};
</script>