<template>
  <div class="container py-5">
    <h1>User</h1>
    <!-- UserProfileCard -->
    <UserProfileCard
      :user="user"
      :is-current-user="currentUser.id === user.id"
      :initial-is-followed="isFollowed"
    />

    <div class="row">
      <div class="col-md-4">
        <!-- UserFollowingsCard -->

        <!-- UserFollowersCard -->
      </div>
      <div class="col-md-8">
        <!-- UserCommentsCard -->

        <!-- UserFavoritedRestaurantsCard -->
      </div>
    </div>
  </div>
</template>

<script>
import UserProfileCard from "./../components/UserProfileCard";

const dummyUser = {
  currentUser: {
    id: 1,
    name: "root",
    email: "root@example.com",
    image: "https://i.imgur.com/5XlJtEs.jpg",
    isAdmin: true,
  },
  isAuthenticated: true,
};

const dummyData = {
  profile: {
    id: 1,
    name: "root",
    email: "root@example.com",
    password: "$2a$10$16ClPTh28gde/3TnBX6N8eP4Em0trhb7GBhcMwohulJsU9ponGPhK",
    isAdmin: true,
    image: "https://i.imgur.com/5XlJtEs.jpg",
    createdAt: "2021-02-15T13:04:33.000Z",
    updatedAt: "2021-02-15T13:08:01.000Z",
    FavoritedRestaurants: [
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
        Favorite: {
          UserId: 1,
          RestaurantId: 1,
          createdAt: "2021-02-16T05:31:43.000Z",
          updatedAt: "2021-02-16T05:31:43.000Z",
        },
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
        Favorite: {
          UserId: 1,
          RestaurantId: 71,
          createdAt: "2021-02-16T10:10:11.000Z",
          updatedAt: "2021-02-16T10:10:11.000Z",
        },
      },
    ],
    Followers: [
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
        Followship: {
          followerId: 11,
          followingId: 1,
          createdAt: "2021-02-16T10:10:34.000Z",
          updatedAt: "2021-02-16T10:10:34.000Z",
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
        Followship: {
          followerId: 21,
          followingId: 1,
          createdAt: "2021-02-17T03:01:13.000Z",
          updatedAt: "2021-02-17T03:01:13.000Z",
        },
      },
    ],
    Followings: [
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
        Followship: {
          followerId: 1,
          followingId: 21,
          createdAt: "2021-02-16T10:10:01.000Z",
          updatedAt: "2021-02-16T10:10:01.000Z",
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
        Followship: {
          followerId: 1,
          followingId: 11,
          createdAt: "2021-02-20T10:17:22.000Z",
          updatedAt: "2021-02-20T10:17:22.000Z",
        },
      },
    ],
    Comments: [
      {
        id: 81,
        text: "hi",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2021-02-15T13:06:18.000Z",
        updatedAt: "2021-02-15T13:06:18.000Z",
        Restaurant: {
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
        },
      },
    ],
  },
  noRepeatCommentRests: [
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
    },
  ],
  isFollowed: false,
};

export default {
  name: "User",
  components: {
    UserProfileCard,
  },
  data() {
    return {
      user: {
        id: 0,
        image: "",
        name: "",
        email: "",
        followingsLength: 0,
        followersLength: 0,
        commentsLength: 0,
        favoritedRestaurantsLength: 0,
      },
      isFollowed: false,
      followings: [],
      followers: [],
      comments: [],
      favoritedRestaurants: [],
      currentUser: {},
    };
  },
  created() {
    this.fetchUser();
    this.currentUser = dummyUser.currentUser;
  },
  methods: {
    fetchUser(userId) {
      console.log(userId);

      const { profile, isFollowed } = dummyData;
      const {
        id,
        image,
        name,
        email,
        Followings,
        Followers,
        Comments,
        FavoritedRestaurants,
      } = profile;

      this.user = {
        ...this.user,
        id,
        image,
        name,
        email,
        followingsLength: Followings.length,
        followersLength: Followers.length,
        commentsLength: Comments.length,
        favoritedRestaurantsLength: FavoritedRestaurants.length,
      };
      this.isFollowed = isFollowed;
      this.followings = Followings;
      this.followers = Followers;
      this.favoritedRestaurants = FavoritedRestaurants;
      this.comments = Comments.filter((comment) => comment.Restaurant);
    },
  },
};
</script>