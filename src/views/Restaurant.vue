<template>
  <div class="container py-5">
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :initial-restaurant="restaurant" />

    <hr />
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments
      :restaurantComments="restaurantComments"
      @after-delete-comment="afterDeleteComment"
    />

    <!-- 新增評論 CreateComment -->
    <CreateComment
      :restaurant-id="restaurant.id"
      @after-create-comment="afterCreateComment"
    />
  </div>
</template>

<script>
import RestaurantDetail from "./../components/RestaurantDetail";
import RestaurantComments from "./../components/RestaurantComments";
import CreateComment from "./../components/CreateComment";

const dummyUser = {
  currentUser: {
    id: 1,
    name: "root",
    email: "root@example.com",
    isAdmin: true,
  },
  isAuthenticated: true,
};

const dummyData = {
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
    updatedAt: "2021-04-14T07:50:48.340Z",
    Category: {
      id: 61,
      name: "複合式料理",
      createdAt: "2021-02-15T13:04:34.000Z",
      updatedAt: "2021-02-15T13:04:34.000Z",
    },
    LikedUsers: [
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
        Like: {
          UserId: 1,
          RestaurantId: 1,
          createdAt: "2021-02-19T04:38:08.000Z",
          updatedAt: "2021-02-19T04:38:08.000Z",
        },
      },
    ],
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
    Comments: [
      {
        id: 31,
        text: "recusandae tempora molestiae",
        UserId: 21,
        RestaurantId: 1,
        createdAt: "2021-02-15T13:04:35.000Z",
        updatedAt: "2021-02-15T13:04:35.000Z",
        User: {
          id: 21,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$4mK12LWzL/Tux72QN2NQVOk2YfctU6Ooe1uBAm/TyeGSbGEsoTalS",
          isAdmin: false,
          image: "https://loremflickr.com/320/240?lock=74.59861446049072",
          createdAt: "2021-02-15T13:04:34.000Z",
          updatedAt: "2021-02-15T13:04:34.000Z",
        },
      },
      {
        id: 81,
        text: "hi",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2021-02-15T13:06:18.000Z",
        updatedAt: "2021-02-15T13:06:18.000Z",
        User: {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$16ClPTh28gde/3TnBX6N8eP4Em0trhb7GBhcMwohulJsU9ponGPhK",
          isAdmin: true,
          image: "https://i.imgur.com/5XlJtEs.jpg",
          createdAt: "2021-02-15T13:04:33.000Z",
          updatedAt: "2021-02-15T13:08:01.000Z",
        },
      },
    ],
  },
  isFavorited: true,
  isLiked: true,
};

export default {
  name: "Restaurant",
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
        isFavorited: false,
        isLiked: false,
      },
      restaurantComments: [],
      currentUser: dummyUser.currentUser,
    };
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log("fetchRestaurant id: ", restaurantId);

      const { restaurant, isFavorited, isLiked } = dummyData;
      const {
        id,
        name,
        Category,
        image,
        opening_hours,
        tel,
        address,
        description,
        Comments,
      } = restaurant;

      this.restaurant = {
        id,
        name,
        categoryName: Category ? Category.name : "未分類",
        image,
        openingHours: opening_hours,
        tel,
        address,
        description,
        isFavorited,
        isLiked,
      };

      this.restaurantComments = Comments;
    },
    afterDeleteComment(commentId) {
      console.log("afterDeleteComment", commentId);
      this.restaurantComments = this.restaurantComments.filter(
        (comment) => comment.id !== commentId
      );
    },
    afterCreateComment(payload) {
      console.log("payload", payload);
      const { commentId, restaurantId, text } = payload;
      this.restaurantComments.push({
        id: commentId,
        RestaurantId: restaurantId,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name,
        },
        text,
        createdAt: new Date(),
      });
    },
  },
  created() {
    const { id } = this.$route.params;
    this.fetchRestaurant(id);
  },
};
</script>