<template>
  <div class="container py-5">
    <NavTabs />

    <!-- Restaurants NavPills -->
    <RestaurantsNavPills 
    :categories="categories" />

    <div class="row">
      <!-- Restaurants Card -->
      <RestaurantCard 
      v-for="rest in restaurants" 
      :key="rest.id" 
      :initial-restaurant="rest" />
    </div>

    <!-- Restaurants Pagination -->

  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import RestaurantCard from './../components/RestaurantCard'
import RestaurantsNavPills from './../components/RestaurantsNavPills'

const dummyData = {
    "restaurants": [
        {
            "id": 1,
            "name": "Jeanette Towne",
            "tel": "0120456789",
            "address": "178 Andreanne Gateway",
            "opening_hours": "08:00",
            "description": "tenetur ut repellat",
            "image": "https://i.imgur.com/MIdlANq.jpeg",
            "CategoryId": 61,
            "viewCounts": 18,
            "createdAt": "2021-02-15T13:04:35.000Z",
            "updatedAt": "2021-02-21T07:19:26.000Z",
            "Category": {
                "id": 61,
                "name": "複合式料理",
                "createdAt": "2021-02-15T13:04:34.000Z",
                "updatedAt": "2021-02-15T13:04:34.000Z"
            },
            "categoryName": "複合式料理",
            "isFavorited": true,
            "isLiked": true
        },
        {
            "id": 11,
            "name": "Christy Kiehn",
            "tel": "649-790-4495",
            "address": "711 Harber Way",
            "opening_hours": "08:00",
            "description": "Maxime expedita non.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?lock=46.78025792801637",
            "CategoryId": 1,
            "viewCounts": 5,
            "createdAt": "2021-02-15T13:04:35.000Z",
            "updatedAt": "2021-02-18T09:28:12.000Z",
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-02-15T13:04:34.000Z",
                "updatedAt": "2021-02-15T13:04:34.000Z"
            },
            "categoryName": "中式料理",
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 21,
            "name": "Ms. Marco Collins",
            "tel": "1-712-731-5373 x45457",
            "address": "4855 Schneider Court",
            "opening_hours": "08:00",
            "description": "eligendi a nihil",
            "image": "https://loremflickr.com/320/240/restaurant,food/?lock=0.7685827682673008",
            "CategoryId": 21,
            "viewCounts": 8,
            "createdAt": "2021-02-15T13:04:35.000Z",
            "updatedAt": "2021-02-21T07:19:53.000Z",
            "Category": {
                "id": 21,
                "name": "義大利料理",
                "createdAt": "2021-02-15T13:04:34.000Z",
                "updatedAt": "2021-02-15T13:04:34.000Z"
            },
            "categoryName": "義大利料理",
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 31,
            "name": "Stephanie Kemmer",
            "tel": "997-758-7300 x8375",
            "address": "9203 Wilkinson Turnpike",
            "opening_hours": "08:00",
            "description": "Expedita quia et hic inventore quam illo voluptate",
            "image": "https://loremflickr.com/320/240/restaurant,food/?lock=72.96404727088436",
            "CategoryId": 1,
            "viewCounts": 0,
            "createdAt": "2021-02-15T13:04:35.000Z",
            "updatedAt": "2021-02-15T13:04:35.000Z",
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-02-15T13:04:34.000Z",
                "updatedAt": "2021-02-15T13:04:34.000Z"
            },
            "categoryName": "中式料理",
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 41,
            "name": "Anne Heathcote",
            "tel": "873.658.1851",
            "address": "9776 Janet Loop",
            "opening_hours": "08:00",
            "description": "Atque deserunt quisquam quasi eos et aut distincti",
            "image": "https://loremflickr.com/320/240/restaurant,food/?lock=42.16742315789106",
            "CategoryId": 61,
            "viewCounts": 3,
            "createdAt": "2021-02-15T13:04:35.000Z",
            "updatedAt": "2021-02-17T12:44:49.000Z",
            "Category": {
                "id": 61,
                "name": "複合式料理",
                "createdAt": "2021-02-15T13:04:34.000Z",
                "updatedAt": "2021-02-15T13:04:34.000Z"
            },
            "categoryName": "複合式料理",
            "isFavorited": false,
            "isLiked": true
        },
        {
            "id": 51,
            "name": "Nick Hamill",
            "tel": "1-816-442-6759 x684",
            "address": "87854 Batz Falls",
            "opening_hours": "08:00",
            "description": "In optio repellendus natus. Et voluptates quasi to",
            "image": "https://loremflickr.com/320/240/restaurant,food/?lock=30.013642593210932",
            "CategoryId": 61,
            "viewCounts": 0,
            "createdAt": "2021-02-15T13:04:35.000Z",
            "updatedAt": "2021-02-15T13:04:35.000Z",
            "Category": {
                "id": 61,
                "name": "複合式料理",
                "createdAt": "2021-02-15T13:04:34.000Z",
                "updatedAt": "2021-02-15T13:04:34.000Z"
            },
            "categoryName": "複合式料理",
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 61,
            "name": "Dr. Lorenzo Huel",
            "tel": "(398) 735-7582 x9362",
            "address": "627 Macejkovic Light",
            "opening_hours": "08:00",
            "description": "Explicabo vero accusantium accusamus suscipit. Vel",
            "image": "https://loremflickr.com/320/240/restaurant,food/?lock=35.80909859061683",
            "CategoryId": 51,
            "viewCounts": 1,
            "createdAt": "2021-02-15T13:04:35.000Z",
            "updatedAt": "2021-02-15T13:07:30.000Z",
            "Category": {
                "id": 51,
                "name": "美式料理",
                "createdAt": "2021-02-15T13:04:34.000Z",
                "updatedAt": "2021-02-15T13:04:34.000Z"
            },
            "categoryName": "美式料理",
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 71,
            "name": "Ebony Hermiston DDS",
            "tel": "779.237.8970",
            "address": "7829 Megane Turnpike",
            "opening_hours": "08:00",
            "description": "necessitatibus",
            "image": "https://loremflickr.com/320/240/restaurant,food/?lock=17.69598297359545",
            "CategoryId": 31,
            "viewCounts": 1,
            "createdAt": "2021-02-15T13:04:35.000Z",
            "updatedAt": "2021-02-19T14:30:23.000Z",
            "Category": {
                "id": 31,
                "name": "墨西哥料理",
                "createdAt": "2021-02-15T13:04:34.000Z",
                "updatedAt": "2021-02-15T13:04:34.000Z"
            },
            "categoryName": "墨西哥料理",
            "isFavorited": true,
            "isLiked": false
        },
        {
            "id": 81,
            "name": "Daisy Shanahan",
            "tel": "901.840.4997",
            "address": "56252 Wade Meadows",
            "opening_hours": "08:00",
            "description": "quia et repellat",
            "image": "https://loremflickr.com/320/240/restaurant,food/?lock=28.861926528808326",
            "CategoryId": 11,
            "viewCounts": 0,
            "createdAt": "2021-02-15T13:04:35.000Z",
            "updatedAt": "2021-02-15T13:04:35.000Z",
            "Category": {
                "id": 11,
                "name": "日本料理",
                "createdAt": "2021-02-15T13:04:34.000Z",
                "updatedAt": "2021-02-15T13:04:34.000Z"
            },
            "categoryName": "日本料理",
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 91,
            "name": "Luz Senger",
            "tel": "836.671.3428",
            "address": "7000 Upton Mount",
            "opening_hours": "08:00",
            "description": "Sunt itaque accusantium placeat expedita incidunt ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?lock=93.6162782006305",
            "CategoryId": 21,
            "viewCounts": 3,
            "createdAt": "2021-02-15T13:04:35.000Z",
            "updatedAt": "2021-02-17T12:42:46.000Z",
            "Category": {
                "id": 21,
                "name": "義大利料理",
                "createdAt": "2021-02-15T13:04:34.000Z",
                "updatedAt": "2021-02-15T13:04:34.000Z"
            },
            "categoryName": "義大利料理",
            "isFavorited": false,
            "isLiked": false
        }
    ],
    "categories": [
        {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2021-02-15T13:04:34.000Z",
            "updatedAt": "2021-02-15T13:04:34.000Z"
        },
        {
            "id": 11,
            "name": "日本料理",
            "createdAt": "2021-02-15T13:04:34.000Z",
            "updatedAt": "2021-02-15T13:04:34.000Z"
        },
        {
            "id": 21,
            "name": "義大利料理",
            "createdAt": "2021-02-15T13:04:34.000Z",
            "updatedAt": "2021-02-15T13:04:34.000Z"
        },
        {
            "id": 31,
            "name": "墨西哥料理",
            "createdAt": "2021-02-15T13:04:34.000Z",
            "updatedAt": "2021-02-15T13:04:34.000Z"
        },
        {
            "id": 41,
            "name": "素食料理",
            "createdAt": "2021-02-15T13:04:34.000Z",
            "updatedAt": "2021-02-15T13:04:34.000Z"
        },
        {
            "id": 51,
            "name": "美式料理",
            "createdAt": "2021-02-15T13:04:34.000Z",
            "updatedAt": "2021-02-15T13:04:34.000Z"
        },
        {
            "id": 61,
            "name": "複合式料理",
            "createdAt": "2021-02-15T13:04:34.000Z",
            "updatedAt": "2021-02-15T13:04:34.000Z"
        }
    ],
    "categoryId": "",
    "page": 1,
    "totalPage": [
        1,
        2,
        3,
        4,
        5,
        6
    ],
    "prev": 1,
    "next": 6
}

export default {
  name: 'Restaurants',
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills
  },
  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: -1
    }
  },
  methods: {
    fetchRestaurants() {
      const { restaurants, categories, categoryId, page, totalPage } = dummyData
      this.restaurants = restaurants
      this.categories = categories
      this.categoryId = categoryId
      this.currentPage = page
      this.totalPage = totalPage
    }
  },
  created() {
    this.fetchRestaurants()
  }
}
</script>