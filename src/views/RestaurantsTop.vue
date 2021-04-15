<template>
  <div class="container py-5">
    <NavTabs />
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
            <img class="card-img" :src="rest.image" />
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
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";

const dummyData = {
  restaurants: [
    {
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
      FavoritedUsers: [
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
          Favorite: {
            UserId: 1,
            RestaurantId: 1,
            createdAt: "2021-02-16T05:31:43.000Z",
            updatedAt: "2021-02-16T05:31:43.000Z",
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
          Favorite: {
            UserId: 11,
            RestaurantId: 1,
            createdAt: "2021-02-16T10:10:44.000Z",
            updatedAt: "2021-02-16T10:10:44.000Z",
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
          Favorite: {
            UserId: 21,
            RestaurantId: 1,
            createdAt: "2021-02-17T03:00:30.000Z",
            updatedAt: "2021-02-17T03:00:30.000Z",
          },
        },
      ],
      isFavorited: true,
      FavoritedCounts: 3,
    },
    {
      id: 71,
      name: "Ebony Hermiston DDS",
      tel: "779.237.8970",
      address: "7829 Megane Turnpike",
      opening_hours: "08:00",
      description: "necessitatibus",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?lock=17.69598297359545",
      CategoryId: 31,
      viewCounts: 1,
      createdAt: "2021-02-15T13:04:35.000Z",
      updatedAt: "2021-02-19T14:30:23.000Z",
      FavoritedUsers: [
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
          Favorite: {
            UserId: 1,
            RestaurantId: 71,
            createdAt: "2021-02-16T10:10:11.000Z",
            updatedAt: "2021-02-16T10:10:11.000Z",
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
          Favorite: {
            UserId: 11,
            RestaurantId: 71,
            createdAt: "2021-02-16T10:10:46.000Z",
            updatedAt: "2021-02-16T10:10:46.000Z",
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
          Favorite: {
            UserId: 21,
            RestaurantId: 71,
            createdAt: "2021-02-17T02:59:57.000Z",
            updatedAt: "2021-02-17T02:59:57.000Z",
          },
        },
      ],
      isFavorited: true,
      FavoritedCounts: 3,
    },
    {
      id: 11,
      name: "Christy Kiehn",
      tel: "649-790-4495",
      address: "711 Harber Way",
      opening_hours: "08:00",
      description: "Maxime expedita non.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?lock=46.78025792801637",
      CategoryId: 1,
      viewCounts: 5,
      createdAt: "2021-02-15T13:04:35.000Z",
      updatedAt: "2021-02-18T09:28:12.000Z",
      FavoritedUsers: [],
      isFavorited: false,
      FavoritedCounts: 0,
    },
    {
      id: 21,
      name: "Ms. Marco Collins",
      tel: "1-712-731-5373 x45457",
      address: "4855 Schneider Court",
      opening_hours: "08:00",
      description: "eligendi a nihil",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?lock=0.7685827682673008",
      CategoryId: 21,
      viewCounts: 8,
      createdAt: "2021-02-15T13:04:35.000Z",
      updatedAt: "2021-02-21T07:19:53.000Z",
      FavoritedUsers: [],
      isFavorited: false,
      FavoritedCounts: 0,
    },
    {
      id: 31,
      name: "Stephanie Kemmer",
      tel: "997-758-7300 x8375",
      address: "9203 Wilkinson Turnpike",
      opening_hours: "08:00",
      description: "Expedita quia et hic inventore quam illo voluptate",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?lock=72.96404727088436",
      CategoryId: 1,
      viewCounts: 0,
      createdAt: "2021-02-15T13:04:35.000Z",
      updatedAt: "2021-02-15T13:04:35.000Z",
      FavoritedUsers: [],
      isFavorited: false,
      FavoritedCounts: 0,
    },
    {
      id: 41,
      name: "Anne Heathcote",
      tel: "873.658.1851",
      address: "9776 Janet Loop",
      opening_hours: "08:00",
      description: "Atque deserunt quisquam quasi eos et aut distincti",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?lock=42.16742315789106",
      CategoryId: 61,
      viewCounts: 3,
      createdAt: "2021-02-15T13:04:35.000Z",
      updatedAt: "2021-02-17T12:44:49.000Z",
      FavoritedUsers: [],
      isFavorited: false,
      FavoritedCounts: 0,
    },
    {
      id: 51,
      name: "Nick Hamill",
      tel: "1-816-442-6759 x684",
      address: "87854 Batz Falls",
      opening_hours: "08:00",
      description: "In optio repellendus natus. Et voluptates quasi to",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?lock=30.013642593210932",
      CategoryId: 61,
      viewCounts: 0,
      createdAt: "2021-02-15T13:04:35.000Z",
      updatedAt: "2021-02-15T13:04:35.000Z",
      FavoritedUsers: [],
      isFavorited: false,
      FavoritedCounts: 0,
    },
    {
      id: 61,
      name: "Dr. Lorenzo Huel",
      tel: "(398) 735-7582 x9362",
      address: "627 Macejkovic Light",
      opening_hours: "08:00",
      description: "Explicabo vero accusantium accusamus suscipit. Vel",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?lock=35.80909859061683",
      CategoryId: 51,
      viewCounts: 1,
      createdAt: "2021-02-15T13:04:35.000Z",
      updatedAt: "2021-02-15T13:07:30.000Z",
      FavoritedUsers: [],
      isFavorited: false,
      FavoritedCounts: 0,
    },
    {
      id: 81,
      name: "Daisy Shanahan",
      tel: "901.840.4997",
      address: "56252 Wade Meadows",
      opening_hours: "08:00",
      description: "quia et repellat",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?lock=28.861926528808326",
      CategoryId: 11,
      viewCounts: 0,
      createdAt: "2021-02-15T13:04:35.000Z",
      updatedAt: "2021-02-15T13:04:35.000Z",
      FavoritedUsers: [],
      isFavorited: false,
      FavoritedCounts: 0,
    },
    {
      id: 91,
      name: "Luz Senger",
      tel: "836.671.3428",
      address: "7000 Upton Mount",
      opening_hours: "08:00",
      description: "Sunt itaque accusantium placeat expedita incidunt ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?lock=93.6162782006305",
      CategoryId: 21,
      viewCounts: 3,
      createdAt: "2021-02-15T13:04:35.000Z",
      updatedAt: "2021-02-17T12:42:46.000Z",
      FavoritedUsers: [],
      isFavorited: false,
      FavoritedCounts: 0,
    },
  ],
};

export default {
  components: {
    NavTabs,
  },
  data() {
    return {
      restaurants: [],
    };
  },
  created() {
    this.fetchRestaurantsTop();
  },
  methods: {
    fetchRestaurantsTop() {
      this.restaurants = dummyData.restaurants;
    },
    addFavorite(restaurantId) {
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
    },
    deleteFavorite(restaurantId) {
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
    },
  },
};
</script>
